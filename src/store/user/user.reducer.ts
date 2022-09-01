import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signInSuccess,
  signOutSuccess,
} from "./user.action";
import { AnyAction } from "redux";

export type UserState = {
  readonly currentUser: null | UserData;
  readonly isLoading: boolean;
  readonly error: null | Error;
};

const UserInitialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = UserInitialState,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action.type)) {
    return { ...state, currentUser: action.payload };
  }
  if (signOutSuccess.match(action.type)) {
    return { ...state, currentUser: null };
  }
  if (
    signInFailed.match(action.type) ||
    signUpFailed.match(action.type) ||
    signOutFailed.match(action.type)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};
