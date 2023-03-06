import { Alert, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import shoppingCardImg from '../../assets/shopping-card.svg';

import styles from './header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { totalQuantityCart, closeReachMax } from './../../state/CartSlice';
import { useState, useEffect } from 'react';

const Header = () => {
  const {
    shoppingCard,
    shoppingCartCounter,
    headerTop,
    header,
    mainNav,
    secNav,
    active,
    bumbCard,
    notifcation,
  } = styles;

  let total = useSelector(totalQuantityCart);
  const dispatch = useDispatch();
  const [isAnimated, setisAnimated] = useState(false);

  const classList = `${shoppingCartCounter} ${isAnimated ? bumbCard : ''} `;

  const { reachMax } = useSelector((state) => state.cart);

  useEffect(() => {
    setisAnimated(true);

    const debounce = setTimeout(() => {
      setisAnimated(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [total]);

  useEffect(() => {
    const closeDebounce = setTimeout(() => {
      dispatch(closeReachMax());
    }, 2000);
    return () => {
      clearTimeout(closeDebounce);
    };
  }, [reachMax]);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      dispatch(closeReachMax());
    });
    return () => {
      dispatch(closeReachMax());
    };
  }, [dispatch]);

  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg='info'>Ecom</Badge>
        </h1>
        <div className={shoppingCard}>
          <img alt='' src={shoppingCardImg} width='30' />
          <div className={classList}>{total}</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <NavLink
              end
              to='/'
              className={({ isActive }) => (isActive ? active : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/categories'
              className={({ isActive }) => (isActive ? active : '')}
            >
              categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/newcollection'
              className={({ isActive }) => (isActive ? active : '')}
            >
              new collection
            </NavLink>
          </li>
        </ul>
        <ul className={secNav}>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'>register</NavLink>
          </li>
        </ul>
      </nav>

      {reachMax && (
        <div className={notifcation}>
          <Alert
            variant='info'
            onClose={() => {
              dispatch(closeReachMax());
            }}
            dismissible
          >
            <p>you have reached the maximum stock of item</p>
          </Alert>
        </div>
      )}
    </header>
  );
};

export default Header;
