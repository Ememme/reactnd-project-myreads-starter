import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class BookShelf extends Component {
  render() {
    console.log(this.props)

    return(

      <div className="bookshelf-books">
        <ol className="books-grid">
          {/*iterating over books on shelf to get data about single book  */}
          {this.props.filteredBooks.map((book) => (
            <Book filteredBook={book}
                  key={book.id}
                  changeShelf={this.props.changeShelf}
            />
          ))}
        </ol>
      </div>
    )
  }
}

BookShelf.propTypes = {
  // BookAPI fetches an array of objects
  filteredBooks: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf
