import decode from 'jwt-decode';

export default class AuthHelper {
  static checkUserIsAdmin(token) {
    const { isAdmin } = decode(token);
    return isAdmin;
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
}
