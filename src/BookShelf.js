import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    console.log(this.props)
    console.log(this.props.addBook)
    return(

        <div className="bookshelf-books">
          <ol className="books-grid">
            {/*iterating over books on shelf to get data about single book  */}
            {this.props.filteredBooks.map((book) => (
            <Book filteredBook={book}
                  key={book.id}
            />
        ))}
          </ol>
        </div>
    )
  }
}

export default BookShelf
