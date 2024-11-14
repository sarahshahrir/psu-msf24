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

  const deadline = "November, 11, 2023";

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
          src="https://res.cloudinary.com/dx0kyrggg/video/upload/v1699460136/These_are_Our_Values_UW-Madison_commercial_n3bahb.mp4"
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
        className="relative z-10 rounded-md mt-8 translate-y-[-20px] md:translate-y-[0px] transition ease-in-out duration-700"
        src={pic}
        alt="Event Group Picture"
        width={300}
        height={300}
      />

      {/* Footer buttons */}
      <div className="relative z-10 flex items-center gap-3">
        <Button variant="outline">
          <Link href="/fixtures">Fixtures</Link>
        </Button>
        <Button variant="outline">
          <a href="https://photos.app.goo.gl/SNFp9Zw7MHQhpqGe7">Pictures</a>
        </Button>
      </div>
    </main>
  );
}