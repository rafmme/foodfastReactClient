import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationBar from '../../NavBar/NavBar';
import UserNavigationLink from '../../NavBar/UserNavLink/UserNavLink';
import OrderStat from './OrderStat';
import Footer from '../../Footer/Footer';
import NewOrders from '../OrderStatCard/NewOrders';
import ProcessedOrders from '../OrderStatCard/ProcessedOrders';
import CompletedOrders from '../OrderStatCard/CompletedOrders';
import TotalOrders from '../OrderStatCard/TotalOrders';
import Spinner from '../../Spinner/Spinner';
import OrderTable from '../OrderTable/Table';
import Modal from '../../Modal/Modal';
import NetworkError from '../../Showcase/FetchErrorMessage';
import SearchFilterBox from '../../SearchFilterBox/SearchFilterBox';
import OrderData from '../OrderTable/OrderInfo';
import OrderAction from '../../../../actions/order.action';
import AuthHelper from '../../../../helpers/AuthHelper';

export class UserOrders extends Component {
  componentDidMount() {
    const { fetchOrders } = this.props;
    const { userId } = AuthHelper.decodeToken(localStorage.userAuthToken);
    fetchOrders(userId);
  }

  render() {
    const {
      isLoading,
      isOpened,
      hasError,
      orders,
      processedOrders,
      newOrders,
      completedOrders,
      fetchOrdersError,
      order,
    } = this.props;

    if (hasError) {
      return <NetworkError hasError={hasError} errorMessage={fetchOrdersError} />;
    }
    return (
      <>
        <Spinner isLoading={isLoading} />
        <div className="wrapper">
          <NavigationBar>
            <UserNavigationLink />
          </NavigationBar>
          <OrderStat>
            <NewOrders count={newOrders.length} />
            <ProcessedOrders count={processedOrders.length} />
            <CompletedOrders count={completedOrders.length} />
            <TotalOrders count={orders.length} />
          </OrderStat>
          <div className="row table-padding">
            <SearchFilterBox />
            <OrderTable orderList={orders} />
          </div>
        </div>
        <Modal isOpened={isOpened}>
          {/* istanbul ignore next */ order && <OrderData order={order} />}
        </Modal>
        <Footer />
      </>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.order.isLoading,
  hasError: state.order.hasError,
  fetchOrdersError: state.order.fetchOrdersError,
  isOpened: state.modal.isOpened,
  orders: state.order.orders,
  processedOrders: state.order.processedOrders,
  completedOrders: state.order.completedOrders,
  newOrders: state.order.newOrders,
  order: state.order.order,
});

const mapDispatchToProps = {
  fetchOrders: OrderAction.getUserOrders,
};

UserOrders.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  fetchOrdersError: PropTypes.object,
  isOpened: PropTypes.bool,
  orders: PropTypes.array,
  newOrders: PropTypes.array,
  completedOrders: PropTypes.array,
  processedOrders: PropTypes.array,
  order: PropTypes.object,
  fetchOrders: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserOrders);
