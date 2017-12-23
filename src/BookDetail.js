import React, { Component } from "react";

class BookDetail extends Component {
	render() {
		const { imageLinks, title, authors } = this.props.book;

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${imageLinks.smallThumbnail}")`
						}}
					/>
					<div className="book-shelf-changer">
						<select>
							<option value="none" disabled>
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
				<div className="book-authors">
					{authors.map(author => author + " ")}
				</div>
			</div>
		);
	}
}

export default BookDetail;