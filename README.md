# MyReads Project

This project is completed as a part of React fundamentals course in React Nanodegree from Udacity. It is providing book keeping service in three different categories of bookshelf namely Currently Reading, Want to read and Read. Search functionality will let you search any book by it's title or author's name (Find available search terms in [SEARCH_TERMS.md](SEARCH_TERMS.md)).

[Demo](https://myreadsapp.herokuapp.com/) of MyReads.

## TL;DR

To launch this project on your machine:

* clone this repository.
* install all project dependencies with `npm install`
* install some other packages with `npm install --save react-router-dom prop-types`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookDetail.js # Component for rendering each instance of Book.
    ├── BookMainPage.js # Component for main page of the app with three shelves and button for search page on it.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookSearch.js # Component for search page with input bar on top with a back arrow button to return on BookMainPage
    ├── BookShelf.js # Component for rendering each shelf.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Project Structure
```bash
index.js is the root file which is importing App.js to render App component. This App component has two child components namely BookMainPage and BookSearch available on '/' and '/search' routes respectively. BookMainPage is the home page of MyReads App which has a child component BookShelf. This BookShelf component is required for each shelf on home page. Both BookSearch and BookMainPage components has a common child component which is BookDetail. This component is rendering each single book on both home page and search page.
    index.js
    |
    App.js
    |
    ├── BookMainPage.js
    |   └────────────── BookSearch.js
    └── BookSearch.js   |
        └────────────── BookDetail.js 
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
