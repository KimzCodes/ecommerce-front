import { useCallback, useEffect, useState } from "react";
import { removeToast } from "../../../store/toastSlice";
import { useDispatch } from "react-redux";
import { Button, Placeholder } from "react-bootstrap";

import styles from "./styles.module.css";

const { notification, indicator } = styles;

const Notification = ({ id, title, description, type }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(0);

  const closeHandler = useCallback(
    (id) => {
      dispatch(removeToast(id));
    },
    [dispatch]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        const newValue = prev + 1;
        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 50);
  }, []);

  useEffect(() => {
    const autoClose = setTimeout(() => {
      closeHandler(id);
    }, 5000);

    return () => clearTimeout(autoClose);
  }, [closeHandler, id]);

  return (
    <div className={`alert alert-${type} ${notification}`}>
      <h5>{title}</h5>
      <p>{description}</p>
      <Button className="btn-close" onClick={() => closeHandler(id)}></Button>

      <div className={indicator} style={{ width: `${loading}%` }}>
        <Placeholder xs={12} bg={type} />
      </div>
    </div>
  );
};

export default Notification;
