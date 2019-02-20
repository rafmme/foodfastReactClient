/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import icon from '../../../../public/assets/images/icon.png';
import { validateSignUpInput, extractErrorMessages } from '../../../helpers/validations';
import { AuthAction } from '../../../actions/auth.action';
import AuthHelper from '../../../helpers/AuthHelper';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValidationError: false,
      validationErrors: [],
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
    inputFieldsData[e.target.id] = e.target.value;
    this.setState({
      inputFieldsData,
      hasValidationError: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signUpUser, history } = this.props;
    const { inputFieldsData } = this.state;
    const errors = validateSignUpInput(inputFieldsData);
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
    signUpUser(inputFieldsData, history);
  }

  render() {
    const { hasValidationError, validationErrors } = this.state;
    const { history, hasSignUpError, signUpError, isLoading } = this.props;
    return (
      <section className="form-page">
        <Link to="about" className="home-link">
          <span>
            <h1 className="text-center mg-top-10 brand-name" style={{ marginTop: '5%' }}>
              <span className="img-holder">
                <img src={icon} alt="" />
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
        <div className="form-page-content mg-top-10 card-2 border-line">
          <h4 className="text-center">Create an account</h4>
          <div
            className="alert el-card"
            id="loginErrorDiv"
            style={{ display: hasValidationError || hasSignUpError ? 'block' : 'none' }}
          >
            <p id="loginErrorMessage">
              <i className="fa fa-warning" /> &nbsp;
              {hasValidationError && extractErrorMessages(validationErrors)}
              {signUpError}
            </p>
          </div>
          <form onSubmit={this.handleSubmit} id="signUpForm">
            <label htmlFor="fullname">
              Full Name
              <span>*</span>
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              id="fullname"
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
              id="email"
              placeholder="Email address"
            />
            <label htmlFor="password">
              Password
              <span>*</span>
            </label>
            <input
              type="password"
              onChange={this.handleChange}
              id="password"
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

SignUpForm.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  hasSignUpError: PropTypes.bool,
  signUpError: PropTypes.string,
};

SignUpForm.defaultProps = {
  isLoading: false,
  hasSignUpError: false,
  signUpError: null,
};

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  hasSignUpError: state.auth.hasSignUpError,
  signUpError: state.auth.signUpError,
});

const mapDispatchToProps = {
  signUpUser: AuthAction.signUpUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SignUpForm));
