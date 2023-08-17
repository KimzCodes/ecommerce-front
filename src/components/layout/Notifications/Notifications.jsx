import { useSelector } from "react-redux";
import NotificationList from "./NotificationList";

import styles from "./styles.module.css";

const Notifications = () => {
  const notifications = useSelector((state) => state.notification.items);

  return (
    <div className={styles.notificationsContainer}>
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default Notifications;
