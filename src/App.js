import React from "react";
import { Route } from "react-router-dom";
import BookMainPage from "./BookMainPage";
import BookSearch from "./BookSearch";
import "./App.css";

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={BookMainPage} />
      <Route path="/search" component={BookSearch} />
    </div>
  );
};

export default BooksApp;
