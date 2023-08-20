import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { removeToast } from "../../../store/toastSlice";
import { useDispatch } from "react-redux";
import { Placeholder } from "react-bootstrap";

import styles from "./styles.module.css";

const { notification, indicator, hovering } = styles;

const NotificationItem = ({ id, title, description, type, delay, onClose }) => {
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [delayAnimation, setDelayAnimation] = useState(false);

  const closeHandler = useCallback(() => {
    dispatch(removeToast(id));
    onClose();
  }, [dispatch, id, onClose]);

  const handleMouseEvent = () => {
    setPaused((prevState) => !prevState);
  };

  useEffect(() => {
    if (delayAnimation) return;
    let timerId = setInterval(() => {
      if (!paused) {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          }

          return prevProgress;
        });
      }
    }, 50);

    return () => {
      clearTimeout(timerId);
    };
  }, [paused, delayAnimation, onClose]);

  useEffect(() => {
    if (delay > 0) {
      setDelayAnimation(true);

      const timerId = setTimeout(() => {
        setDelayAnimation(false);
      }, delay);

      return () => clearTimeout(timerId);
    }
  }, [delay]);

  useEffect(() => {
    if (progress === 100) {
      closeHandler();
    }
  }, [progress, closeHandler]);

  if (delayAnimation) return;

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      className={`alert alert-${type} ${notification} ${
        paused ? hovering : ""
      }`}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn-close" onClick={() => closeHandler(id)}></button>

      <div
        className={indicator}
        style={{ width: `${progress}%`, transition: "width 50ms linear" }}
      >
        <Placeholder xs={12} bg={type} />
      </div>
    </motion.div>
  );
};

export default NotificationItem;
