const showNotification = (title, options = {}) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, options);
  } else {
    console.warn("Notifications not supported of permission not granted!");
  }
};

export default showNotification;
