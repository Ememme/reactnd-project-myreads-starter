import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import Library from './Library';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books: books})
    })
  }
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
          <div className="list-books">
            <Library  />
            <BookList books={this.state.books} />

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
