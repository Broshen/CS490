import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {form} from './form';
import {home} from './home';

class App extends Component {

  state = {
    fuckers: [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => {
        this.setState({ fuckers: res }) 
        console.log("fuckers:", res, this.state)
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <h2>Project-consultants mathching system</h2>
    <div>
      <React.Fragment>
          <Router>
            <Switch>
             <Route path="/home" component={home} />
             <Route path="/form" component={form} />
            </Switch>
          </Router>
      </React.Fragment>
    </div>
  </div>
    );
  }
}

export default App;
