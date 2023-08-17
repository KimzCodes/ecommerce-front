import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications }) => {
  const renderList = notifications.map((item) => (
    <NotificationItem key={item.id} {...item} />
  ));

  return <>{renderList}</>;
};

export default NotificationList;
