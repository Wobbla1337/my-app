import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import profileImage from '../profileImage.jpg';


function ContactComponent() {
    return (
    <Card className="justify-content-center text-center m-auto" style={{ width: '20rem'}}>
      <Card.Img variant="top" src={profileImage} />
      <Card.Body>
        <Card.Title>
        <h3><strong>Juri Tjurin</strong></h3></Card.Title>
        <Card.Text>
          Front-end Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Tartu mnt 24</ListGroup.Item>
        <ListGroup.Item>Tallinn, Estonia</ListGroup.Item>
        <ListGroup.Item>10115</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="mailto: rymkah@gmail.com">Email</Card.Link>
        <Card.Link href="tel: 55947604">Call</Card.Link>
      </Card.Body>
    </Card>
    )
}

export default ContactComponent;