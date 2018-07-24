import React, { Component } from 'react'
import BookCategoryChanger from './BookCategoryChanger'

class Book extends Component {
  render() {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: '' }}></div>
            <BookCategoryChanger />
          </div>
          <div className="book-title"></div>
          <div className="book-authors"></div>
        </div>
      </li>
    )
  }
}
export default Book
