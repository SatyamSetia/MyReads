import React, { Component } from "react";
import BookDetail from "./BookDetail";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class BookSearch extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		updateShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired,
		loading: PropTypes.bool.isRequired
	};

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

	updateShelf(book, shelf) {
		BooksAPI.update(book, shelf).then(() => {
			console.log("shelf updated");
		});
	}

	displayBooks() {
		if (!this.state.query) {
			return <div className="books-grid">No books to show!!</div>;
		}

		if (!this.state.books.error) {
			return (
				<div>
					<div className="books-grid">
						Showing {this.state.books.length} books for '{this.state.query}'
					</div>
					<ol className="books-grid">
						{this.state.books.map(book => {
							return (
								<li key={book.id}>
									<BookDetail
										book={book}
										updateShelf={(book, shelf) => {
											this.updateShelf(book, shelf);
										}}
									/>
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
