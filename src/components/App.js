import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Directional from '../router/Directional';
import '../App.css';

class App extends Component {
  
  render() {
    //console.log(JSON.parse(localStorage.getItem('accessToken')).accessToken);
    return (
      <Router>
        <div className="auth">
          <Directional/>
        </div>
      </Router>
    );
  }
}

export default App;

