import React, { Component } from "react";
import "./App.css";
import QuotesPage from "./components/quotes.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quotes built with React</h1>
          <p>Default quotes per page: 5</p>
          <p>Default framework: Bootstrap</p>
        </header>
        <QuotesPage />
      </div>
    );
  }
}

export default App;
