// Announcement.tsx
"use client";

import React, { useState } from "react";
import { FiBell } from "react-icons/fi"; // Bell icon for announcements

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnnouncement = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      {/* Icon Button to open the announcement */}
      <button
        onClick={toggleAnnouncement}
        className="p-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:outline-none"
      >
        <FiBell className="w-5 h-5" />
      </button>

      {/* Announcement Content */}
      {isOpen && (
        <div className="mt-2 w-64 bg-blue-600 text-white p-4 rounded-md shadow-md">
          <p className="text-sm font-medium">
            🎉 Welcome to our event! Check out the latest announcements here.
          </p>
          <button
            onClick={toggleAnnouncement}
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