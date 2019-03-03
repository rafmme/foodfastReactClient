import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import AdminNavigationLink from '../NavBar/AdminNavLink/AdminNavLink';
import NetworkError from '../Showcase/FetchErrorMessage';
import Spinner from '../Spinner/Spinner';
import NewOrders from '../Order/OrderStatCard/NewOrders';
import ProcessedOrders from '../Order/OrderStatCard/ProcessedOrders';
import CompletedOrders from '../Order/OrderStatCard/CompletedOrders';
import TotalOrders from '../Order/OrderStatCard/TotalOrders';
import SearchFilterBox from '../SearchFilterBox/SearchFilterBox';
import Modal from '../Modal/Modal';
import OrderStat from '../Order/UserOrdersPage/OrderStat';
import OrderAction from '../../../actions/order.action';
import OrderView from './OrderView';
import OrderData from '../Order/OrderTable/OrderInfo';

export class AdminHome extends Component {
  componentDidMount() {
    const { fetchAllOrders } = this.props;
    fetchAllOrders();
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
            <AdminNavigationLink />
          </NavigationBar>
          <OrderStat>
            <NewOrders count={newOrders.length} />
            <ProcessedOrders count={processedOrders.length} />
            <CompletedOrders count={completedOrders.length} />
            <TotalOrders count={orders.length} />
          </OrderStat>
          <div className="row table-padding">
            <SearchFilterBox />
            <OrderView orderList={orders} />
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

/* istanbul ignore next */
const mapStateToProps = state => ({
  isLoading: state.adminOrder.isLoading,
  hasError: state.adminOrder.hasError,
  fetchOrdersError: state.adminOrder.fetchOrdersError,
  isOpened: state.modal.isOpened,
  orders: state.adminOrder.orders,
  processedOrders: state.adminOrder.processedOrders,
  completedOrders: state.adminOrder.completedOrders,
  newOrders: state.adminOrder.newOrders,
  order: state.order.order,
});

const mapDispatchToProps = {
  fetchAllOrders: OrderAction.getAllOrders,
};

AdminHome.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  fetchOrdersError: PropTypes.object,
  isOpened: PropTypes.bool,
  orders: PropTypes.array,
  newOrders: PropTypes.array,
  completedOrders: PropTypes.array,
  processedOrders: PropTypes.array,
  order: PropTypes.object,
  fetchAllOrders: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminHome);
