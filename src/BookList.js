import React from "react";
import ItemBook from "./ItemBook";

class BookList extends React.Component {

    render() {
        const {books, updateChange} = this.props;

        return (
            (books && books.length > 0)
                ? (
                    <ol className="books-grid">
                        {books.map(book => {
                            return (
                                <ItemBook book={book} onShelfChange={updateChange} key={book.id}/>
                            )
                        })}
                    </ol>
                )
                : <p>

                </p>
        );
    }
}

export default BookList;