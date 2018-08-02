import React, {Component} from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

// Stateless Functional Component
const BookList = (props) => {
  const { books, changeShelf } = props
  const shelves = [
    {
      type: 'currentlyReading',
      title: 'Currently Reading'
    }, {
      type: 'wantToRead',
      title: 'Want to Read'
    }, {
      type: 'read',
      title: 'Read'
    }
  ]


  return (<div className="list-books-content">
    {
      shelves.map((shelf) => {
        // finding book by category in the originally fetched array
        const filteredBooks = books.filter(book => book.shelf === shelf.type)
        console.log(filteredBooks)

        return (<div key={shelf.type}>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}
            </h2>
            <div className="bookshelf-books">
              <BookShelf filteredBooks={filteredBooks} changeShelf={props.changeShelf}/>
            </div>
          </div>
        </div>)
      })
    }
  </div>)
}

BookList.propTypes = {
    // BookAPI fetches an array
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookList
