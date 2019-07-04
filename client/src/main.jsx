import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, Container, Card, DropdownButton, Dropdown} from 'react-bootstrap';
import './main.css';
import ConsultantList from './ConsultantList';
import ProjectDetails from './ProjectDetails';


class main extends Component {

    state = {
        consultants: [],
        projects: null,
        project: null
    }

    componentDidMount() {
      fetch('/api/suggested_consultants/'+this.props.match.params.projectId)
        .then((data) => data.json())
        .then((res) => {
          this.setState({ consultants: res }) 
        });
 

        fetch('/api/projects/unassigned')
            .then((data) => data.json())
            .then((res) => {
                this.setState({projects: res, project: res[this.props.match.params.projectId]})
            });
    }


    setProject = (project) => {
        this.setState({project: project});
        window.history.pushState({},null,project.id)

        fetch(`/api/suggested_consultants/${project.id}`)
            .then((data) => data.json())
            .then((res) => {
                this.setState({consultants: res})
            });
    }

    render() {

        return (
            <div>
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
                        <Col>
                            <h3> Available Consultants: </h3>
                            <ConsultantList
                                consultants={this.state.consultants}
                            />
                        </Col>
                        <Col>
                            <div><b>Select project</b></div>
                            <DropdownButton id="dropdown-basic-button"
                                            title={this.state.project ? this.state.project.id : 'Select project'}>
                                {
                                    this.state.projects && Object.keys(this.state.projects).map(id =>
                                        <Dropdown.Item
                                            onClick={() => this.setProject(this.state.projects[id])}>{id}</Dropdown.Item>
                                    )
                                }
                            </DropdownButton>
                            <br/>
                            <ProjectDetails
                                project={this.state.project}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}

export default main;
  