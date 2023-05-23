import './landing.css';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel  from 'react-bootstrap/Carousel';

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Container fluid style={{transform:'translateY(55vh)'}}>
    <Row > 
        <Col md={{ offset: 1}}>
        <h1>trees!!</h1>
        </Col>
    </Row>
    <Row> 
        <Col xl={{ offset: 1}}>
        <h3>this website was made to teach you about trees</h3>
        </Col>
    </Row>
    <Row> 
        <Col sm={{offset: 1}}>
        <h6>By QiR Zhang</h6>
        </Col>
    </Row>
    </Container>

    
    

    
    
   
    
</div>

  );
}

