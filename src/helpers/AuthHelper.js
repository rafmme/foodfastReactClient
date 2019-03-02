import decode from 'jwt-decode';

export default class AuthHelper {
  static checkUserIsAdmin(token) {
    try {
      const { isAdmin } = decode(token);
      return isAdmin;
    } catch (error) {
      return false;
    }
  }

  static checkUserIsAuthenticated(token) {
    try {
      const { exp } = decode(token);
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  }

  static decodeToken(token) {
    try {
      const userObject = decode(token);
      /* istanbul ignore next */
      return userObject;
    } catch (error) {
      return {};
    }
  }
}
