import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../src/utils/API";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved}/>
      </div>
    </Router>
  );
}

export default App;
