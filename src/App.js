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

  // /**
  // * @description Changes position of a book between currentlyReading/wantToRead/Read
  // * @param {object} book - clicked book
  // * @param {string} value of a new shelf
  // */
  changeShelf = (book, changedShelf) => {
    // console.log(book, changedShelf)
    book.shelf = changedShelf
    // console.log(changedShelf)
    // BookAPI sends updated data to server so that it persists between page refreshes
    BooksAPI.update(book, changedShelf)
    .then(() => {
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
      this.setState({ query: query })
      // run search based on query
      this.searchResult(query)
    }

    searchResult = query => {
      if(query) {
        // debugger
        BooksAPI.search(query).then(books => {
          if(books instanceof Array) {
            console.log(books, books.length)
            console.log(this.state.searchResults)
            this.setState({ searchResults: books })
            console.log(this.state.searchResults)

          }
        }).catch(error => console.log(error));
      } else {
          this.setState({
            query: '',
            searchResults: []
          })
      }

      // this.setState({ query: ''})
      // } else {
      //   // reset query input field
      //
      // }
      // BooksAPI.search(query).then(books => console.log(books.length, books));
      // refresh the form
    // event.currentTarget.reset();
    };

  render() {
    // console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/search" render={()=> (
          <SearchBooks
            mainPageBooks={this.state.books}
            foundBooks={this.state.searchResults}
            query={this.state.query}
            updateQuery={this.updateQuery}
            searchResult={this.searchResult}
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
