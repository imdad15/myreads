import React from "react";

class ItemBook extends React.Component {

    onShelfChanged = event =>{
        console.log(`value- ${event.target.value.toString()}`)
        this.props.onShelfChange(this.props.book, event.target.value.toString());
    };

    render() {
        const book = this.props.book;
        const currentShelf =book.shelf;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>
                    </div>
                    <div className="book-shelf-changer" >
                        <select defaultValue={currentShelf} onChange={this.onShelfChanged}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>)
    }
}

export default ItemBook;