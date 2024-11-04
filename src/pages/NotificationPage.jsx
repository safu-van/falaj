import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";

const NotificationPage = () => {
  const { notification, markNotificationAsSeen } = useContext(NotificationContext);

  const navigate = useNavigate();
  const handleClick = () => {
    markNotificationAsSeen();
    navigate("/dashboard/add-expense");
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center justify-center bg-white w-full h-12 text-md font-semibold rounded-md shadow-md">
        Notifications
      </div>
      <div className="bg-white w-full flex-grow mt-3 rounded-md shadow-md overflow-y-auto">
        {notification ? (
          <div
            onClick={handleClick}
            className="m-3 bg-[#e9eff5] p-4 rounded-md shadow-md border-l-4 border-[#024639]"
          >
            <h2 className="text-lg font-bold text-gray-800">
              End of Month Reminder
            </h2>
            <p className="text-gray-600 mt-1">
              Today is the last day of the month. Don't forget to add your
              expenses!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span>You're all caught up!</span>
            <span>
              No new <span className="text-green-600">notifications</span> at
              the moment.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
