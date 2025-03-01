import React, { useState } from 'react'

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New message received!", type: "success" },
    { id: 2, message: "Server maintenance scheduled at 12:00 AM.", type: "warning" },
  ]);

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "You have a new alert!",
      type: `${notifications.length % 2 === 0 ? "warning" : "success"}`
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={addNotification}
        className="mb-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Notification
      </button>

      <div className="w-full max-w-sm space-y-3">
        {
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded shadow flex justify-between items-center 
              ${notification.type === "warning" ? "bg-red-500 text-white" : "bg-green-700 text-white"
                }`}>
              <p>{notification.message}</p>
              <button
                onClick={() => dismissNotification(notification.id)}
                className="text-white hover:font-bold">
                Dismiss
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Notifications;