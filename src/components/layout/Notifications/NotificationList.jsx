import { AnimatePresence } from "framer-motion";

import NotificationItem from "./NotificationItem";

const NotificationList = ({ toasts }) => {
  const renderToasts = toasts.map((toast) => (
    <NotificationItem key={toast.id} {...toast} />
  ));

  return (
    <>
      <AnimatePresence>{renderToasts}</AnimatePresence>
    </>
  );
};

export default NotificationList;
