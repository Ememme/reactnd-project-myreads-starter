import React, {Component} from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {
  render() {
    const shelves = [
      {
        status: 'currentlyReading',
        name: 'Currently Reading'
      }, {
        status: 'wantToRead',
        name: 'Want to Read'
      }, {
        status: 'read',
        name: 'Read'
      }
    ]

    return (
      <div className="list-books-content"> {
        shelves.map((shelf) => {
          return (
            <div key={shelf.status}>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf.name}

              </h2>
              <BookShelf />
            </div>
          </div>)
        })
      }
    </div>)
  }
}

export default BookList
