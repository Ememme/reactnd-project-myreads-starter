import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import Library from './Library';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  changeShelf = (book, changedShelf) => {
    // /**
    // * @description Changes position of a book between currentlyReading/wantToRead/Read
    // * @param {object} book - clicked book
    // * @param {string} value of a new shelf
    // */
    console.log(book, changedShelf)
    book.shelf = changedShelf
    console.log(changedShelf)

      this.setState(state => ({
        books: state.books.filter(item => item.id !== book.id).concat([book])
      }))

  }

  render() {
    // console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks}/>
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
