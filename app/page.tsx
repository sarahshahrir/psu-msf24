import Image from "next/image";
import mysa from "@/public/mysa.png";
import namsa from "@/public/namsa.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
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
      <div className="flex items-center gap-2 translate-x-[-10px]  md:translate-y-3 translate-y-[-40px]">
        <Image src={mysa} alt="Picture of the author" width={80} height={80} />
        <Image
          className="rounded-full"
          src={namsa}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>

      <h1 className="text-border-white text-border-size-1 text-black md:text-[100px] font-extrabold text-6xl md:translate-y-0 translate-y-[-60px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        MSF 23'
      </h1>

      {/* details */}
      <div className="flex items-center justify-center md:gap-5 gap-2 md:translate-y-0 translate-y-[-60px]">
        <h1 className="text-border-white text-border-size-1 text-white text-sm md:text-2xl font-extrabold ">
          UW-Madison
        </h1>
        <div className="inline-block h-[30px]  w-0.5 self-stretch bg-slate-600 opacity-100 dark:opacity-50"></div>
        <div className="flex items-center md:gap-3 gap-1 ">
          <h1 className="text-border-white text-border-size-1 text-white text-sm md:text-2xl font-extrabold ">
            11-12
          </h1>
          <h1 className="text-border-white text-border-size-1 text-black text-sm md:text-2xl font-extrabold">
            Nov
          </h1>
        </div>
        <div className="inline-block h-[30px] w-0.5 self-stretch bg-slate-600  opacity-100 dark:opacity-50"></div>
        <div className="flex items-center md:gap-3 gap-1">
          <h1 className="text-border-white text-border-size-1 text-white text-sm md:text-2xl font-extrabold">
            15
          </h1>
          <h1 className="text-border-white text-border-size-1 text-black text-sm md:text-2xl font-extrabold">
            Universities
          </h1>
        </div>
      </div>

      <Button className="fixed bottom-12" variant="outline">
        <Link href="/fixtures">View fixtures</Link>
      </Button>
    </main>
  );
}
