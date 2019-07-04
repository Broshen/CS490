import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Container, Card} from 'react-bootstrap';
import './main.css';
import ConsultantList from './ConsultantList';
import ProjectDetails from './ProjectDetails';


class main extends Component {

    state = {
      consultants: [],
      project: null,
    }
  
    componentDidMount() {
      fetch('/api/suggested_consultants/'+this.props.match.params.projectId)
        .then((data) => data.json())
        .then((res) => {
          this.setState({ consultants: res }) 
        });
  
      fetch('/api/project/'+this.props.match.params.projectId)
        .then((data) => data.json())
        .then((res) => {
          this.setState({ project: res }) 
        });
    }
  
    render() {
      return (
        <Container>
          <nav className="navbar navbar-expand-lg navbar-light   fixed-to">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active text-primary" href="/">Home</a>
                <a className="nav-item nav-link active text-primary" href="/form">New Project</a>
              </div>
            </div>
          </nav>

          <Row>
            <Col sm={12} md={6}>
            <h3> Available Consultants: </h3>
            <ConsultantList
            consultants={this.state.consultants}
            />
            </Col>

            <Col sm={12} md={6}>
            <ProjectDetails 
            project={this.state.project}
            />
            </Col>
          </Row>
        </Container>
      );
      
    }
  }
  
  export default main;
  