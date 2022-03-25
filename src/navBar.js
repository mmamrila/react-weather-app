import React, { useState } from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="search" className="searchBar" placeholder="search..."></input>
      </div>
    );
  }
}