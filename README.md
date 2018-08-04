&#128214; &#128214;&#128214; **My Reads** — book tracking app

This is the 7th project made during Google Front-End Development Nanodegree Program at Udacity.
It has been built with React, based on a starter code provided by Udacity
that can be found here: https://github.com/udacity/reactnd-project-myreads-starter


To simplify development process, a backend server for students was provided. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods needed to perform necessary operations on the backend like:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### Important
The **backend API** uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).
That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### Components Structure
```
<App />
  <!-- Main page <Route /> path='/' -->
    <Library />
      <BookList />
        <BookShelf />
            <Book />
                <BookCategoryChanger />
  <!-- Search page <Route /> path='/search' -->
    <SearchBooks />
      <Book />
```

## Running the Application

To run the application on your local machine:
* download all the files
---OR---
* clone the repository
(Paste the following command to your termianl: `git clone https://github.com/Ememme/reactnd-project-myreads-starter.git`

To get started:

* Change to (`cd`) _react-project-myreads_ folder
* install project dependencies with the command `npm install`
* start the development server with `npm start`
* usually the site opens automatically, if not please visit
`http://localhost:3000`


## What is the project about

The application is supposed to help you keep track of the books that you read, want to read or are currently reading.
To that end, the main page displays a list of 3 shelves that reflect these categories, i.e.:
* &#128214; Currently Reading
* &#128214; Want to Read
* &#128214; Read

- You can search for new books in the `/search` page
- To get to search page click **+** button on the right bottom corner

- By choosing one of the values of the menu button located near each book cover, you assign chosen book to a particular shelf **Reading**, **Want to**, **Read**, whereas **None** removes the book from each shelf


#### Dependencies & External Libraries Used

* React Router - [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
* Prop-Types [`prop-types`](https://www.npmjs.com/package/prop-types)
* Escape-String-Regexp [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
## **Licence**

The content of this repository is free and is licensed under a [MIT Licence](https://choosealicense.com/licenses/mit/).     
