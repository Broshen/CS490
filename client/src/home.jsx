import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import './home.css';
import ConsultantList from './ConsultantList';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

export default class home extends Component {
    
    state = {
      projects: [],
    }

    componentDidMount() {
      fetch('/api/projects/unassigned')
        .then((data) => data.json())
        .then((res) => {
          this.setState({ projects: Object.values(res) }) 
        });
    }
  
    
    render(){
      console.log(this.state.projects)
        return(
            <Container>
              <nav className="navbar navbar-expand-lg navbar-light   fixed-to">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active text-primary" href="/">Home</a>
                  <a className="nav-item nav-link active text-primary" href="/form">New Project</a>
                </div>
                </div>
              </nav>
               <Jumbotron>
                    <h2>Welcome to Project-Consultants Matching Process</h2>
                    <p>This is a website helping managers to assign the most suitable consultants to the client.</p>
                </Jumbotron>
                <Row>
                  <Col xs={12} sm={4}>
                    <h4> Create a new Project </h4>

                    <Link to="/form">
                        <Button variant="primary">Create a Project</Button>
                    </Link>

                  </Col>
                  <Col xs={12} sm={4}>
                    <h4> Pickup from an exisiting project </h4>

                    <ProjectList
                      projects={this.state.projects}
                    />

                  </Col>
                  <Col xs={12} sm={4}>
                    <h4>Our top rated consultants: </h4>
                    <div>
                      <Image src="assets/p1.jpg"  className="profile-pic" />
                        <h3>Anna</h3>
                        <p>
                          Available in Toronto, Waterloo, London. Specialize in Healthcare, Medecine, Medical equipements.
                        </p>
                    </div>
                    <div>
                      <Image src="assets/p2.jpg"  className="profile-pic" />
                      <h3>Abe</h3>
                      <p>
                        Available in Mississauga, Toronto, North York. Specialize in International Development NGOs
                      </p>
                    </div>
                    <div>
                      <Image src="assets/p3.jpg"  className="profile-pic" />
                      <h3>Bob</h3>
                      <p>
                        Available in Scarborough, Whiteby. Specialize in Education and Child Sponsorship Organizations.
                      </p>
                    </div>
                    
                  </Col>
                </Row>
            </Container>
        )
    }
}