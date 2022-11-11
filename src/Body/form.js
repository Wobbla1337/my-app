import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FromComponent({ show, handleClose }) {
    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'Germany', code: 'de' },
        { label: 'Franch', code: 'fr' },
        { label: 'Spanish', code: 'es'},
    ];

    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1);
    };
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(event);
    }

    return (

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label >Keywords</Form.Label>
                        <Form.Control type="text" placeholder="Enter keywords or phrases" />
                        <Form.Text className="text-muted">
                            Advanced search is supported.
                        </Form.Text>
                    </Form.Group>
                    {['title', 'description', 'content'].map((type) => (
                        <div key={`${type}`} className="mb-3">
                            <Form.Check
                                label={capitalize(type)}
                                // css: text-transform: capitalize;
                                name="searchIn"
                                type="checkbox"
                                id={`inline-${type}-1`}
                            />
                        </div>
                    ))}
                    <Form.Group className="mb-3">
                        <Form.Label>From-to</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control aria-label="from" />
                            <Form.Control aria-label="to" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Language</Form.Label>
                        <Form.Select>
                            {languages.map((lang) => (
                                <option>{lang.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Search
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
         
                            );
}
export default FromComponent;