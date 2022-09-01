import { UserState } from "./user.reducer";
import { createSelector } from "reselect";
import { RootStage } from "../store";

export const currentUserReducer = (state:RootStage): UserState => state.user;
export const currentUserSelector = createSelector(
  [currentUserReducer],
  (user) => user.currentUser
);
