import React, { Component } from "react";
import BookDetail from "./BookDetail";
import * as BooksAPI from "./BooksAPI";

class BookShelf extends Component {
	state = {
		books: [],
		loading: true
	};

	componentDidMount() {
		setInterval(() => {
			this.setState(() => {
				BooksAPI.getAll().then(books =>
					this.setState(
						{
							books: books.filter(
								book => book.shelf === this.props.shelf
							)
						},
						() => this.setState({ loading: false })
					)
				);
			});
		}, 1000);
	}

	shouldComponentUpdate(nextProps,nextState) {
		console.log(this.state.books !== nextState.books)
        return this.state.books !== nextState.books;
    }

	loader() {
		return <div>Loading...</div>;
	}

	emptyShelf() {
		return <div>Shelf is empty.</div>;
	}

	render() {
		console.log('render');
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.state.loading
							? this.loader()
							: this.state.books.length === 0
								? this.emptyShelf()
								: this.state.books.map(book => {
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
