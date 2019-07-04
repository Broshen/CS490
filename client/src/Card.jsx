import React, { Component } from 'react';
import './card.css';
import {Card, Button, Col, Row, Modal} from 'react-bootstrap';


class CFCCard extends Component {


  render() {


    return (
      <Card className="card">
        <Card.Img
          variant="top"
          src={this.props.consultant.thumbnail? this.props.consultant.thumbnail: "http://fill-image.jobs160.com/300x200"}
        />

          <Card.Footer>
              <span><b>Rank: </b>{this.props.rank}</span>
          </Card.Footer>
        <Card.Body>


          <Card.Title>{this.props.consultant.name}</Card.Title>
                  <Card.Subtitle>{this.props.consultant.position ? this.props.consultant.position : "CONSULTANT"}</Card.Subtitle>
          <Card.Text>
            {this.props.consultant.prev_jobs.length} Previous Project{this.props.consultant.prev_jobs.length === 1 ? '' : 's'}
            {this.props.consultant.locations.map((location, i) => {return " · "+location})}
          </Card.Text>
                  <Card.Subtitle>
                    <span>Rating: </span> {this.props.consultant.avg_rating}/10
                  </Card.Subtitle>

           

        </Card.Body>

                 <Card.Footer>
                      <span>${this.props.consultant.pay_amount} CAD/{this.props.consultant.pay_frequency}</span>
                    </Card.Footer>
      </Card>
    )
  }
}


export default CFCCard