import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { removeToast } from "../../../store/toastSlice";
import { useDispatch } from "react-redux";
import { Button, Placeholder } from "react-bootstrap";

import styles from "./styles.module.css";

const { notification, indicator } = styles;

const NotificationItem = ({ id, title, description, type }) => {
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
    }, 70);
  }, []);

  useEffect(() => {
    const autoClose = setTimeout(() => {
      closeHandler(id);
    }, 7000);

    return () => clearTimeout(autoClose);
  }, [closeHandler, id]);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className={`alert alert-${type} ${notification}`}
    >
      <h5>{title}</h5>
      <p>{description}</p>
      <Button className="btn-close" onClick={() => closeHandler(id)}></Button>

      <div className={indicator} style={{ width: `${loading}%` }}>
        <Placeholder xs={12} bg={type} />
      </div>
    </motion.div>
  );
};

export default NotificationItem;
