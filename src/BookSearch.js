import React, { Component } from "react";
import BookDetail from "./BookDetail";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
//import escapeRegExp from 'escape-string-regexp';

class BookSearch extends Component {
	state = {
		query: "",
		loading: false,
		books: []
	};

	handleInput = query => {
		this.setState({ loading: true });
		this.setState({ query }, () => {
			if (this.state.query) {
				BooksAPI.search(this.state.query).then(books =>
					this.setState({ books: books, loading: false })
				);
			} else {
				this.setState({ books: [], loading: false });
			}
		});
	};

	displayBooks() {
		if (!this.state.query) {
			return <div className="books-grid">No books to show!!</div>;
		}

		if (!this.state.books.error) {
			console.log(this.state.books)
			return (
				<div>
					<div className="books-grid">
						Showing {this.state.books.length} books for '{this.state.query}'
					</div>
					<ol className="books-grid">
						{this.state.books.map(book => {
							return (
								<li key={book.id}>
									<BookDetail book={book} />
								</li>
							);
						})}
					</ol>
				</div>
			);
		}

		return <div className="books-grid">No books to show!!</div>;
	}

	loader() {
		return <div className="books-grid">Loading...</div>;
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
							onChange={event =>
								this.handleInput(event.target.value)}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<div>
						{this.state.loading
							? this.loader()
							: this.displayBooks()}
					</div>
				</div>
			</div>
		);
	}
}

export default BookSearch;
