import React, { useState } from 'react';
import ReactSearchBox from "react-search-box";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" className="searchBar" placeholder="search..."></input>
      </div>
    );
  }
}