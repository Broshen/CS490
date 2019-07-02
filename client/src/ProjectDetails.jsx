import React, { Component } from 'react';
import './App.css';

class ProjectDetails extends Component {

  render() {
    if (this.props.project === null){
      return (<div className="Project"></div>)
    }

    return (
      <div className="Project">
        <h3> Project {this.props.project.id}: </h3>
        <h3>{this.props.project.name} by </h3>
        <h3> {this.props.project.client} </h3>

        <div> Location: {this.props.project.locations.join(", ")} </div>

        <div> Start date: {this.props.project.start_date} </div>

        <div> Deadline: {this.props.project.deadline} </div>

        <div> Estimated time required: {this.props.project.hours_required} hours </div>

        <div> Estimated budget: ${this.props.project.budget} </div>

        <div> {this.props.project.rfp_document} </div>

      </div>
    )
  }
}

export default ProjectDetails