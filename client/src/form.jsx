import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container, Nav } from 'react-bootstrap';
import './form.css';


export default class form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    project: [],
  }
  
  componentDidMount() {
    fetch('/api/project/00001')
      .then((data) => data.json())
      .then((res) => {
        this.setState({ project: res }) 
      });
  }
 
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target); //form data is here, I don't really know how to pass this to the matching algorithm
    this.props.history.push('/main'); //cheat a little here. Once click run button, it will automatically redirect to main page
  }
 

  render(){
    return (
      <Container>
        <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link  href="/main" eventKey="link-1">Main</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="/form" eventKey="link-2">Form</Nav.Link>
                </Nav.Item>
        </Nav>
        
      
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Col>
          <Form.Group controlId="firstName">
              <Form.Label>Manager's First Name</Form.Label>
              <Form.Control name="firstname" type="text" placeholder="Manager's First Name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="LastName">
              <Form.Label>Manager's Last Name</Form.Label>
              <Form.Control name="lastname" type="text" placeholder="Manager's Last Name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="empId">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control name="empId" type="number" placeholder="Emloyee ID" />
          </Form.Group>
          </Col>
      </Form.Row>

      <Form.Row>
          <Col>
          <Form.Label>Select Project</Form.Label>
            <Form.Control as="select">
                <option>Choose...</option>
                <option>{this.state.project.id} - {this.state.project.name}</option>
          </Form.Control>
          </Col>
          <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control name="city"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Province</Form.Label>
              <Form.Control name="prov" as="select">
                  <option>Choose...</option>
                  <option>ON</option>
                  <option>QC</option>
                  <option>BC</option>
                  <option>NB</option>
                  <option>SK</option>
                  <option>NS</option>
              </Form.Control>
          </Form.Group>
      </Form.Row>

      <Form.Row>
          <Col>
          <Form.Group controlId="startDate">
              <Form.Label>Expeted Start Date</Form.Label>
              <Form.Control name="startDate" type="date" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="endDate">
              <Form.Label>Expected End Date</Form.Label>
              <Form.Control name="endDate" type="date" />
          </Form.Group>
          </Col>
      </Form.Row>
      <Form.Row>
          <Col>
              <Form.Group as={Col} controlId="priority">
                  <Form.Label>Priority Level</Form.Label>
                  <Form.Control name="priority" as="select">
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
      
      <Button variant="primary" type="submit">Run</Button>
</Form>

</Container>
    )
  }
}


function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}
