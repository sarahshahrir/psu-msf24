"use client";

import Image from "next/image";
import msc from "@/public/msc.png";
import namsa from "@/public/namsa.jpeg";
import pic from "@/public/pic.jpeg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const deadline = "November, 11, 2023";

  const handlePicturesClick = () => {
    setShowMessage(true); // Show the message when the Pictures button is clicked
    setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
  };

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    if (time <= 0) {
      return;
    }

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex h-[100vh] flex-col items-center justify-center md:p-24 px-4 gap-6 py-4">
      {/* Video background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="https://res.cloudinary.com/drddwtaec/video/upload/v1731607265/WhatsApp_Video_2024-11-14_at_12.43.18_PM_uebc5e.mp4"
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-customBlue opacity-70"></div> {/* Semi-transparent overlay */}
      </div>

      {/* Content on top of video */}
      <div className="relative z-10 flex items-center gap-4">
        <Image className="rounded-full" src={msc} alt="Logo 1" width={50} height={50} />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
<h1 className="text-white md:text-[48px] font-extrabold text-4xl">MSF 24'</h1>
        <Image className="rounded-full" src={namsa} alt="Logo 2" width={50} height={50} />
      </div>

      {/* Event details */}
      <div className="relative z-10 flex items-center justify-center gap-4 mt-2">
        <h2 className="text-sm font-semibold text-white md:text-lg">Penn State</h2>
        <div className="h-[20px] w-0.5 bg-gray-300 opacity-80"></div>
        <h2 className="text-sm font-semibold text-white md:text-lg">16 Nov</h2>
        <div className="h-[20px] w-0.5 bg-gray-300 opacity-80"></div>
        <h2 className="text-sm font-semibold text-white md:text-lg">15 Universities</h2>
      </div>

      {/* Central image */}
      <Image
        onClick={() => setIsClicked(!isClicked)}
        className="rounded-md translate-y-[-10px] transition ease-in-out duration-700"
        src={pic}
        alt="Event Group Picture"
        width={300}
        height={300}
      />

      {/* Message box */}
      {showMessage && (
        <div className="absolute bottom-20 px-4 py-2 bg-red-600 text-white rounded-md text-center max-w-xs mx-auto">
          Pictures are coming soon!
        </div>
      )}

      {/* Footer buttons */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <Link href="/fixtures">
          <button className="text-white font-semibold flex items-center gap-1">
            <span className="hover:underline decoration-white">Fixtures</span>
            <span className="text-lg">›</span> {/* Larger arrow without underline */}
          </button> 
        </Link>
        {/* Uncomment when lines below when link is available */}
        {/* <a href="https://photos.app.goo.gl/SNFp9Zw7MHQhpqGe7">
          <button className="text-white font-semibold flex items-center gap-1"> */}

          {/* Delete one line below when link is available */}
          <button onClick={handlePicturesClick} className="text-white font-semibold flex items-center gap-1">
            <span className="hover:underline decoration-white">Pictures</span>
            <span className="text-lg">›</span> {/* Larger arrow without underline */}
          </button>

        {/* Also uncomment below line when link is available */}
        {/* </a> */}
      </div>
    </main>
  );
}