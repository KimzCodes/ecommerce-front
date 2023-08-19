import { useCallback, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { removeToast } from "../../../store/toastSlice";
import { useDispatch } from "react-redux";
import { Placeholder } from "react-bootstrap";

import styles from "./styles.module.css";

const { notification, indicator } = styles;

const NotificationItem = ({ id, title, description, type }) => {
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const autoCloseDuration = useRef(5000);
  const autoCloseSetTimeOut = useRef(null);
  const progressSetInterval = useRef(null);

  const closeHandler = useCallback(
    (id) => {
      dispatch(removeToast(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!isHovering) {
      progressSetInterval.current = setInterval(() => {
        setProgress((prev) => {
          const newValue = prev + 1;
          if (newValue === 100) {
            clearInterval(progressSetInterval.current);
          }

          return newValue;
        });
      }, 100);
    }
  }, [isHovering]);

  useEffect(() => {
    if (!isHovering) {
      autoCloseSetTimeOut.current = setTimeout(() => {
        closeHandler(id);
      }, autoCloseDuration.current);

      return () => clearTimeout(autoCloseSetTimeOut.current);
    }
  }, [closeHandler, id, isHovering]);

  function handleMouseEnter(e) {
    setIsHovering(true);

    if (autoCloseSetTimeOut.current) {
      clearTimeout(autoCloseSetTimeOut.current);
      clearInterval(progressSetInterval.current);
    }
  }
  function handleMouseLeave(e) {
    setIsHovering(false);
    const expiredTime = (autoCloseDuration.current * progress) / 100;
    const remainingTime = autoCloseDuration.current - expiredTime;
    autoCloseDuration.current = Math.trunc(remainingTime);
  }

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      className={`alert alert-${type} ${notification}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn-close" onClick={() => closeHandler(id)}></button>

      <div className={indicator} style={{ width: `${progress}%` }}>
        <Placeholder xs={12} bg={type} />
      </div>
    </motion.div>
  );
};

export default NotificationItem;
