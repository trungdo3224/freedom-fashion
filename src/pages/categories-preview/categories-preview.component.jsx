import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../redux/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = ({ categoryValue, sortedPrice }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categories = Object?.keys(categoriesMap);
  const category = categories.filter(cat => cat === categoryValue);

  return (
    <Fragment>
      {isLoading ? <Spinner /> :
        category.length > 0 ? (category?.map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })) :
          (Object.keys(categoriesMap).map((title) => {
            let products = categoriesMap[title];

            return (
              <CategoryPreview key={title} title={title} products={products} priceOrder={sortedPrice} />
            );
          }))
      }

    </Fragment>
  );
};

export default CategoriesPreview;