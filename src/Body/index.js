import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import './News.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormComponent from '../Body/Form';
import { getEverything } from '../Services/apiServices';
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage, setSearchParams, setTotalResults } from '../Services/stateService';
import { useParams, Link } from 'react-router-dom';
 
function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // useSelector eto react-redux Hook, kototyj sledit za Redux sostojaniem i pri nalichii izmenenij zapuskaet otrisovku komponenta
  const searchParams = useSelector((state) => state.searchParams);

  // useParams eto Hook react-router-DOM dlja poluchenija informacii s ssqlki
  const { q, lang } = useParams();
  // useDispatch eto Hook React Redux, blagodarja kotoromy my mozem vzaimodejstvovat' s Redux 
  // useDispatch eto most mezdu Reactom i Reduxom
  const dispatch = useDispatch();

  // useEffect - react hook, kotoryj zapuskaetca posle tovo, kak proizoshol pervqj render
  // useEffect prinimaet 2 parametra
  // 1: funkcija, kotoruju nuzno zapustit'
  // 2: massive iz peremennyh, ot kotoryh budet zaviset dalnejshaja rabota useEffect
  // vse vneshnie peremennye, kotorye my ispolzuem v funkcii dolzny byt v massive zavisimostej
  // pri ljubqh izmenijah etih zavisimostej useEffect zapuskaetca
  // pri izmenenijah v komponente, ne kasajushishjca zavisimosti useEffect ne zapuskajut useEffect, no kompoment renderitca
  // poetomy v njom luche vsego rabotat' s zaprosami
  // [lang, searchParams, dispatch, q] zapuskaetca tolki pri izmenenii etih paramentrov
  useEffect(() => {
    if(lang && searchParams.language !== lang) {
      dispatch(setSearchParams({
        ...searchParams,
        language: lang,
      }));
      return;
    }
    (async function () {
      try {
        const response = await getEverything({
          ...searchParams,
          q: q || searchParams.q,
        });
        const responseData = await response.json();
        if (responseData.status === 'error') {
          throw responseData;
        }
        setArticles(responseData.articles);
        // Redux dejstvie neobhodimo obernut' v Dispatch, 4toby Redux vzaimodejstoval s Reactom
        dispatch(setTotalResults(responseData.totalResults))
      }
      catch (error) {
        dispatch(setErrorMessage(error.message));
        
      }

    })();
  }, [lang, searchParams, dispatch, q]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Launch
      </Button>
      <Button variant="outline-secondary" className="mb-3 ms-2" >
      <Link to="/bitcoin" className="Button" style={{ textDecoration: 'none' }}>Bitcoin today</Link>
      </Button>
      <Row xs={1} md={2} lg={3} className="g-2">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article} />
          </Col>
        ))}
      </Row>
      <FormComponent
        show={show}
        handleClose={handleClose}
        setArticles={setArticles}
        searchProps={searchParams} />
    </>
  );
}

export default NewsGroupComponent;