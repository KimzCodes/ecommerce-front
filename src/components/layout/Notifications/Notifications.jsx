import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import NotificationList from "./NotificationList";

const { notificationsWrapper } = styles;

const Notifications = () => {
  const toasts = useSelector((state) => state.toast.notifications);

  return (
    <div className={notificationsWrapper}>
      <NotificationList toasts={toasts} />
    </div>
  );
};

export default Notifications;
