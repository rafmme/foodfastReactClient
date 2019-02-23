import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserNavigationLink from '../NavBar/UserNavLink/UserNavLink';
import NavigationBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ShowCase from '../Showcase/Showcase';
import HeroSearchBox from '../Showcase/HeroSearchBox';
import Spinner from '../Spinner/Spinner';
import MenuData from '../../containers/Meal/MealData';
import MealList from './MealList';
import NetworkError from '../Showcase/FetchErrorMessage';
import Modal from '../Modal/Modal';
import MealOrderForm from '../OrderForm/OrderForm';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLoading, fetchMenuError, hasError, isOpened } = this.props;
    if (hasError) {
      return <NetworkError hasError={hasError} errorMessage={fetchMenuError} />;
    }
    return (
      <>
        <Spinner isLoading={isLoading} />
        <div className="wrapper">
          <NavigationBar>
            <UserNavigationLink />
          </NavigationBar>
          <ShowCase>
            <HeroSearchBox />
          </ShowCase>
          <MenuData
            render={({ menu }) => (
              <MealList menu={menu} isLoading={isLoading} hasError={hasError} />
            )}
          />
        </div>
        <Modal isOpened={isOpened}>
          <MealOrderForm />
        </Modal>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.menu.isLoading,
  hasError: state.menu.hasError,
  fetchMenuError: state.menu.fetchMenuError,
  isOpened: state.modal.isOpened,
});

Menu.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  fetchMenuError: PropTypes.object,
  isOpened: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  null,
)(Menu);
