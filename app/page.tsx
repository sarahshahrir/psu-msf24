"use client";

import Image from "next/image";
import mysa from "@/public/mysa.png";
import namsa from "@/public/namsa.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
    <main className="flex h-[100vh] flex-col items-center justify-center md:p-24 px-4 gap-6 py-4 ">
      <video
        src="https://res.cloudinary.com/dx0kyrggg/video/upload/v1699460136/These_are_Our_Values_UW-Madison_commercial_n3bahb.mp4"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="flex items-center gap-2 translate-x-[-10px]  md:translate-y-3 translate-y-[-50px]">
        <Image src={mysa} alt="Picture of the author" width={80} height={80} />
        <Image
          className="rounded-full"
          src={namsa}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>

      <h1 className="text-border-white text-border-size-1 text-black md:text-[100px] md:my-6  font-extrabold text-4xl md:translate-y-0 translate-y-[-60px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        MSF 23'
      </h1>

      {/* details */}
      <div className="flex items-center justify-center md:gap-5 gap-2 md:translate-y-0 translate-y-[-60px]">
        <h1 className="text-sm font-extrabold text-white text-border-white text-border-size-1 md:text-2xl ">
          UW-Madison
        </h1>
        <div className="inline-block h-[30px]  w-0.5 self-stretch bg-slate-600 opacity-100 dark:opacity-50"></div>
        <div className="flex items-center gap-1 md:gap-3 ">
          <h1 className="text-sm font-extrabold text-white text-border-white text-border-size-1 md:text-2xl ">
            11-12
          </h1>
          <h1 className="text-sm font-extrabold text-black text-border-white text-border-size-1 md:text-2xl">
            Nov
          </h1>
        </div>
        <div className="inline-block h-[30px] w-0.5 self-stretch bg-slate-600  opacity-100 dark:opacity-50"></div>
        <div className="flex items-center gap-1 md:gap-3">
          <h1 className="text-sm font-extrabold text-white text-border-white text-border-size-1 md:text-2xl">
            15
          </h1>
          <h1 className="text-sm font-extrabold text-black text-border-white text-border-size-1 md:text-2xl">
            Universities
          </h1>
        </div>
      </div>
      {/* display the countdown */}
      <div className="flex flex-col">
        {/* numbers */}
        <div className="grid grid-cols-4 text-center text-border-white text-border-size-1 text-black font-extrabold text-3xl md:translate-y-0 translate-y-[-60px] min-w-[250px]">
          <p className="text-rose-600">{days}</p>
          <p>{hours}</p>
          <p>{minutes}</p>
          <p>{seconds}</p>
        </div>

        {/* stats */}
        <div className="grid grid-cols-4 text-center text-border-white text-border-size-1 text-black  font-extrabold text-xs md:translate-y-0 translate-y-[-60px] min-w-[250px]">
          <p>DAY</p>
          <p>HRS</p>
          <p>MIN</p>
          <p>SEC</p>
        </div>
      </div>
      <Button className="fixed bottom-8" variant="outline">
        <Link href="/fixtures">View fixtures</Link>
      </Button>
    </main>
  );
}
