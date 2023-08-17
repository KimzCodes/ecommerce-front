import styles from "./styles.module.css";
const { notificationItem } = styles;

const NotificationItem = ({ id, title, type, description }) => {
  return (
    <div className={`alert alert-${type} ${notificationItem}`}>
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="btn-close"></button>
    </div>
  );
};

export default NotificationItem;
