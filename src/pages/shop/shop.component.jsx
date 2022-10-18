import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../redux/categories/category.action';

import { Filter, FilterContainer, FilterTypeContainer, SearchBox } from './shop.styles';

const Shop = () => {
  const [categoryValue, setCategoryValue] = useState("");
  const [priceOrder, setPriceOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const onCategoryOptionChange = (e) => {
    setCategoryValue(e.target.value)
  }

  const onPriceOrderChange = (e) => {
    setPriceOrder(e.target.value);
  }

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [dispatch]);

  const options = [
    {
      label: "Mens",
      value: "mens",
    },
    {
      label: "Womens",
      value: "womens",
    },
    {
      label: "Jackets",
      value: "jackets",
    },
    {
      label: "Hats",
      value: "hats",
    },
    {
      label: "Sneakers",
      value: "sneakers",
    },
  ];

  return (
    <>
      <h1>Filter Options</h1>
      <FilterTypeContainer>
        <FilterContainer>
          <h3>By Categories</h3>
          <Filter value={categoryValue} onChange={onCategoryOptionChange}>
            <option value="default">Default</option>
            {options.map((opt, index) => (
              <option
                key={index}
                value={opt.value}
              >
                {opt.label}
              </option>
            ))}

          </Filter>
        </FilterContainer>
        <FilterContainer>
          <h3>By Price</h3>
          <Filter onChange={onPriceOrderChange}>
            <option value="default">Default</option>
            <option value='lth'>Low To High</option>
            <option value='htl'>High To Low</option>
          </Filter>
        </FilterContainer>
        <FilterContainer>
          <h3>Search</h3>
          <SearchBox placeholder='Search products...' />
        </FilterContainer>
      </FilterTypeContainer>

      <Routes>
        <Route index element={<CategoriesPreview categoryValue={categoryValue} sortedPrice={priceOrder}/>} />
        <Route path={`:category`} element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
