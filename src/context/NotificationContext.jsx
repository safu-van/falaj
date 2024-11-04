import { createContext, useEffect, useState } from "react";
import { isLastDayOfMonth } from "../utils/dateUtils";
import { getItem, setItem } from "../utils/localStorage";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const checkDate = () => {
      const notificationSeen = getItem("notificationSeen");
      const isLastDay = isLastDayOfMonth();

      // Reset notificationSeen at the start of each month
      if (!isLastDay) {
        setItem("notificationSeen", false);
      }

      // Show notification if it’s the last day and it hasn’t been seen
      if (isLastDay && !notificationSeen) {
        setNotification(true);
      } else {
        setNotification(false);
      }
    };

    checkDate();

    const intervalId = setInterval(checkDate, 5 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const markNotificationAsSeen = () => {
    setNotification(false);
    setItem("notificationSeen", true);
  };

  return (
    <NotificationContext.Provider value={{ notification, markNotificationAsSeen }}>
      {children}
    </NotificationContext.Provider>
  );
};
