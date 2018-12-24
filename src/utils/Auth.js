import decode from 'jwt-decode';
import axiosInstance from './axios.config';

export default class AuthService {
  static logOutUser() {
    localStorage.removeItem('userToken');
    delete axiosInstance.defaults.headers.common.Authorization;
  }

  static setAuthToken(token) {
    localStorage.setItem('userToken', token);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static getAuthToken() {
    return localStorage.userToken;
  }

  static getCurrentUser() {
    const JWT = localStorage.userToken;
    return decode(JWT);
  }

  static checkUserIsAuthenticated() {
    const JWT = localStorage.userToken;
    if (!JWT) {
      return false;
    }
    try {
      const { exp } = decode(JWT);
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }

  static checkUserIsAdmin() {
    const JWT = localStorage.userToken;
    const { isAdmin } = decode(JWT);
    return isAdmin;
  }
}
