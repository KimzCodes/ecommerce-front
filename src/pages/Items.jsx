import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GridList from './../components/GridList/GridList';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../state/ItemsSlice';
import Item from './../components/ecom-ui/Item/Item';

const Items = () => {
  const { prefix } = useParams();

  const dispatch = useDispatch();
  const { items, s, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItems(prefix));
    return () => {
      dispatch({ type: 'items/clearItems' });
    };
  }, [dispatch, prefix]);
  return (
    <>
      <GridList items={items} loading={loading} error={error}>
        <Item actionType='add' />
      </GridList>
    </>
  );
};

export default Items;
