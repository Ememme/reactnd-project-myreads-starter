import React from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'


const SearchBooks = props =>  {
  // console.log(foundBook.shelf)

    const {query, foundBooks } = this.props

    return(
      <div className="search-books">

        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {JSON.stringify(this.props.query)}
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.props.query}
            onChange={(event) => this.props.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <p>Number of found books: {this.props.foundBooks.length}</p>
          <div className="results">
          {query.length > 0 && foundBooks !==0 && (
            <ol className="books-grid">
                {this.props.foundBooks.map((foundBook) => (

                  <Book
                    filteredBook={foundBook}
                    key={foundBook.id}
                    changeShelf={this.props.changeShelf}
                    shelf={foundBook.shelf}
                  />
                ))}
            </ol>
          )}
          </div>
        </div>
      </div>
    )
  }




export default SearchBooks;
