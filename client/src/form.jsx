import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container, Nav, Jumbotron } from 'react-bootstrap';

const axios = require('axios');

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
    console.log(event.target.elements.projectName.value)
    const data = new FormData(event.target); //form data is here, I don't really know how to pass this to the matching algorithm
    console.log(data)

    var browser = this;

    axios.post("api/project/new", {
      name: event.target.elements.projectName.value,
      locations: [event.target.elements.formGridCity.value + ", " + event.target.elements.formGridState.value + ", Canada"],
      start_date: event.target.elements.startDate.value,
      deadline: event.target.elements.endDate.value,
      hours_required: event.target.elements.hours.value,
      budget: event.target.elements.budget.value,
      industries: [event.target.elements.industry.value],
      qual_required: event.target.elements.clientQualification.value,
      rfp_document: event.target.elements.projectDesc.value,
      client: event.target.elements.clientName.value,
      priority: event.target.elements.priority.value
    }).then(function(response) {
      browser.props.history.push('/main/' + response.data.projectId);
    }).catch(function(error) {
      console.log(error)
    })
  }
 

  render(){
    return (
      <Container>
       
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active text-primary" href="/">Home</a>
              <a className="nav-item nav-link active text-primary" href="/form">Form</a>
            </div>
          </div>
        </nav>

      
      <Form onSubmit={this.handleSubmit} className="bg-light">
        <h2 className="p-3 mb-2 bg-secondary text-white">Form</h2>
        <Form.Row >
          <Col>
          <Form.Group as={Col} controlId="projectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control required name="projectName" type="text" placeholder="Project Name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col} controlId="clientName">
              <Form.Label>Client Name</Form.Label>
              <Form.Control required name="clientName" type="text" placeholder="Client Name" />
          </Form.Group>
          </Col>
      </Form.Row>

      <Form.Row>
        <Col>

          <Form.Group as={Col} controlId="projectDesc">
          <Form.Label>Project Description</Form.Label>
          <Form.Control required as="textarea" rows="3" />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col>
          <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control required name="city"/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Province</Form.Label>
              <Form.Control required name="prov" as="select">
                  <option>ON</option>
                  <option>QC</option>
                  <option>BC</option>
                  <option>NB</option>
                  <option>SK</option>
                  <option>NS</option>
              </Form.Control>
          </Form.Group>

        </Col>
      </Form.Row>

      <Form.Row>
          <Col>
          <Form.Group as={Col} controlId="startDate">
              <Form.Label>Expeted Start Date</Form.Label>
              <Form.Control required name="startDate" type="date" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col} controlId="endDate">
              <Form.Label>Expected End Date</Form.Label>
              <Form.Control required name="endDate" type="date" />
          </Form.Group>
          </Col>
          <Col>
              <Form.Group as={Col} controlId="hours">
                  <Form.Label>Estimated Required Hours</Form.Label>
                  <Form.Control required type="number" placeholder="Estimated required hours" />
              </Form.Group>
          </Col>
      </Form.Row>
      <Form.Row>
          <Col>
              <Form.Group as={Col} controlId="priority">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control required name="priority" as="select">
                      <option>Budget</option>
                      <option>Location</option>
                      <option>Quality</option>
                  </Form.Control>
              </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col} controlId="industry">
                  <Form.Label>Industry</Form.Label>
                  <Form.Control required as="select">\
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
              <Form.Group as={Col} controlId="budget">
                  <Form.Label>Estimated Budget</Form.Label>
                  <Form.Control required type="number" placeholder="Estimated Budget" />
              </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col} controlId="clientQualification">
              <Form.Label>Required Consultant Qualifications</Form.Label>
              <Form.Control as="textarea" rows="1"/>
          </Form.Group>
          </Col>
      </Form.Row>
      
      <Form.Row>
        <Col>
          <Form.Group as={Col}>
            <Button variant="primary " type="submit">Create Project</Button>
          </Form.Group>
        </Col>
      </Form.Row>
</Form>

</Container>
    )
  }
}

