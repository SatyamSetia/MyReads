  import React from "react";
  import { Route } from 'react-router-dom';
  import BookMainPage from './BookMainPage';
  import BookSearch from './BookSearch';
  import "./App.css";

  class BooksApp extends React.Component {

    render() {
      return (
        <div className="app">
            <Route exact path="/" component={BookMainPage}/>
            <Route path="/search" component={BookSearch}/>
        </div>
      );
    }
  }

  export default BooksApp;
