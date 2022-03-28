import React, { useState, useEffect } from 'react';

export default class Nav extends React.Component {

  render() {
    return (
      <div className="search">
        <input type="text" className="searchBar" placeholder="search..."></input>
      </div>
    );
  }
}