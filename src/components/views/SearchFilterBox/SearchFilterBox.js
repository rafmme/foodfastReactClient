import React, { Component } from 'react';

export default class SearchFilterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row order-box-p" style={{ width: '70%' }}>
        <div className="col-3-2">
          <input
            type="search"
            onInput={e => e.preventDefault()}
            id="order-search-box"
            required
            placeholder="Search orders"
          />
        </div>
        <div className="col-2-3">
          <select id="order-filter" onChange={e => e.preventDefault()}>
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="Processing">Processing</option>
            <option value="Complete">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    );
  }
}
