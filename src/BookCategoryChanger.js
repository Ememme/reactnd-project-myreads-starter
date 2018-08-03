import React, {Component} from 'react'


class BookCategoryChanger extends Component {
  render() {
    console.log(this.props.bookInfo)
    // Set shelf value to none if it's not defined
    const shelfValue = this.props.bookInfo.shelf? this.props.bookInfo.shelf : 'move'
    return (<div className="book-shelf-changer">
      <select onChange={(event) => {this.props.changeShelf(this.props.bookInfo, event.target.value)} } value={shelfValue}>
        <option value="move" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
  }
}

export default BookCategoryChanger
