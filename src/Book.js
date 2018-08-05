import React from 'react'
import BookCategoryChanger from './BookCategoryChanger'
import PropTypes from 'prop-types'
// import { formatView} from './helpers'

const Book = props => {

    // console.log(props)
    const {filteredBook} = props
    const {title, id } = filteredBook
    // console.log(filteredBook.shelf)
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

Book.propTypes = {
    // Book instance is an object
    filteredBook: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default Book
