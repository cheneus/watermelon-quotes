import React, { Component } from "react";
import Quotes from "./quotes.json";

class QuotesPage extends Component {
  state = {
		quotes: Quotes,
		currentPage: 1,
		quotesPerPage: 3,
		numPage: 5,
	};
	
	getPageNumbers = (quotesPerPage) => {
		const numPage = this.state.quotes.length/quotesPerPage

		this.setState({numPage})
	}
	
	
	renderPageNumbers = () =>
		this.state.numPage.map(number => {
		return (
			<li
				key={number}
				id={number}
				onClick={this.handleClick}
			>
				{number}
			</li>
		);
	});

  render() {
    return (
      <div>
				<h4>Your Quotes</h4>

        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default QuotesPage;
