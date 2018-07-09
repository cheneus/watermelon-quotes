import React, { Component } from "react";
import Quotes from "./quotes.json";

class QuotesPage extends Component {
  state = {
    quotes: Quotes,
    currentQuotes: Quotes,
    currentPage: 1,
    quotesPerPage: 5,
    theme: ""
  };

/* 
event handler functions 
First is for click function for pagination
Second is for selection function for amount of qoute in each page
Third is for selection of theme
Fourth is for search text in quote
*/

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleAmtSelect = (event) => {
    let value = parseInt(event.target.value)
    this.setState({ quotesPerPage: value })
  }

  handleTheme = (event) => {
    var arr = []
    this.state.quotes.map(x => { (x['theme'] === event.target.value) ? arr.push(x) : "" })
    this.setState({ currentQuotes: arr })
  }

  handleSearch = (event) => {
    // filter returns an array
    // indexOf > -1 shows that the string is found.
    var arr = this.state.quotes.filter(y => y.quote.indexOf(event.target.value) > -1)
    this.setState({ currentQuotes: arr })
  }

/* 
Render element functions 
First is for rendering the select & option
Second is for rendering the pagination
Third is for rendering each quote 
*/
  renderSelect = () => {
    var amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
      <select className="custom-select custom-select-md" onChange={this.handleAmtSelect}>
        <option value="">Select an Option</option>
        {amount.map(x => {
          return (<option key={x}>{x}</option>)
        })}
      </select>
    )
  }

  renderPageNumbers = () => {
    var numPage = []
    for (let i = 1; i <= Math.ceil(this.state.currentQuotes.length / this.state.quotesPerPage); i++) {
      numPage.push(i);
    }
    return numPage.map(i => {
      return (<li key={i} id={i} onClick={this.handleClick} className="page-link">{i}</li>)
    }
    )
  }

  renderQuotes = () => {
    const currentPage = this.state.currentPage;
    const quotesPerPage = this.state.quotesPerPage;
    const indexOfLast = currentPage * quotesPerPage; 
    const indexOfFirst = indexOfLast - quotesPerPage;
    const current = this.state.currentQuotes.slice(indexOfFirst, indexOfLast);

    return current.map((quote, index) => {
      return (
        <div className="card" key={index} style={{ margin: '1rem' }}>
          <blockquote className="blockquote text-center">
            <p className="mb-0">{quote.quote}</p>
            <footer className="blockquote-footer">{quote.source}<cite title="Source Title">{quote.context}</cite></footer>
          </blockquote>
        </div>
      )
    })
  }

  render() {
    return (
      <div style={{ padding: '2em' }}>
        <div className="row">
          <div className="col-4">
            {this.renderSelect()}
          </div>
          <div className="col-4">
            <select className="custom-select custom-select-md" onChange={this.handleTheme}>
              <option value="">Select your theme</option>
              <option> movies</option>
              <option> games </option>
            </select>
          </div>
          <div className="col-4">
            <input type="text" className="form-control" aria-label="keyword search" onChange={this.handleSearch} placeholder="enter a keyword to being search"/>
          </div>
        </div>
        <div>
          {this.renderQuotes()}
        </div>
        <nav aria-label="Page Navigation">
          <ul className="pagination justify-content-center">
            {this.renderPageNumbers()}
          </ul>
        </nav>
        <div>
        </div>
      </div>
    );
  }
}

export default QuotesPage;
