import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import icon from '../../public/assets/images/icon.png';
import { getRedirectionLink } from '../utils/validate';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      inputFieldsData: {
        email: '',
        fullname: '',
        password: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { inputFieldsData } = this.state;
    inputFieldsData[e.target.name] = e.target.value;
    this.setState({
      inputFieldsData,
      isLoading: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    console.log(this.state);
  }

  render() {
    const jwtToken = localStorage.userToken;
    const { isLoading } = this.state;
    if (jwtToken) {
      return <Redirect to={getRedirectionLink(jwtToken)} />;
    }
    return (
      <section className="form-page">
        <Link to="infopage" className="home-link">
          <span>
            <h1 className="text-center mg-top-10 brand-name" style={{ marginTop: '5%' }}>
              <span className="img-holder">
                <img src={icon} alt="" />
              </span>
              FoodFast
            </h1>
          </span>
        </Link>
        <div className="form-page-content mg-top-10 card-2 border-line">
          <h4 className="text-center">Create an account</h4>
          <div className="alert" id="signUpErrorDiv">
            <p id="signUpErrorMessage" />
          </div>
          <form onSubmit={this.handleSubmit} id="signUpForm" method="POST">
            <label htmlFor="fullname">
              Full Name
              <span>*</span>
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              name="fullname"
              placeholder="Full Name"
              minLength="3"
              maxLength="300"
            />
            <label htmlFor="email">
              E-mail
              <span>*</span>
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email address"
            />
            <label htmlFor="password">
              Password
              <span>*</span>
            </label>
            <input
              type="password"
              onChange={this.handleChange}
              name="password"
              placeholder="Password"
              minLength="8"
              maxLength="20"
            />
            <button
              type="submit"
              className="btn mg-top-10"
              id="signUp-btn"
              style={{ background: isLoading ? 'darkgray' : '#d64541' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <i className="fa fa-spinner fa-spin" /> Signing you up...
                </span>
              ) : (
                'Create account'
              )}
            </button>
            <div>
              <p>
                Already have an account?
                <span>
                  <Link to="login" className="link-btn">
                    Log in
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
