import { AnyAction } from "redux";

// AC stands for action creator
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
}; /* Matchable has a type of the Action Creator and extends a function 
that returns type any of AnyAction interface and is extended to an object with 
type as the return of ReturnType with the type of our Action Creator .Finally, match function
take action with type AnyAction as parameter and return true if the parameter is equal to the ReturnType.
*/

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;
/* function withMatcher with the type of Action Creator extends AnyAction
and is extended with an object with a child type of string type
take an actionCreator with the type AC as parameter then return a value of type Matchable */

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    matcḥ̣̣̣̣̣̣(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
