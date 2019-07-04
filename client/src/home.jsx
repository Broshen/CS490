import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import './home.css';
import ConsultantList from './ConsultantList';
import ProjectDetails from './ProjectDetails';

export default class home extends Component {
    
    
    render(){
        return(
            <Container>
              <nav class="navbar navbar-expand-lg navbar-light   fixed-to">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active text-primary" href="/">Home</a>
                  <a class="nav-item nav-link active text-primary" href="/main">Main</a>
                  <a class="nav-item nav-link active text-primary" href="/form">Form</a>
                </div>
                </div>
              </nav>
               <Jumbotron>
                    <h2>Welcome to Project-Consultants Matching Process</h2>
                    <p>This is a website helping managers to assign the most suitable consultants to the client.</p>
                </Jumbotron>
                <Link to="/form">
                    <Button variant="primary">Create a Project</Button>
                </Link>
                <Jumbotron>
                  <h4>Our top rated consultants: </h4>
                  <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="pwerson-wrapper">
                      <Image src="assets/p1.jpg"  className="profile-pic" />
                      <h3>Anna</h3>
                      <p>
                        Available in Toronto, Waterloo, London. Specialize in Healthcare, Medecine, Medical equipements.
                      </p>
                    </Col>
                    <Col xs={12} sm={4} className="pwerson-wrapper">
                      <Image src="assets/p2.jpg"  className="profile-pic" />
                      <h3>Abe</h3>
                      <p>
                        Available in Mississauga, Toronto, North York. Specialize in International Development NGOs
                      </p>
                    </Col>
                    <Col xs={12} sm={4} className="pwerson-wrapper">
                      <Image src="assets/p3.jpg"  className="profile-pic" />
                      <h3>Bob</h3>
                      <p>
                        Available in Scarborough, Whiteby. Specialize in Education and Child Sponsorship Organizations.
                      </p>
                    </Col>
                    
                  </Row>
                </Jumbotron>
            </Container>
        )
    }
}