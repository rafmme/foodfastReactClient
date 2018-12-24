/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import icon from '../../public/assets/images/icon.png';
import { getRedirectionLink, validateLoginInput, extractErrorMessages } from '../utils/validate';
import AuthAction from '../actions/authActions';
import AuthService from '../utils/Auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasValidationError: false,
      inputFieldsData: {
        email: '',
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
      hasValidationError: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { inputFieldsData } = this.state;
    const { loginUser } = this.props;
    const errors = validateLoginInput(inputFieldsData);
    if (Object.keys(errors).length >= 1) {
      this.setState({
        isLoading: false,
        hasValidationError: true,
        validationErrors: Object.values(errors),
      });
      return;
    }
    loginUser(inputFieldsData);
  }

  render() {
    const { isLoading, hasValidationError, validationErrors } = this.state;
    const { token } = this.props;
    if (token) {
      AuthService.setAuthToken(token);
      return <Redirect to={getRedirectionLink(token)} />;
    }
    return (
      <section className="form-page">
        <Link to="infopage" className="home-link">
          <span>
            <h1 className="text-center mg-top-10 brand-name" style={{ marginTop: '5%' }}>
              <span className="img-holder">
                <img src={icon} alt="foodfast icon" />
              </span>
              FoodFast
            </h1>
          </span>
        </Link>
        <div className="form-page-content card-2 border-line">
          <h4 className="text-center mg-top-10">Account login page</h4>
          <div
            className="alert el-card"
            id="loginErrorDiv"
            style={{ display: hasValidationError ? 'block' : 'none' }}
          >
            <p id="loginErrorMessage">
              <i className="fa fa-warning" /> Error!!! &nbsp;
              {validationErrors && extractErrorMessages(validationErrors)}
            </p>
          </div>
          <form method="POST" id="loginForm" onSubmit={this.handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="Email address"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button
              type="submit"
              className="btn mg-top-10 el-card"
              id="login-btn"
              style={{ background: isLoading ? 'darkgray' : '#d64541' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <i className="fa fa-spinner fa-spin" /> Logging you in...
                </span>
              ) : (
                'Login'
              )}
            </button>
            <div>
              <p>
                No Account yet?
                <span>
                  <Link to="signup" className="link-btn">
                    Sign Up
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

const mapStateToProps = state => ({
  user: state.authReducer.currentUser,
  token: state.authReducer.token,
});

const mapDispatchToProps = {
  loginUser: AuthAction.loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
