import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import school from '../school.jpg';


function SchoolComponent() {
    return (
        <Card className="text-center justify-content-center text-center m-auto" style={{ width: '30rem'}}>
            <Card.Img variant="top" src={school} />
            <Card.Header>About & Contact Information</Card.Header>
            <Card.Body>
                <Card.Title className="mt-2 mb-4">University of Front-end Development</Card.Title>
                <ListGroup horizontal className="justify-content-center mt-3 mb-3">
                    <ListGroup.Item variant="primary">HTML</ListGroup.Item>
                    <ListGroup.Item variant="warning">CSS</ListGroup.Item>
                    <ListGroup.Item variant="info">JavaScript</ListGroup.Item>
                    <ListGroup.Item variant="success">React</ListGroup.Item>
                </ListGroup>
                <Card.Text className="m-auto text-align-justify p-3" style={{textAlign: 'justify'}}> 
                    <p>This university is a good place to start if you want to become a <strong>web developer</strong>. You will learn about the day-to-day responsibilities of a web developer and get a general understanding of the core and underlying technologies that power the internet.</p>
                </Card.Text>
                <Button variant="outline-primary" href="mailto: university@gmail.com">Email us</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                <span>Main Street 1</span><br/>
                <span>London, UK</span><br/>
                <span>Wembley</span><br/>
                <span>W70 4GL</span><br/>
            </Card.Footer>
        </Card>
    )
}

export default SchoolComponent;