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
      fetch('/api/suggested_consultants/00001')
        .then((data) => data.json())
        .then((res) => {
          this.setState({ consultants: res }) 
        });
  
      fetch('/api/project/00001')
        .then((data) => data.json())
        .then((res) => {
          this.setState({ project: res }) 
        });
    }
  
    render() {
      return (
        <div className="App">
          <div className="Column">
            <h3> Available Consultants: </h3>
            <ConsultantList
              consultants={this.state.consultants}
            />
          </div>
          <div className="Column">
            <ProjectDetails 
              project={this.state.project}
            />
          </div>
        </div>
      );
      
    }
  }
  
  export default main;
  