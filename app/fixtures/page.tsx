"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRecoilState } from "recoil";
import { sportState } from "@/components/atoms";

const teams = ["UW-Madison", "UW-Milwaukee", "UW-Whitewater", "UW-Oshkosh"];
const scores = ["11-12", "10-13", "12-11", "13-10"];
const index = ["1", "2", "3", "4"];

// create a dummy data for match details
// [[team1, team2, date, time, venue]]
// team1 is string, team2 is string, date should be in Nov 1, time should be in 8:00 AM
// everything in stringx

interface ObjectType {
  [key: string]: string[][];
}

const matchDetails: ObjectType = {
  Football: [
    ["MySA Badgers FC", "PMX FC", "Nov 11", "9:00 AM", "Group"],
    ["Illinois", "NSP", "Nov 11", "9:40 AM", "Group"],
    ["Ola Bola Squad", "Gophers Cyclones FC", "Nov 11", "10:20 AM", "Group"],
    ["MySA Badgers FC", "Illinois", "Nov 11", "11:00 AM", "Group"],
    ["PMX FC", "NSP", "Nov 11", "11:40 AM", "Group"],
    ["Ola Bola Squad", "Default", "Nov 11", "12:20 PM", "Group"],
    ["MySA Badgers FC", "NSP", "Nov 11", "1:00 PM", "Group"],
    ["PMX FC", "Illinois", "Nov 11", "1:40 PM", "Group"],
    ["Gophers Cyclones FC", "Default", "Nov 11", "2:20 PM", "Group"],
    ["A1", "B2", "Nov 11", "3:00 PM", "Playoffs"],
    ["B1", "A2", "Nov 11", "3:40 PM", "Playoffs"],
    ["TBD", "TBD", "Nov 11", "4:20 PM", "3rd & 4th"],
    ["TBD", "TBD", "Nov 11", "5:00 PM", "Finals"],
  ],
  Volleyball: [
    ["OSU Buckeyes", "Illinois", "Nov 11", "12:00 PM", "Court 5"],
    ["Free Agent 1", "Free Agent 2", "Nov 11", "12:00 PM", "Court 6"],
    ["Cendol VB", "Illinois", "Nov 11", "12:40 PM", "Court 5"],
    ["OSU Buckeyes", "Free Agent 2", "Nov 11", "12:40 PM", "Court 6"],
    ["Free Agent 2", "Cendol VB", "Nov 11", "1:20 PM", "Court 5"],
    ["OSU Buckeyes", "Free Agent 1", "Nov 11", "1:20 PM", "Court 6"],
    ["Free Agent 1", "Illinois", "Nov 11", "2:00 PM", "Court 5"],
    ["Cendol VB", "OSU Buckeyes", "Nov 11", "5:30 PM", "Court 5"],
    ["Free Agent 1", "Cendol VB", "Nov 11", "6:10 PM", "Court 5"],
    ["Illinois", "Free Agent 2", "Nov 11", "6:10 PM", "Court 6"],
  ],
  Badminton: [
    ["aaa", "bbb", "Nov 1", "8:00 AM", "Court A"],
    ["ccc", "ddd", "Nov 1", "8:00 AM", "Court A"],
  ],
  Basketball: [
    ["UW Badgers", "Swish Kebabs", "Nov 11", "12:00 PM", "Court 5"],
    ["Free Agent 1", "Free Agent 2", "Nov 11", "12:00 PM", "Court 6"],
    ["Cendol VB", "Illinois", "Nov 11", "12:40 PM", "Court 5"],
    ["OSU Buckeyes", "Free Agent 2", "Nov 11", "12:40 PM", "Court 6"],
    ["Free Agent 2", "Cendol VB", "Nov 11", "1:20 PM", "Court 5"],
    ["OSU Buckeyes", "Free Agent 1", "Nov 11", "1:20 PM", "Court 6"],
    ["Free Agent 1", "Illinois", "Nov 11", "2:00 PM", "Court 5"],
    ["Cendol VB", "OSU Buckeyes", "Nov 11", "5:30 PM", "Court 5"],
    ["Free Agent 1", "Cendol VB", "Nov 11", "6:10 PM", "Court 5"],
    ["Illinois", "Free Agent 2", "Nov 11", "6:10 PM", "Court 6"],
    ["Cendol VB", "OSU Buckeyes", "Nov 11", "5:30 PM", "Court 5"],
    ["Free Agent 1", "Cendol VB", "Nov 11", "6:10 PM", "Court 5"],
    ["Illinois", "Free Agent 2", "Nov 11", "6:10 PM", "Court 6"],
  ],
  Sukaneka: [
    ["aaa", "bbb", "Nov 1", "8:00 AM", "Court A"],
    ["ccc", "ddd", "Nov 1", "8:00 AM", "Court A"],
  ],
};

export default function Fixture() {
  const [sport, setSport] = useRecoilState(sportState);
  return (
    <main className="flex flex-col items-center min-h-screen gap-6 px-4 py-8 pb-32 md:p-24 ">
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
      <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        {sport}
      </h1>
      <Tabs defaultValue="Matches" className="w-[320px] justify-center">
        <TabsList className="grid w-[320px] grid-cols-2 mb-4 ">
          <TabsTrigger value="Matches">Matches</TabsTrigger>
          <TabsTrigger value="Standings">Standings</TabsTrigger>
        </TabsList>
        <TabsContent value="Matches">
          {/* loop through matchDetails */}
          {matchDetails[sport as keyof ObjectType].map((matchDetail, index) => (
            <Matches
              key={index}
              team1={matchDetail[0]}
              team2={matchDetail[1]}
              date={matchDetail[2]}
              time={matchDetail[3]}
              venue={matchDetail[4]}
            />
          ))}
        </TabsContent>
        <TabsContent value="Standings">
          {" "}
          <Standings
            title="Group B"
            teams={teams}
            scores={scores}
            nums={index}
          />
          <Brackets data={walkOverData} />
        </TabsContent>
      </Tabs>

      {/* loop through matchDetails and output Matches component */}

      <Footer />
    </main>
  );
}
