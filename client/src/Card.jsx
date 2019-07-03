import React, { Component } from 'react';
import './card.css';
import {Card, Button} from 'react-bootstrap';



class CFCCard extends Component {

  render() {
    return (
      <Card className="card">
        <div className="row">
          <div className="card-thumbnail">
            <img src="http://fill-image.jobs160.com/300x200"/>
          </div>
          <div className="card-content-wrapper">
            <div className="card-content">
              <span className="row">
                <div className="card-content-info">
                  <div className="card-content-info-title">SENIOR CONSULTANT</div>
                  <div className="card-content-info-name">Joe Conner</div>
                  <div className="card-content-info-details">
                    17 Previous Projects · No Relocation Required
                  </div>
                  <div className="card-content-info-relevance">
                    4 Relevant Experiences
                  </div>
                </div>
                <div className="card-content-rate">
                  <span>$150/Day</span>
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