import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container, Nav, Jumbotron, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

export default class login extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    state = {
      project: [],
    }
   
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target); //form data is here, I don't really know how to pass this to the matching algorithm
      this.props.history.push('/home'); //cheat a little here. Once click run button, it will automatically redirect to main page
    }
   
  
    render(){
      return (
        <Container>
        <h3 class="text-center">Project-Consultants Matching Process</h3> 
        <Form onSubmit={this.handleSubmit} className="mx-auto bg-light w-75">
            <h2 class="text-center">Welcome</h2>
            <Form.Group controlId="formLogin" className="text-center">
               
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter Username" />
                
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="text-center">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            
         
            <div class="text-center">
            <Button variant="primary " type="submit" >Login</Button>
            </div>
           
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
  