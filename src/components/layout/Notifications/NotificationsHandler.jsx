import { useSelector } from "react-redux";
import Notification from "./Notification";

import styles from "./styles.module.css";

const { notificationsWrapper, notificationsWrapperScroll } = styles;

const NotificationsHandler = () => {
  const toasts = useSelector((state) => state.toast.notifications);

  const renderToasts = toasts.map((toast) => (
    <Notification key={toast.id} {...toast} />
  ));

  return (
    <div className={notificationsWrapper}>
      <div className={notificationsWrapperScroll}> {renderToasts}</div>
    </div>
  );
};

export default NotificationsHandler;
