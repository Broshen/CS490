import React, { Component } from 'react';
import './App.css';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

class ConsultantList extends Component {

  render() {
    return this.props.consultants.map((consultant, i) =>
 
    <Card style={{ width: '30rem' }}>
    <Card.Body>
      <Card.Title class="p-3 mb-2 bg-dark text-white font-weight-bold">{consultant.name}</Card.Title>
      <ListGroup >
        <ListGroup.Item  variant = "light">
          <h6>Available to work in:</h6>
          {consultant.locations.map((location, i) =>
          <li key={i}> {location} </li>
        )}</ListGroup.Item>
        <ListGroup.Item variant = "light">
          <h6>Specializes in: </h6>
          {consultant.industries.join(", ")}
        </ListGroup.Item>
        <ListGroup.Item variant = "light">
          <h6>Available from: </h6>
          {consultant.available_times.map((available_time, i) => 
          <li key={i}>{available_time.join("-")}</li>
        )}
        </ListGroup.Item>
        <ListGroup.Item variant = "light">
          <h6>Rate: </h6>
          ${consultant.pay_amount}/{consultant.pay_frequency}
        </ListGroup.Item>
        <ListGroup.Item variant = "light">
          <h6>Rating: </h6>
          {consultant.avg_rating}/10
        </ListGroup.Item>
      </ListGroup>
      <Card.Link href="#">See Detail</Card.Link>
    </Card.Body>
  </Card>

    )
  }
}

export default ConsultantList