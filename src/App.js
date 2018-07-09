import React, { Component } from "react";
import "./App.css";
import QuotesPage from "./components/quotes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Quotes built with React</h1>
        </header>
        <QuotesPage />
      </div>
    );
  }
}

export default App;
