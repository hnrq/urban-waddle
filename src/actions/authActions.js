import { auth, facebookProvider } from "firebaseConfig";
import { toast } from "react-toastify";
import * as types from "types/auth";

export const loginAction = () => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { user, credential } = await auth.signInWithPopup(facebookProvider);
    localStorage.setItem("accessToken", credential.accessToken);
    dispatch(loginSuccess(user));
  } catch (error) {
    toast.error("Log-in failed");
    console.log(error);
    dispatch(loginFailure(error));
  }
};

export const loginSuccess = (userInformation: any) => ({
  type: types.LOGIN_SUCCESS,
  payload: userInformation,
});

export const loginFailure = (error: AxiosError) => ({
  type: types.LOGIN_FAILURE,
  error,
});

export const loginRequest = () => ({ type: types.LOGIN_REQUEST });

export const logoutAction = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await auth.signOut();
    localStorage.removeItem("accessToken");
  } catch (error) {
    toast.error("Log-in failed");
    dispatch(logoutFailure(error));
  }
};

export const logoutSuccess = () => ({ type: types.LOGOUT_SUCCESS });

export const logoutFailure = (error: AxiosError) => ({
  type: types.LOGOUT_FAILURE,
  error,
});

export const logoutRequest = () => ({ type: types.LOGOUT_REQUEST });
