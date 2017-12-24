import React, { Component } from "react";
import BookDetail from "./BookDetail";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class BookSearch extends Component {
	state = {
		query: "",
		books: []
	};

	handleInput = e => {
		e.preventDefault();
		this.setState({ query: e.target.value });
		if(this.state.query) {
			BooksAPI.search(this.state.query).then(books =>
				this.setState({ books })
			)
		} else {
			this.setState({ books: [] })
		}
	}

	displayBooks() {
		if (!this.state.books || !this.state.query) {
			return (<div>No books to show!!</div>);
		}

		console.log(this.state.query);
		console.log(this.state.books);
		return this.state.books.map(book => {
			return (
				<li key={book.id}>
					<BookDetail book={book} />
				</li>
			);
		});
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							value={this.state.query}
							onChange={this.handleInput}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">{this.displayBooks()}</ol>
				</div>
			</div>
		);
	}
}

export default BookSearch;
