import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type FilterCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_START>;

export type FilterCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_SUCCESS,
  Category[]
>;

export type FilterCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_FAILED,
  Error
>;

export const fetchCategoriesStart = withMatcher(() =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));


  export const filterCategoriesStart = withMatcher(() =>
  createAction(CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_START)
);

export const filterCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FilterCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_SUCCESS,
      categoriesArray
    )
);


  export const filterCategoriesFailed = withMatcher((error: Error): FilterCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FILTER_CATEGORIES_FAILED, error));