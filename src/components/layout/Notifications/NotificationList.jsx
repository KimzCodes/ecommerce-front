import { AnimatePresence } from "framer-motion";

import NotificationItem from "./NotificationItem";
import styles from "./NotificationItem";

const { notificationsWrapperScroll } = styles;

const NotificationList = ({ toasts }) => {
  const renderToasts = toasts.map((toast) => (
    <NotificationItem key={toast.id} {...toast} />
  ));

  return (
    <div className={notificationsWrapperScroll}>
      <AnimatePresence>{renderToasts}</AnimatePresence>
    </div>
  );
};

export default NotificationList;
