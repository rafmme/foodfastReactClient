/* eslint-disable max-len */
import AuthHelper from '../../src/helpers/AuthHelper';

const dummyToken =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkOTZmZDg4MS0yMDk2LTQ2ZjItODhkOC0xM2M5MjVlYmJjODciLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTUwMzYyMjg2LCJleHAiOjE1NTA0MDU0ODZ9.-Jk9LEe_J0BrXo6z9pVg7-1HSO8nQuyu406q0PL2mYI';

describe('AuthHelper test', () => {
  it('should successfully decode token and return isAdmin as false', () => {
    expect(AuthHelper.checkUserIsAdmin(dummyToken)).toEqual(false);
  });

  it('should return false if token has expired', () => {
    expect(
      AuthHelper.checkUserIsAuthenticated(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiam9obnNwYXVseUBnbWFpbC5jb20iLCJyb2xlSWQiOjEsImlhdCI6MTU0NzY0NDY2NywiZXhwIjoxNTQ3NzMxMDY3fQ.M4USh_RmbarOTRGNpD-lv3JzRhBQ4k_nAykmW7W6GEs',
      ),
    ).toEqual(false);
  });

  it('should return false if token is invalid', () => {
    expect(AuthHelper.checkUserIsAuthenticated(null)).toEqual(false);
  });

  it('should return true if token is valid', () => {
    expect(
      AuthHelper.checkUserIsAuthenticated(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNzQ1Yzc4LTdiMWEtODFlOC05YzljLTlkNDJiMjFiMWEzZSIsImZ1bGxOYW1lIjoiU3RldmUiLCJ1c2VyTmFtZSI6InN0ZXZlIiwiZW1haWwiOiJzdGV2ZUBub3cuY29tIiwiaWF0IjoxNTQ4MzY3MjU4LCJleHAiOjcuMjAwMDAwMDAwMDAwMDAxZSs0NX0.awgY_ojIeaZMnSIu7lCcjP0eVO9JEcxc8YA9VrvzCEI',
      ),
    ).toEqual(true);
  });
});
