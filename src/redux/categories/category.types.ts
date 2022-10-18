export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',

  FILTER_CATEGORIES_START = 'category/FILTER_CATEGORIES_START',
  FILTER_CATEGORIES_SUCCESS = 'category/FILTER_CATEGORIES_SUCCESS',
  FILTER_CATEGORIES_FAILED = 'category/FILTER_CATEGORIES_FAILED',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}


export type CategoryMap = {
  [key: string]: CategoryItem[];
}