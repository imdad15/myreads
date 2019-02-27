import React from "react";
import BookShelves from "./BookShelves";
import {getAll, update} from "./BooksAPI";
import {Link, Route, Switch} from "react-router-dom";
import SearchScreen from "./SearchScreen";

class HomeScreen extends React.Component {

    state = {
        books: []
    };

    updateChange = (movedBook, shelf) => {
        movedBook.shelf = shelf;
        update(movedBook, shelf).then(() => {
            this.setState(currState => ({
                books: currState.books.filter(book =>
                    book.id !== movedBook.id
                ).concat(movedBook)
            }));
        });
    };

    componentDidMount() {
        getAll().then(books => {
            this.setState({
                books: books,
            })
        })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (
                        <div>
                            <h1 className="list-books-title">My Reads</h1>
                            <BookShelves books={this.state.books} updateChange={this.updateChange}/>
                            <div className="open-search">
                                <Link to="/search">
                                    <button>Search</button>
                                </Link>
                            </div>
                        </div>
                    )}/>

                    <Route path='/search' render={() => (<SearchScreen/>)}/>

                </Switch>
            </div>
        )
    };
}

export default HomeScreen;