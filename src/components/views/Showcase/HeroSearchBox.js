/* eslint-disable no-constant-condition */
import React, { Component } from 'react';

class HeroSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="hero-search-form">
        <h2 className="text-white bg-green animate" id="showcase-message">
          Looking for what to eat?
        </h2>
        <div className="input-group">
          <input
            type="search"
            name="searchBox"
            id="search-box"
            onChange={this.handleChange}
            placeholder="Search for meal item"
            required
          />
          <button type="submit" style={{ backgroundColor: '#d64541' }} disabled={false}>
            {!true ? (
              <i className="fa fa-spinner fa-spin" />
            ) : (
              <i className="fa fa-search" style={{ color: '#FFF' }} />
            )}
          </button>
        </div>
      </form>
    );
  }
}

export default HeroSearchBox;
