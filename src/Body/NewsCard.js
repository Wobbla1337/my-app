import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';
import moment from 'moment';



function NewsCardComponent({ article }) {
  // useState eto funkcija/hook, kotoraja pomogaet rabotat' s sostojaniem komponenta
  // Sostojanie eto informacija, kotoruju komponent soderzit v sebe
  // Pri izmenenii sostojanija zapuskaetca novaja otriskova('render') komponenta
  // U kazdovo sostojanija jest svojo iznachalnoe znachenie i funkcija, kotoraja menaet eto znachenie
  // useState prinimaet kak argument iznachalno znachenie sostojanija i vqdajot massive s dvumja znachenijami 
  // 1: iznachalnoe sostojanie 
  // 2: funkciju dlja izmenenija sostojanija
  const [show, setShow] = useState(false);

  // Card komponent - eto komponent iz npm paketa react-bootstrap
  // react-bootstrap eto bibleoteka s gotovqmi react komponentami napisannyj s ispolzovaniem bootstrap (front-end css toolkit)
  return (
    <>
      <Card onClick={() => {setShow(true)}}> 
        <Card.Img variant="top" src={article.urlToImage || noImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
          <Card.Text dangerouslySetInnerHTML={{ __html: article.description }} className="Text">
          </Card.Text>
          {article.author ? (
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                <cite title="Author">{article.author}</cite>
              </footer>
            </blockquote>
          ): ''}
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{moment(article.publishedAt).format('DD.MM.YYYY')}</small>
        </Card.Footer>
      </Card>
      <NewsModalComponent show={show} setShow={setShow} article={article}/>
    </>
  );
}


export default NewsCardComponent;