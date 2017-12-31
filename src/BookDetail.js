import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

class BookDetail extends Component {
	state = {
		shelf: "none"
	};

	static propTypes = {
		book: PropTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired
	};

	handleSelect = e => {
		this.props.updateShelf(this.props.book, e.target.value);
	};

	componentDidMount() {
		BooksAPI.get(this.props.book.id).then(book =>
			this.setState({ shelf: book.shelf }, () => {
				console.log("shelf detected");
			})
		);
	}

	render() {
		const { imageLinks, title, authors } = this.props.book;
		let imageURL;
		if (!imageLinks) {
			imageURL = "http://via.placeholder.com/130?text=No+Image";
		} else {
			imageURL = imageLinks.smallThumbnail;
		}

		return (
			<div className="book" ref="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${imageURL}")`
						}}
					/>
					<div className="book-shelf-changer">
						<select
							value={this.state.shelf}
							onChange={this.handleSelect}
						>
							<option value="no" disabled>
								Move to...
							</option>
							<option value="currentlyReading">
								Currently Reading
							</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		);
	}
}

export default BookDetail;
