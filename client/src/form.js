import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';


export const form = () =>(
    <Form>
        <Form.Row>
            <Col>
            <Form.Group controlId="firstName">
                <Form.Label>Manager's First Name</Form.Label>
                <Form.Control type="text" placeholder="Manager's First Name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="LastName">
                <Form.Label>Manager's Last Name</Form.Label>
                <Form.Control type="text" placeholder="Manager's Last Name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="empId">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control type="number" placeholder="Emloyee ID" />
            </Form.Group>
            </Col>
        </Form.Row>

        <Form.Row>
            <Col>
            <Form.Group controlId="projName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" placeholder="Project Name" />
            </Form.Group>
            </Col>
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Province</Form.Label>
                <Form.Control as="select">
                    <option>Choose...</option>
                    <option>ON</option>
                    <option>QC</option>
                    <option>BC</option>
                </Form.Control>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Col>
            <Form.Group controlId="startDate">
                <Form.Label>Expeted Start Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="endDate">
                <Form.Label>Expected End Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col>
                <Form.Group as={Col} controlId="priority">
                    <Form.Label>Priority Level</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col>
            <Form.Group as={Col} controlId="industry">
                    <Form.Label>Industry</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Animals</option>
                        <option>Art and Cultures</option>
                        <option>Environment</option>
                        <option>Education</option>
                        <option>Health</option>
                        <option>International NGOs</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col>
                <Form.Group controlId="budget">
                    <Form.Label>Estimated Budget</Form.Label>
                    <Form.Control type="number" placeholder="Estimated Budget" />
                </Form.Group>
            </Col>
            <Col>
            <Form.Group as={Col} controlId="clientQualification">
                    <Form.Label>Client's Qualification</Form.Label>
                    <Form.Control as="select">
                    <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Form.Row>
        <Form.Label>Client #</Form.Label>
        <Form.Control as="select">
            <option>Choose...</option>
                    <option>1111 - AAAclientName</option>
                    <option>2222 - BBBclientName</option>
                    <option>3333 - CCCclientName</option>
                    <option>4444 - DDDclientName</option>
                    <option>5555 - EEEclientName</option>
        </Form.Control>
        <Button variant="primary" type="submit">Run</Button>
        






</Form>
)
    
