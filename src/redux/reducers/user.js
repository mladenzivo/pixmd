const initialUserData = {
  isFetchingCurrentUserSession: false,
  isAuthenticated: null,
  isFetchUserData: false,
  isLoginSuccess: false,
  loginError: null,
  loginLoading: false,
  currentUser: {}
};

const user = (state = initialUserData, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER_SESSION":
      return {
        ...state,
        isFetchingCurrentUserSession: action.isFetchingCurrentUserSession,
        isAuthenticated: action.isAuthenticated
      };
    case "SET_LOGIN_SUCCESS":
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
        accountData: action.accountData
      };
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        loginError: action.loginError,
        loginLoading: action.loginLoading
      };
    case "RESET_LOAGIN_ERROR":
      return {
        ...state,
        loginError: null
      };
    case 'SET_FETCH_USER_DATA_SESSION':
      return Object.assign({}, state, {
        isFetchUserData: action.isFetchUserData
      })
    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.currentUser
      };
    case "USER_LOGOUT":
      return {
        currentUser: null,
        userData: null,
        isFetchingCurrentUserSession: false
      };
    default:
      return state;
  }
};

export default user;
