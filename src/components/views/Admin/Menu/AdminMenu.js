import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetworkError from '../../Showcase/FetchErrorMessage';
import Spinner from '../../Spinner/Spinner';
import NavigationBar from '../../NavBar/NavBar';
import AdminNavigationLink from '../../NavBar/AdminNavLink/AdminNavLink';
import Modal from '../../Modal/Modal';
import Footer from '../../Footer/Footer';
import Menu from './MenuView';
import MenuData from '../../../containers/Meal/MealData';

export class AdminMenu extends Component {
  render() {
    const { isLoading, fetchMenuError, isOpened, hasError } = this.props;

    if (hasError) {
      return <NetworkError hasError={hasError} errorMessage={fetchMenuError} />;
    }
    return (
      <>
        <Spinner isLoading={isLoading} />
        <div className="wrapper">
          <NavigationBar>
            <AdminNavigationLink />
          </NavigationBar>
          <div className=" row center">
            <h2 id="new-orders" style={{ marginTop: '50px' }}>
              All food items
            </h2>
            <div className="row table-padding">
              <form action="#">
                <div className="row order-box-p" style={{ width: '70%' }}>
                  <div className="col-3-2">
                    <input
                      type="search"
                      name=""
                      id="order-search-box"
                      required
                      placeholder="Search foods"
                    />
                  </div>
                  <div className="col-2-3">
                    <select id="filter-field">
                      <option value="newest">newest</option>
                      <option value="oldest">oldest</option>
                    </select>
                  </div>
                </div>
              </form>
              <button type="submit" className="add-meal-btn el-card">
                <i className="fa fa-plus" /> Add New Food
              </button>
            </div>
            <br />
            <MenuData
              render={
                /* istanbul ignore next */ ({ menu }) => (
                  <Menu menu={menu} isLoading={isLoading} hasError={hasError} />
                )
              }
            />
          </div>
        </div>
        <Modal isOpened={isOpened}>
          <p>Hello</p>
        </Modal>
        <Footer />
      </>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  isLoading: state.menu.isLoading,
  hasError: state.menu.hasError,
  isOpened: state.modal.isOpened,
  fetchMenuError: state.menu.fetchMenuError,
});

const mapDispatchToProps = {};

AdminMenu.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  isOpened: PropTypes.bool,
  fetchMenuError: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminMenu);
