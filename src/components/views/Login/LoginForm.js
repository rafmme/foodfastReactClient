/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { validateLoginInput, extractErrorMessages } from '../../../helpers/validations';
import icon from '../../../../public/assets/images/icon.png';
import { AuthAction } from '../../../actions/auth.action';
import AuthHelper from '../../../helpers/AuthHelper';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    inputFieldsData[e.target.id] = e.target.value;
    this.setState({
      inputFieldsData,
      hasValidationError: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { loginUser, history } = this.props;
    const { inputFieldsData } = this.state;
    const errors = validateLoginInput(inputFieldsData);
    if (Object.keys(errors).length >= 1) {
      this.setState({
        hasValidationError: true,
        validationErrors: Object.values(errors),
      });
      return;
    }
    this.setState({
      hasValidationError: false,
      validationErrors: [],
    });
    loginUser(inputFieldsData, history);
  }

  render() {
    const { hasValidationError, validationErrors } = this.state;
    const { isLoading, hasLoginError, loginError, history } = this.props;

    return (
      <section className="form-page">
        <Link to="about" className="home-link">
          <span>
            <h1 className="text-center mg-top-10 brand-name" style={{ marginTop: '5%' }}>
              <span className="img-holder">
                <img src={icon} alt="foodfast icon" />
              </span>
              FoodFast
            </h1>
          </span>
        </Link>
        {AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) &&
        !AuthHelper.checkUserIsAdmin(localStorage.userAuthToken)
          ? history.push('/')
          : null}
        {AuthHelper.checkUserIsAuthenticated(localStorage.userAuthToken) &&
        AuthHelper.checkUserIsAdmin(localStorage.userAuthToken)
          ? history.push('/admin')
          : null}
        <div className="form-page-content card-2 border-line">
          <h4 className="text-center mg-top-10">Account login page</h4>
          <div
            className="alert el-card"
            id="loginErrorDiv"
            style={{ display: hasValidationError || hasLoginError ? 'block' : 'none' }}
          >
            <p id="loginErrorMessage">
              <i className="fa fa-warning" /> &nbsp;
              {hasValidationError && extractErrorMessages(validationErrors)}
              {loginError}
            </p>
          </div>
          <form id="loginForm" onSubmit={this.handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="email"
              placeholder="Email address"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
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

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  hasLoginError: PropTypes.bool,
  loginError: PropTypes.string,
};

LoginForm.defaultProps = {
  isLoading: false,
  hasLoginError: false,
  loginError: null,
};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  hasLoginError: state.login.hasLoginError,
  loginError: state.login.loginError,
});

const mapDispatchToProps = {
  loginUser: AuthAction.loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LoginForm));
