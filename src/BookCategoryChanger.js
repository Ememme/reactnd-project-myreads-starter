import React, {Component} from 'react'


class BookCategoryChanger extends Component {
  render() {
    console.log(this.props.bookInfo)
    return (<div className="book-shelf-changer">
      <select onChange={(event) => {this.props.changeShelf(this.props.bookInfo, event.target.value)} } value={this.props.bookInfo.shelf}>
        <option value="none" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
  }
}

export default BookCategoryChanger
