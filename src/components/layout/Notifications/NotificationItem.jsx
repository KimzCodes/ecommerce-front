import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../../store/notificationSlice";
import Placeholder from "react-bootstrap/Placeholder";
import styles from "./styles.module.css";

const { notificationItem, indicator } = styles;

const NotificationItem = ({ id, title, type, description }) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const duration = 5000;
  const progressInterval = duration / 100;

  useEffect(() => {
    const timerId = setInterval(() => {
      setProgress((prevState) => {
        if (prevState < 100) {
          return prevState + 1;
        }
        return prevState;
      });
    }, progressInterval);

    return () => clearInterval(timerId);
  }, [progressInterval]);

  const closeHandler = () => {
    dispatch(removeNotification(id));
  };

  return (
    <div className={`alert alert-${type} ${notificationItem}`}>
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn-close" onClick={closeHandler}></button>
      <Placeholder
        bg={type}
        style={{
          width: `${progress}%`,
          transition: `width ${progressInterval}sm linear`,
        }}
        className={indicator}
      />
    </div>
  );
};

export default NotificationItem;
