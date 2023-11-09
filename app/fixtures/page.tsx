import Image from "next/image";
import mysa from "@/public/mysa.png";
import namsa from "@/public/namsa.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/Footer";
import { Matches } from "@/components/Matches";
import { Standings } from "@/components/Standings";
import { Brackets } from "@/components/Brackets";
import { walkOverData } from "@/components/dummy";

const teams = ["UW-Madison", "UW-Milwaukee", "UW-Whitewater", "UW-Oshkosh"];
const scores = ["11-12", "10-13", "12-11", "13-10"];
const index = ["1", "2", "3", "4"];
export default function Fixture() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-6 px-4 py-8 md:p-24 ">
      <div className="flex items-center gap-2 translate-x-[-10px] translate-y-3">
        <Image src={mysa} alt="Picture of the author" width={60} height={60} />
        <h1 className="text-border-white text-border-size-1 text-black md:text-[100px] font-extrabold text-3xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          MSF 23'
        </h1>
        <Image
          className="rounded-full"
          src={namsa}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <Matches team1="aaa" team2="bbb" date="Nov 1" time="8:00 AM" />
      <Standings title="Group B" teams={teams} scores={scores} nums={index} />
      <Brackets data={walkOverData} />
      <Footer />
    </main>
  );
}
