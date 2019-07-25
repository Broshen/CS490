import React, { Component } from 'react';
import './App.css';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import CFCCard from './Card'
import './ProjectList.css';

class ProjectList extends Component {

  render() {
  	console.log(this.props.projects)
    return this.props.projects.map((project, i) =>
      <Card key={i}>
        <Card.Body>
      		<Card.Title>{project.name} </Card.Title>

      		<Card.Subtitle>  {project.client} </Card.Subtitle>

      		{project.locations.map((location, j) => 
      			<Card.Text>
      				{location}
      			</Card.Text>
			)}
			<Card.Text>
  				{project.start_date} - {project.deadline}
  			</Card.Text>

  			<Card.Link id="link" href={"/main/"+project.id}>
  				See candidate consultants
  			</Card.Link>
     	</Card.Body>
      </Card>
    )
  }
}

export default ProjectList