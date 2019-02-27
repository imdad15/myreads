import React from 'react';
import {search, update} from "./BooksAPI";
import {Link} from "react-router-dom";
import BookList from "./BookList";

class SearchScreen extends React.Component {

    state = {
        query: '',
        searchedBooks: [],
    };

    searchQuery = event => {
        const searchText = event.target.value;
        console.log(`searching- `, searchText);
        this.setState({
            query: searchText,
        });

        if ((/^\s*$/).test(this.state.query))
            search(searchText).then(books => {
                if (books.length > 0) {
                    this.setState({searchedBooks: books})
                } else {
                    this.setState({searchedBooks: []})
                }
                console.log(`books- ${books}`)
            })
    };

    updateChange =  (movedBook, shelf) => {
        console.log(`add to ${shelf}`)
        movedBook.shelf = shelf;
        update(movedBook, shelf).then(() => {
            alert(`Added to ${shelf}`)
        });
    };

    render() {
        return (
            <div>
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Back
                    </Link>
                    < div className="search-books-input-wrapper">
                        <input type="text"
                               onChange={this.searchQuery}
                               value={this.state.query}
                               placeholder="Search for books or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                <BookList className="" books={this.state.searchedBooks} updateChange={this.updateChange}/>
                </div>
            </div>
        )
    }
}

export default SearchScreen;