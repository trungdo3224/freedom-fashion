import {all, call, takeLatest, put} from "redux-saga/effects"

export function* onAddItemToCart() {
    yield* "something"
} 

export function* cartSaga() {
    yield all([call(onAddItemToCart)])
}