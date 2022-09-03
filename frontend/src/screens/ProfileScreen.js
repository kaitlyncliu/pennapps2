// var express = require('../../');
// var path = require('path');
// var app = module.exports = express();

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InfoButtons() {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                    Full Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="name" placeholder="Full Name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalBMI">
                <Form.Label column sm={2}>
                    BMI
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="bmi" placeholder="BMI" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAge">
                <Form.Label column sm={2}>
                    Age
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="age" placeholder="Age" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalActivityLevel">
                <Form.Label column sm={2}>
                    Activity Level
                </Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default InfoButtons;