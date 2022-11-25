import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';

// Kak i ljubaja funkcija v JS, tak i komponenty prinemajut props (properties)
// Komponent mozet prinjat beskone4noe kolichestvo properties, no hranit on i vse v odnoj peremennoj tipa 'object'
// Properties peredajutca v komponent takze kak v HTML element my peredajom 'attributes'
// <Component prop1={1} prop2={2} />
// V komponente props, kotorye poluchil kompoment my ne mozem menjat'
function NewsModalComponent({show, setShow, article} ) {
  const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal size = "lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Figure>
        <Figure.Image
            // width={171}
            // height={180}
            alt="171x180"
            src={article.urlToImage || noImage}
        />
        <Figure.Caption>
          {article.url}
        </Figure.Caption>
    </Figure>
    <p>{article.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" href={article.url} target="_blank">
            Read more
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewsModalComponent;