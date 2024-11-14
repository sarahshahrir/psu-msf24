"use client";

import React, { useState, useEffect } from "react"; // Ensure useEffect is imported
import { FiBell } from "react-icons/fi"; // Bell icon for announcements

const Announcement = () => {
  // State to track if the announcement has been read or not
  const [isOpen, setIsOpen] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [showNoAnnouncementMessage, setShowNoAnnouncementMessage] = useState(false); // Start as false

  const hasAnnouncement = false; // You can set this dynamically based on whether an announcement exists or not

  useEffect(() => {
    // Ensure that the announcement is closed if there is no announcement
    if (!hasAnnouncement) {
      setIsOpen(false);
    }
  }, [hasAnnouncement]);

  const toggleAnnouncement = () => {
    // Open the announcement or show the "No announcement" message only on click
    setIsOpen(!isOpen);
    if (!hasAnnouncement) {
      setShowNoAnnouncementMessage(!showNoAnnouncementMessage);
    }
    if (!isOpen) {
      setIsRead(false); // Reset read status when opening the announcement
    }
  };

  const markAsRead = () => {
    setIsRead(true); // Mark the announcement as read
    setIsOpen(false); // Close the announcement after reading
  };

  const closeNoAnnouncementMessage = () => {
    setShowNoAnnouncementMessage(false); // Close the "No announcement for now" message
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      {/* Icon Button to open/close the announcement */}
      <button
        onClick={toggleAnnouncement}
        className={`p-2 rounded-full ${
          hasAnnouncement
            ? isRead
              ? "bg-white text-black" // If read and there's an announcement
              : "bg-blue-600 text-white" // If unread and there's an announcement
            : "bg-white text-black hover:bg-white" // If no announcement
        } shadow-md hover:bg-blue-700 focus:outline-none`}
      >
        <FiBell className="w-5 h-5" />
      </button>

      {/* Announcement Content */}
      {isOpen && hasAnnouncement && (
        <div className="mt-2 w-64 bg-blue-600 text-white p-4 rounded-md shadow-md">
          <p className="text-sm font-medium">
              No announcements now.
              </p>
          <button
            onClick={markAsRead} // Close the announcement when clicked
            className="mt-2 text-xs underline hover:text-gray-300 focus:outline-none"
          >
            Close
          </button>
        </div>
      )}

      {/* Message when there's no announcement */}
      {showNoAnnouncementMessage && !hasAnnouncement && (
        <div className="mt-2 w-64 bg-white text-black p-4 rounded-md shadow-md">
          <p className="text-sm font-medium">
            🎉 Welcome to our event! Check out the latest announcements here.
          </p>
          <button
            onClick={closeNoAnnouncementMessage} // Close the "No announcement" message
            className="mt-2 text-xs underline hover:text-gray-300 focus:outline-none"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Announcement;