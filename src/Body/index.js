import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import './News.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormComponent from '../Body/Form';
import { getEverything, getEverythingDummy } from '../Services/apiServices';
import { useDispatch, useSelector } from 'react-redux'
import { setErrorMessage, setSearchParams, setTotalResults } from '../Services/stateService';
import { useParams, Link } from 'react-router-dom';
 
function BodyComponent() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);
  

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const searchParams = useSelector((state) => state.searchParams);

  const { q, lang } = useParams();

  const dispatch = useDispatch();

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
        dispatch(setTotalResults(responseData.totalResults))
      }
      catch (error) {
        dispatch(setErrorMessage(error.message));
        const response = await getEverythingDummy();
        const responseData = await response.json();
        setArticles(responseData.articles);
      }

    })();
  }, [lang, searchParams, dispatch, q]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Search
      </Button>
      <Button variant="outline-secondary" className="mb-3 ms-2" >
      <Link to="/news-app/bitcoin" className="Button" style={{ textDecoration: 'none' }}>Bitcoin today</Link>
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

export default BodyComponent;