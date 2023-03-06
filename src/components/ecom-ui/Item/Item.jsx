import { Button, Spinner } from 'react-bootstrap';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const Item = ({ btnText, actionType, id, title, price, img, max }) => {
  const { item } = styles;
  const dispatch = useDispatch();

  const btnHandler = () => {
    if (actionType === 'add') {
      dispatch({ type: 'cart/addtoCart', payload: { id, max } });
      setIsClicked((prev) => prev + 1);
    }
  };

  const [disabled, setDisabled] = useState(false);
  const [isClicked, setIsClicked] = useState(0);

  useEffect(() => {
    if (isClicked === 0) return;

    setDisabled(true);
    const debounce = setTimeout(() => {
      setDisabled(false);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [isClicked]);

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='primary' disabled={disabled} onClick={btnHandler}>
        {disabled && (
          <>
            <Spinner
              as='span'
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
              variant='light'
            />
            Adding ..
          </>
        )}

        {!disabled && (btnText || 'Add to card')}
      </Button>
    </div>
  );
};

export default Item;
