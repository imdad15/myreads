import React from "react";
import BookList from "./BookList";


class BookShelves extends React.Component {

    render() {
        const shelves = [
            {name: 'Currently Reading', category: 'currentlyReading'},
            {name: 'Want to Read', category: 'wantToRead'},
            {name: 'Read', category: 'read'}
        ];
        const {books, updateChange} = this.props;
        console.log('books- ',books)

        return (
            <div className="list-books-content">
                {shelves.map(shelf => {
                        const filteredBooks = books.filter(book =>
                            book.shelf === shelf.category
                        );

                        return (
                            <div key={shelf.category} className="bookshelf">
                                <h2 className="bookshelf-title">{shelf.name}</h2>
                                <BookList className="bookshelf-books" books={filteredBooks} updateChange={updateChange}/>
                            </div>

                        )
                    }
                )}
            </div>

        )
    }
}

export default BookShelves;