import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import './News.scss'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormComponent from '../Body/Form';

function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const [formResponse, setFormResponse] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Launch
      </Button>
      <Row xs={1} md={2} lg={3} className="g-2">
        {formResponse?.articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article}/>
          </Col>
        ))}
      </Row>
      <FormComponent show={show} handleClose={handleClose} setFormResponse={setFormResponse}/>
    </>
  );
}

export default NewsGroupComponent;