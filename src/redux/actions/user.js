import Amplify, { Storage, Auth } from "aws-amplify";
import aws_exports from "../../aws-exports";
Amplify.configure(aws_exports);

const { aws_user_files_s3_bucket: bucket } = aws_exports;

function fetchingCurrentUserSession(
  isFetchingCurrentUserSession,
  isAuthenticated
) {
  return {
    type: "SET_CURRENT_USER_SESSION",
    isFetchingCurrentUserSession,
    isAuthenticated,
  };
}

function setLoginSuccess(isLoginSuccess, accountData) {
  return {
    type: "SET_LOGIN_SUCCESS",
    isLoginSuccess,
    accountData,
  };
}

// Get current User sesstion
// -----------------------------------------------------------------------------
export function getCurrentUserSession() {
  return (dispatch) => {
    dispatch(fetchingCurrentUserSession(true, false));
    dispatch(setLoginSuccess(false, null));

    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then((user) => {
          dispatch(setLoginSuccess(true, user));
          dispatch(fetchingCurrentUserSession(false, true));
          dispatch(getCurrentUser());
          return resolve(user);
        })
        .catch((err) => {
          console.log(err);
          dispatch(fetchingCurrentUserSession(false, false));
          return reject(err);
        });
    });
  };
}

// User Log in
// -----------------------------------------------------------------------------
export const userLoginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(setLoginSuccess(false, null));
    dispatch({
      type: "SET_LOGIN_STATUS",
      loginError: null,
      loginLoading: true,
    });

    callLoginAPI(email, password, (res) => {
      if (res instanceof Error) {
        dispatch({
          type: "SET_LOGIN_STATUS",
          loginError: res,
          loginLoading: false,
        });
      } else {
        dispatch(setLoginSuccess(true, res));
        dispatch({
          type: "SET_LOGIN_STATUS",
          loginError: null,
          loginLoading: false,
        });
        dispatch(fetchingCurrentUserSession(false, true));
        dispatch(getCurrentUser());
      }
    });
  };
};

// Reset Log in error
// -----------------------------------------------------------------------------
export const resetLoginError = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_LOAGIN_ERROR" });
  };
};

// User Login HTTP request
// -----------------------------------------------------------------------------
function callLoginAPI(email, password, callback) {
  Auth.signIn(email, password)
    .then((user) => {
      return callback(user.signInUserSession);
    })
    .catch((err) => {
      return callback(new Error(err.message));
    });
}

// Get current user
// -----------------------------------------------------------------------------
export function getCurrentUser() {
  return async (dispatch) => {
    try {
      let user = await Auth.currentUserInfo();
      dispatch({ type: "GET_CURRENT_USER", currentUser: user });
    } catch (err) {
      console.log("error creating user data: ", err);
    }
  };
}

// Update Article Pictures
// -----------------------------------------------------------------------------
export function uploadToS3(file, id) {
  return async (dispatch) => {
    let user = await Auth.currentAuthenticatedUser();
    let userId = user.signInUserSession.idToken.payload["cognito:username"];
    const extension = /^.+\.([^.]+)$/.exec(file.name)[1];
    const { type: mimeType } = file;
    const filePath = `${new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/")}/${userId}-article-${id}.${extension}`;
    const url = `https://${bucket}.s3.amazonaws.com/public/${filePath}`;

    try {
      // Uploading to S3 bucket
      var options = {
        ACL: "public-read",
        contentType: mimeType,
        level: "public",
      };
      await Storage.put(filePath, file, options);

      // return image url
      return url;
    } catch (err) {
      console.log("error uploading article picture: ", err);
    }
  };
}

// User Sign Out
// -----------------------------------------------------------------------------
export function userSignOut() {
  return dispatch => {
    dispatch({
      type: "SET_CURRENT_USER_SESSION",
      isAuthenticated: false,
      isFetchingCurrentUserSession: false
    });
    Auth.signOut()
      .then(data => {
        dispatch({ type: "USER_LOGOUT" });
      })
      .catch(err => console.log(err));
  };
}