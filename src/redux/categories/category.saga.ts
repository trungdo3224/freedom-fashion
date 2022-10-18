import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";




export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray))
      } catch (error) {
        yield* put(fetchCategoriesFailed(error as Error))
      }
}

export function* filterCategoryAsync() {
  try {
      const categoriesArray = yield* call(getCategoriesAndDocuments);
      yield* put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
      yield* put(fetchCategoriesFailed(error as Error))
    }
}


export function* onFetchCategories() { 
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* onFilterCategory() { 
  yield* takeLatest(CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_START, filterCategoryAsync);
}


export function* categorySaga() {
    yield* all([call(onFetchCategories), call(onFilterCategory)]);
}