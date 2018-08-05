import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = props => {

  return(

    <div className="bookshelf-books">
      <ol className="books-grid">
        {/*iterating over books on shelf to get data about single book  */}
        {props.filteredBooks.map((book) => (
          <Book filteredBook={book}
                key={book.id}
                changeShelf={props.changeShelf}
          />
        ))}
      </ol>
    </div>
  )
}

BookShelf.propTypes = {
  // BookAPI fetches an array of objects
  filteredBooks: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf
