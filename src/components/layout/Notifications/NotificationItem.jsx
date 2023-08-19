import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { removeToast } from "../../../store/toastSlice";
import { useDispatch } from "react-redux";
import { Placeholder } from "react-bootstrap";

import styles from "./styles.module.css";

const { notification, indicator } = styles;

const NotificationItem = ({ id, title, description, type }) => {
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const closeHandler = useCallback(() => {
    dispatch(removeToast(id));
  }, [dispatch, id]);

  const handleMouseEvent = () => {
    setPaused((prevState) => !prevState);
  };

  useEffect(() => {
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

    return () => clearTimeout(timerId);
  }, [paused]);

  useEffect(() => {
    if (progress === 100) {
      closeHandler();
    }
  }, [progress, closeHandler]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      className={`alert alert-${type} ${notification}`}
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
