import React, { Component } from "react";
import BookDetail from "./BookDetail";

class BookShelf extends Component {
	emptyShelf() {
		return <div>Shelf is empty.</div>;
	}

	renderBooks(books) {
		return books.map(book => {
			return (
				<li key={book.id}>
					<BookDetail
						book={book}
						updateShelf={(book, shelf) =>
							this.props.updateShelf(book, shelf)}
					/>
				</li>
			);
		});
	}

	loader() {
		return <div>Loading...</div>;
	}

	render() {
		const { books, title, loading } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{loading
							? this.loader()
							: books.length === 0
								? this.emptyShelf()
								: this.renderBooks(books)}
					</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;

// {this.state.loading
// 							? this.loader()
// 							: this.state.books.length === 0
// 								? this.emptyShelf()
// 								: this.state.books.map(book => {
// 										return (
// 											<li key={book.id}>
// 												<BookDetail book={book} updateShelf={(book, shelf) => this.props.updateShelf(book,shelf)}/>
// 											</li>
// 										);
// 									})}
