import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from "./BookShelf";

class BookMainPage extends Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{/*Continue Reading here*/}
						<BookShelf title="Currently Reading" shelf="currentlyReading" />
						<BookShelf title="Want to Read" shelf="wantToRead" />
						<BookShelf title="Read" shelf="read" />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">
						Add a book
					</Link>
				</div>
			</div>
		);
	}
}

export default BookMainPage;