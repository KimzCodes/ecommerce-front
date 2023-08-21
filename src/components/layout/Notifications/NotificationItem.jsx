import { useDispatch } from "react-redux";
import { removeNotification } from "../../../store/notificationSlice";

import styles from "./styles.module.css";
const { notificationItem } = styles;

const NotificationItem = ({ id, title, type, description }) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(removeNotification(id));
  };

  return (
    <div className={`alert alert-${type} ${notificationItem}`}>
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn-close" onClick={closeHandler}></button>
    </div>
  );
};

export default NotificationItem;
