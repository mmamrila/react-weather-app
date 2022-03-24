import React from 'react';

export default class Current extends React.Component {
  render() {
    return (
      <div className="main">
        <p className="currentlyIn">Currently in <span></span></p>
        <div className="high">High</div>
        <div className="current">Current</div>
        <div className="low">Low</div>
      </div>
    );
  }
}