import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import ConsultantList from './ConsultantList';
import ProjectDetails from './ProjectDetails';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './home';
import main from './main';
import form from './form';

class App extends Component {


  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component={home} />
         <Route path="/main" component={main} />
         <Route path='/form' component={form} />
        </div>
     </Router>

    );
    
  }
}

export default App;
