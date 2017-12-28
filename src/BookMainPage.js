import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class BookMainPage extends Component {
	state = {
		cr: [],
		wtr: [],
		rd: [],
		loading: true
	};

	updateShelf(book, shelf) {
		BooksAPI.update(book, shelf).then(() => {
			console.log("shelf updated");
		
		this.fetchAllBooks().then(books => {
			this.setState(
				{
					cr: books.filter(book => book.shelf === "currentlyReading"),
					wtr: books.filter(book => book.shelf === "wantToRead"),
					rd: books.filter(book => book.shelf === "read"),
					loading: false
				},
				() => {
					console.log("all books fetched again");
				}
			);
		});
		});
	}

	fetchAllBooks() {
		return BooksAPI.getAll();
	}

	componentDidMount() {
		this.fetchAllBooks().then(books => {
			this.setState(
				{
					cr: books.filter(book => book.shelf === "currentlyReading"),
					wtr: books.filter(book => book.shelf === "wantToRead"),
					rd: books.filter(book => book.shelf === "read"),
					loading: false
				},
				() => {
					console.log("all books fetched");
				}
			);
		});
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							title="Currently Reading"
							updateShelf={(book, shelf) =>
								this.updateShelf(book, shelf)}
							books={this.state.cr}
							loading={this.state.loading}
						/>
						<BookShelf
							title="Want to Read"
							updateShelf={(book, shelf) =>
								this.updateShelf(book, shelf)}
							books={this.state.wtr}
							loading={this.state.loading}
						/>
						<BookShelf
							title="Read"
							updateShelf={(book, shelf) =>
								this.updateShelf(book, shelf)}
							books={this.state.rd}
							loading={this.state.loading}
						/>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
}

export default BookMainPage;
