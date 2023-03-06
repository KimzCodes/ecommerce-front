import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from './../components/ecom-ui/Category/Category';
import { getCategories } from '../state/categorySlice';
import GridList from '../components/GridList/GridList';
import Loading from '../components/Loading/Loading';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { loading, error, records } = useSelector((state) => state.categories);

  return (
    <GridList items={records} loading={loading} error={error}>
      <Category />
    </GridList>
  );
};

export default Categories;
