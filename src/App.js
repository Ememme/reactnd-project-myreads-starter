import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import Library from './Library';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }


  // @description Changes position of a book between currentlyReading/wantToRead/Read shelves
  // @param {object} book - clicked book
  // @param {string} value of a new shelf

  changeShelf = (book, changedShelf) => {
    book.shelf = changedShelf

    // BookAPI sends updated data to server so that it persists between page refreshes
    BooksAPI.update(book, changedShelf)
    .then(() => {
      // If the array of books on the main page does not contain the book already, the new book object is merged and a new array is returned
      this.setState(state => ({
        books: state.books.filter(item => item.id !== book.id).concat([book])
      }))
   })
  }


  // Based on user input in the search field, an event listener invokes the updateQuery() function on every onChange event.
  // updateQuery() then calls setState(), merging in the new state to update the component's internal state.
  // Then searchResult is called with the value of query, and returns book objects
    updateQuery = query => {
      // Update query based on user input
      this.setState({ query })
      // run search based on query
      this.searchResult(query)
    }

    searchResult = query => {
      if(query.length > 0) {
        BooksAPI.search(query).then(books => {
          if(books instanceof Array) {
            books.map(book => (
              // For every book from the main page, filtering out books that appear in search results and then assig shelf value to searched book. Not affected searched books will have a value of 'none'
              this.state.books.filter((item) => item.id === book.id)
                              .map(item => book.shelf = item.shelf)
            )
          )
          this.setState({
            searchResults: books,
          })
        } else {
          this.setState({
            query: '',
            searchResults: []
          })
        }
        // Catching error related to BookAPI, f.ex. network problem
        }).catch(error => console.log(error));
        // Empty screen
      } else {
        this.setState({
          query: '',
          searchResults: []
        })
      }
    };

  render() {

    return (
      <div className="app">
        <Route path="/search" render={()=> (
          <SearchBooks
            mainPageBooks={this.state.books}
            foundBooks={this.state.searchResults}
            query={this.state.query}
            updateQuery={this.updateQuery}
            changeShelf={this.changeShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Library  />
            <BookList books={this.state.books} changeShelf={this.changeShelf}/>

            <div className="open-search">
              <Link to="search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
