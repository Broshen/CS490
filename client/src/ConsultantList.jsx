import React, { Component } from 'react';
import './App.css';

class ConsultantList extends Component {

  render() {
    return this.props.consultants.map((consultant, i) => 
      <div className="Consultant" key={i}>
       <div> {consultant.name} </div>

       <div>
        Available to work in:
        {consultant.locations.map((location, i) =>
          <li key={i}> {location} </li>
        )}
       </div>

       <div>
        Specializes in {consultant.industries.join(", ")}
       </div>

       <div>
        Available from {consultant.available_times.map((available_time, i) => 
          <li key={i}>{available_time.join("-")}</li>
        )}
       </div>

       <div>
        Rate: ${consultant.pay_amount}/{consultant.pay_frequency}
       </div>
       
       <div>
        Rating: {consultant.avg_rating}/10
       </div>
      </div>
    )
  }
}

export default ConsultantList