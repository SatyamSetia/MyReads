import React, { Component } from "react";
import BookDetail from "./BookDetail";
import * as BooksAPI from "./BooksAPI";

class BookShelf extends Component {
	state = {
		books: [],
		loading: true
	};

	componentDidMount() {
		BooksAPI.getAll().then(books =>
			this.setState({
				books: books.filter(book => book.shelf === this.props.shelf)
			},() => this.setState({loading: false}))
		);
	}

	loader() {
		return <div>Loading...</div>;
	}

	render() {

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.state.loading?this.loader():this.state.books.map(book => {
							return (
								<li key={book.id}>
									<BookDetail book={book} />
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

export default BookShelf;
