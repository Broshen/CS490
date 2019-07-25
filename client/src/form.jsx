import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container, Nav, Jumbotron, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import './form.css';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015


const axios = require('axios');

export default class form extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      locations: "",
    }
  }

  handleAutoCompleteField(value) {
    this.setState({locations: value[0]})
  }
 
  handleSubmit(event) {
    event.preventDefault();
    var browser = this;

    axios.post("api/project/new", {
      name: event.target.elements.projectName.value,
      locations: [this.state.locations + ", " + event.target.elements.formGridState.value + ", Canada"],
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
              <a className="nav-item nav-link active text-primary" href="/home">Home</a>
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
              <Typeahead labelKey="name"
                options={['Airdrie', 'Armstrong','Barrie', 'Belleville', 'Brampton', 'Brantford', 'Brockville', 'Cambridge', 'Cornwall', 'Dryden', 'Guelph', 'Hamilton', 'Kingston', 'Kitchener', 'London', 'Markham', 'Mississauga', 'North Bay', 'Oshawa', 'Ottawa', 'Peterborough', 'Richmond Hill', 'Stratford', 'Thunder Bay', 'Toronto', 'Vaughan', 'Waterloo', 'Windsor', 'Woodstock']}
                placeholder="Choose a city..."
                onChange={this.handleAutoCompleteField.bind(this)}  />
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
                  <Form.Control required as="select">
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
      
      <Button id="mainButton" type="submit">Create Project</Button>

</Form>

</Container>
    )
  }
}

