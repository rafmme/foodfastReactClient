import React, { Component } from 'react';
import CustomerNavLink from './CustomerNavLink';
import NavBar from './NavBar';
import Footer from './Footer';
import ShowCase from './Showcase';
import HeroSearchBox from './HeroSearchBox';
import Modal from './Modal';
import MealData from './MealData';
import MealList from './MealList';
import OrderForm from './OrderForm';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      mealData: {},
    };
    this.handleModalClose = this.handleModalClose.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal(e, mealData) {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      isModalOpened: true,
      mealData,
    }));
  }

  handleModalClose(e) {
    e.preventDefault();
    this.setState({
      isModalOpened: false,
    });
  }

  render() {
    const { isModalOpened, mealData } = this.state;
    return (
      <>
        <div className="wrapper">
          <NavBar>
            <CustomerNavLink />
          </NavBar>
          <ShowCase>
            <HeroSearchBox />
          </ShowCase>
          <MealData render={({ meals }) => <MealList meals={meals} showModal={this.showModal} />} />
        </div>
        <div id="order-alert-div" className="order-action-alert el-card">
          <p id="order-alert-p" />
        </div>
        <Modal isOpened={isModalOpened}>
          <OrderForm onClose={this.handleModalClose} mealData={mealData} />
        </Modal>
        <Footer />
      </>
    );
  }
}
