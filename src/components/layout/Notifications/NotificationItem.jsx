import { useDispatch } from "react-redux";
import { removeNotification } from "../../../store/notificationSlice";
import Placeholder from "react-bootstrap/Placeholder";
import styles from "./styles.module.css";

const { notificationItem, indicator } = styles;

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
      <Placeholder bg={type} style={{ width: "80%" }} className={indicator} />
    </div>
  );
};

export default NotificationItem;
