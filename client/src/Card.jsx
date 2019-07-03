import React, { Component } from 'react';
import './card.css';
import {Card, Button} from 'react-bootstrap';



class CFCCard extends Component {


  render() {
    return (
      <Card className="card">
        <div className="row">
          <div className="card-thumbnail">
            <img src={this.props.consultant.thumbnail? this.props.consultant.thumbnail: "http://fill-image.jobs160.com/300x200"}/>
          </div>
          <div className="card-content-wrapper">
            <div className="card-content">
              <span className="row">
                <div className="card-content-info">
                  <div className="card-content-info-title">{this.props.consultant.position? this.props.consultant.position: "SENIOR CONSULTANT"}</div>
                  <div className="card-content-info-name">{this.props.consultant.name}</div>
                  <div className="card-content-info-details">
                    17 Previous Projects{this.props.consultant.locations.map((location, i) => {return " · "+location})}
                  </div>
                  <div className="card-content-info-relevance">
                    <span>Rating: </span> {this.props.consultant.avg_rating}/10
                  </div>
                </div>
                <div className="card-content-rate">
                  <span>${this.props.consultant.pay_amount}/{this.props.consultant.pay_frequency}</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
export default CFCCard