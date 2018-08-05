import React from 'react'

const BookCategoryChanger = props =>  {
  
    // Set shelf value to none if it's not defined
    const shelfValue = props.bookInfo.shelf? props.bookInfo.shelf : 'none'
    return (<div className="book-shelf-changer">
      <select onChange={(event) => {props.changeShelf(props.bookInfo, event.target.value)} } value={shelfValue}>
        <option value="move" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
  }


export default BookCategoryChanger
