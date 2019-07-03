import React, { Component } from 'react';
import './App.css';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import CFCCard from './Card'

class ConsultantList extends Component {

  render() {
    return this.props.consultants.map((consultant, i) =>
      <CFCCard consultant={consultant}/>
    )
  }
}

export default ConsultantList