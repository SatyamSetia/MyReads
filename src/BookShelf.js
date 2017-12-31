import React from "react";
import BookDetail from "./BookDetail";
import PropTypes from "prop-types";

const BookShelf = props => {
	BookShelf.propTypes = {
		title: PropTypes.string.isRequired,
		updateShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired,
		loading: PropTypes.bool.isRequired
	};

	const { books, title, loading } = props;

	const emptyShelf = () => {
		return <div>Shelf is empty.</div>;
	};

	const renderBooks = books => {
		return books.map(book => {
			return (
				<li key={book.id}>
					<BookDetail
						book={book}
						updateShelf={(book, shelf) =>
							props.updateShelf(book, shelf)}
					/>
				</li>
			);
		});
	};

	const loader = () => {
		return <div>Loading...</div>;
	};

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{loading
						? loader()
						: books.length === 0
							? emptyShelf()
							: renderBooks(books)}
				</ol>
			</div>
		</div>
	);
};

export default BookShelf;
