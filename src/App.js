import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { MainWindow } from "../src/components/MainWindow";
import { Sorter } from "../src/components/Sorter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/:id" component={Sorter} />
        </Router>

        {/* <MainWindow /> */}
      </header>
    </div>
  );
}

export default App;
