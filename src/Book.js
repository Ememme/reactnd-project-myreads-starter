import React, { Component } from 'react'
import BookCategoryChanger from './BookCategoryChanger'

const Book = props => {

    console.log(this.props)
    const {filteredBook} = props
    const {title, id, shelf} = filteredBook
    console.log(filteredBook.shelf)
    const author = filteredBook.authors ? filteredBook.authors : []
    const cover = filteredBook.imageLinks ? filteredBook.imageLinks.thumbnail || filteredBook.imageLinks.smallThumbnail : null


    return(
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})`}}></div>
            <BookCategoryChanger bookInfo={filteredBook} changeShelf={props.changeShelf}/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )

}
export default Book
