"use client";

import Image from "next/image";
import msc from "@/public/msc.png";
import namsa from "@/public/namsa.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/Footer";
import { Matches } from "@/components/Matches";
import { Standings } from "@/components/Standings";
import { Brackets } from "@/components/Brackets";
import {
  footballData,
  badmintonMData,
  badmintonWData,
  basketballData,
  volleyballData
} from "@/components/dummy";
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

interface SportGroup {
  [groupName: string]: Array<Array<string>>;
}

interface Group {
  [group: string]: SportGroup;
}

const standingDetails: Group = {
  Football: {
    // every array represent a group and its point or score
    // [Team1, Teams2, Team3], ["<x-y-z>", "<x-y-z>", "<x-y-z>"]
    "Group A": [
      [
        "Default Name",
        "NSP United",
        "Wisconsin"
      ],
      ["0--", "1--", "1-0-"],
    ],
    "Group B": [
      ["NSP City", "ARBB FC", "PUI PUI FC"],
      ["1--", "0--", "--"],
    ],
  },
  Volleyball: {
    // every array represent a group and its point or score
    "Group A": [
      ["Cendol VB", "Penn State C", "Denmarks National Mixed", "Free Agent"],
      ["1-1", "0-", "0-", "1-0"],
    ],
    "Group B": [
      ["Penn State B", "Spartan Blues", "The Nuthouse", "Kedutaan dan Konsular"],
      ["1-1", "0-", "1-0", "0-"],
    ],
  },
  "Badminton: Men's": {
    // every array represent a group and its point or score
    "Group A": [
      [
        "Danish & Jinyao",
        "Hadwan & Amir",
        "En. Syahrul & En. Eshraq",
      ],
      ["1-1", "0-", "0-"],
    ],
    "Group B": [
      [
        "Nabil & Ralf",
        "Izzul & Jason",
        "En. Hatmi & En. Yahya",
      ],
      ["1-1", "0-", "0-"],
    ],
    "Group C": [
      [
        "Affiq & Adib",
        "Shahrunizam & Khairil",
        "Adam & Danial"
      ],
      ["1-", "1-", "0-0"],
    ],
    "Group D": [
      [
        "Adam & Izzral",
        "Khaiyyum & Eirfann",
        "Airil & Akmal",
      ],
      ["0-", "1-", "-"],
    ],
  },
  Basketball: {
    // every array represent a group and its point or score
    // [Team1, Team2, Team3], ["x-y", "x-y", "x-y"]
    "Group A": [
      ["Wisconsin", "Penn State", "Ben 10", "Santai Illini"],
      ["1-1", "1-0", "0-0", "0-0"], // Ben 10 Santai Illini 6-6
    ],
    "Group B": [
      ["Bayang Muslihat", "The Nuthouse", "Asam Pedas Pollock"],
      ["0-", "1-", "1-0"],
    ],
  },
  "Badminton: Women's": {
    // every array represent a group and its point or score
    // every array represent a group and its point or score
    "Group A": [
      ["Athilah & Nabilah", "Sofea & Sorfeena", "Dania & Angelina", "Farah & Syazlyana"],
      ["1-1", "0-1", "1-0", "0-0"],
    ],
    "Group B": [
      ["Nadia & Nadia", "Farhah & Izza", "Fazlina & Farzanah", "Farhanah & Najwa"],
      ["0-", "1-", "0-", "1-"],
    ],
  },
};

const matchDetails: ObjectType = {
  // After group is the score
  // After score is who won, 0 is draw, 1 is team1, 2 is team2

  // [Team1, Team2, Date, Time, MatchType, Results <5-4>, WinningTeam]
  Football: [
    ["NSP United", "Default Name", "Nov 16", "8:30 AM", "Group", "-", ""],
    ["NSP City", "PUI PUI FC", "Nov 16", "9:05 AM", "Group", "-", ""],
    [
      "NSP United",
      "Wisconsin",
      "Nov 16",
      "9:40 AM",
      "Group",
      "1-0",
      "1",
    ],
    ["NSP City", "ARBB FC", "Nov 16", "10:05 AM", "Group", "5-0", "1"],
    ["Default Name", "Wisconsin", "Nov 16", "10:40 AM", "Group", "0-1", "2"],
    ["ARBB FC", "PUI PUI FC", "Nov 16", "11:05 AM", "Group", "-", ""],
    ["", "", "Nov 16", "Break", "11:40 AM - 12:30 PM", "-", ""],
    ["TBD", "TBD", "Nov 16", "12:30 PM", "Semi Final 1", "-", ""],
    ["TBD", "TBD", "Nov 16", "1:15 PM", "Semi Final 2", "-", ""],
    ["TBD", "TBD", "Nov 16", "2:00 PM", "3rd & 4th", "-", ""],
    ["TBD", "TBD", "Nov 16", "2:40 PM", "Final", "-", ""],
  ],

  // [Team1, Team2, Date, Time, Court, Score, WinningTeam(1/2)]
  Basketball: [
    ["Ben 10", "Wisconsin", "Nov 11", "8:30 AM", "Group, Court A", "10-23", "2"],
    [
      "Penn State",
      "Santai Illini",
      "Nov 11",
      "8:30 AM",
      "Group, Court B",
      "21-11",
      "1",
    ],
    ["Bayang Muslihat", "Asam Pedas Pollock", "Nov 11", "9:05 AM", "Group, Court A", "6-18", "2"],
    [
      "Santai Illini",
      "Ben 10",
      "Nov 11",
      "9:05 AM",
      "Group, Court B",
      "17-17", // TIE!!
      "",
    ],
    ["Penn State", "Wisconsin", "Nov 11", "9:40 AM", "Group, Court A", "20-25", "2"],
    [
      "Asam Pedas Pollock",
      "The Nuthouse",
      "Nov 11",
      "9:40 AM",
      "Group, Court B",
      "14-52",
      "2",
    ],
    [
      "Santai Illini",
      "Wisconsin",
      "Nov 11",
      "10:05 AM",
      "Group, Court 5",
      "21-23",
      "2",
    ],
    [
      "Bayang Muslihat",
      "The Nuthouse",
      "Nov 11",
      "10:05 AM",
      "Group, Court B",
      "-",
      "",
    ],
    [
      "Penn State",
      "Ben 10",
      "Nov 11",
      "10:40 AM",
      "Group, Court A",
      "-",
      "",
    ],
    ["", "", "Nov 11", "Break", "11:05 AM - 11:25 AM", "-", ""],
    ["TBD", "TBD", "Nov 11", "11:25 AM", "Semi 1, Court A", "-", ""],
    ["TBD", "TBD", "Nov 11", "11:25 AM", "Semi 2, Court B", "-", ""],
    ["", "", "Nov 11", "Break", "12:10 PM - 1:00 PM", "-", ""],
    ["TBD", "TBD", "Nov 11", "1:00 PM", "3rd & 4th, Court A", "-", ""],
    ["TBD", "TBD", "Nov 11", "1:55 PM", "Final, Court A", "-", ""],
  ],
  "Badminton: Men's": [
    [
      "Hadwan & Amir",
      "Danish & Jinyao",
      "Nov 11",
      "8:30 AM",
      "Group, Court A",
      "12-30",
      "2",
    ],
    [
      "Izzul & Jason",
      "Nabil & Ralf",
      "Nov 11",
      "8:50 AM",
      "Group, Court A",
      "Forfeit-Win",
      "2",
    ],
    [
      "Affiq & Adib",
      "Adib & Danial",
      "Nov 11",
      "9:10 AM",
      "Group, Court A",
      "30-18",
      "1",
    ],
    [
      "Adam & Izzral",
      "Khayyum & Eirfann",
      "Nov 11",
      "9:30 AM",
      "Group, Court B",
      "21-30",
      "2",
    ],
    [
      "Danish & Jinyao",
      "En. Syahrul & En. Eshraq",
      "Nov 11",
      "9:50 AM",
      "Group, Court A",
      "30-27",
      "1",
    ],
    [
      "Nabil & Ralf",
      "En. Hatmi & En. Yahya",
      "Nov 11",
      "10:10 AM",
      "Group, Court A",
      "30-27",
      "1",
    ],
    [
      "Adam & Danial",
      "Shaharunizam & Khairil",
      "Nov 11",
      "10:30 AM",
      "Group, Court A",
      "10-30",
      "2",
    ],
    [
      "Khayyum & Eirfann",
      "Airil & Akmal",
      "Nov 11",
      "10:50 AM",
      "Group, Court A",
      "NA-NA",
      "",
    ],
    [
      "Hadwan & Amir",
      "En. Syahrul & En. Eshraq",
      "Nov 11",
      "11:10 AM",
      "Group, Court A",
      "NA-NA",
      "",
    ],
    [
      "",
      "",
      "Nov 11",
      "Break",
      "11:30 AM - 12:30 PM",
      "NA-NA",
      "",
    ],
    [
      "Izzul & Jason",
      "En. Hatmi & En. Yahya",
      "Nov 11",
      "12:30 PM",
      "Group, Court A",
      "NA-NA",
      "",
    ],
    [
      "Affiq & Adib",
      "Shaharuniza, & Khairil",
      "Nov 11",
      "12:50 PM",
      "Group, Court A",
      "NA-NA",
      "",
    ],
    [
      "Adam & Izzral",
      "Airil & Akmal",
      "Nov 11",
      "1:10 PM",
      "Group, Court A",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "1:30 PM",
      "QF 1, Court A",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ], 
    [
      "TBD",
      "TBD",
      "Nov 11",
      "1:30 PM",
      "QF 2, Court B",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "2:00 PM",
      "QF 3, Court A",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "2:00 PM",
      "QF 4, Court B",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "2:30 PM",
      "Semi 1, Court A",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "3:00 PM",
      "Semi 2, Court A",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "3:30 PM",
      "3rd & 4th, Court A",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "4:00 PM",
      "Final, Court A",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
  ],
  Volleyball: [
    [
      "Penn State C",
      "Cendol VB",
      "Nov 11",
      "9:00 AM",
      "Group, Court 1",
      "20-25",
      "2",
    ],
    [
      "Penn State B",
      "Spartan Blues",
      "Nov 11",
      "9:00 AM",
      "Group, Court 2",
      "25-17",
      "1",
    ],
    [
      "Denmarks National Mixed",
      "Free Agent",
      "Nov 11",
      "9:30 AM",
      "Group, Court 1",
      "17-25",
      "2",
    ],
    [
      "The Nuthouse",
      "Kedutaan dan Konsular",
      "Nov 11",
      "9:30 AM",
      "Group, Court 2",
      "25-22",
      "1",
    ],
    [
      "Penn State C",
      "Free Agent",
      "Nov 11",
      "10:00 AM",
      "Group, Court 1",
      "25-6",
      "1",
    ],
    [
      "Penn State B",
      "The Nuthouse",
      "Nov 11",
      "10:00 AM",
      "Group, Court 2",
      "25-19",
      "1",
    ],
    [
      "Cendol VB",
      "Denmarks National Mixed",
      "Nov 11",
      "10:30 AM",
      "Group, Court 1",
      "25-6",
      "1",
    ],
    [
      "Spartan Blues",
      "Kedutaan dan Konsular",
      "Nov 11",
      "10:30 AM",
      "Group, Court 2",
      "NA-NA",
      "",
    ],
    [
      "Penn State C",
      "Denmarks National Mixed",
      "Nov 11",
      "11:00 AM",
      "Group, Court 1",
      "NA-NA",
      "",
    ],
    [
      "Penn State B",
      "Kedutaan dan Konsular",
      "Nov 11",
      "11:00 AM",
      "Group, Court 2",
      "NA-NA",
      "",
    ],
    [
      "Cendol VB",
      "Free Agent",
      "Nov 11",
      "11:30 AM",
      "Group, Court 1",
      "NA-NA",
      "",
    ],
    [
      "Spartan Blues",
      "The Nuthouse",
      "Nov 11",
      "11:30 AM",
      "Group, Court 2",
      "NA-NA",
      "",
    ],
    [
      "",
      "",
      "Nov 11",
      "Break",
      "12:00 PM - 1:00 PM",
      "",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "1:00 PM",
      "Semi 1, Court 1",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "2:00 PM",
      "Semi 2, Court 1",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "3:00 PM",
      "3rd & 4th, Court 1",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
    [
      "TBD",
      "TBD",
      "Nov 11",
      "3:00 PM",
      "Final, Court 1",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      "",
    ],
  ],
  "Badminton: Women's": [
    [
      "Farah & Syazlyana",
      "Athilah & Nabilah",
      "Nov 12",
      "8:30 AM",
      "Group, Court B",
      "5-30",
      "2"
    ],
    [
      "Nadia & Nadia",
      "Farhah & Izza",
      "Nov 12",
      "8:50 AM",
      "Group, Court B",
      "25-30",
      "2"
    ],
    [
      "Sofea & Sorfeena",
      "Dania & Angelina",
      "Nov 12",
      "9:10 AM",
      "Group, Court B",
      "29-30",
      "2"
    ],
    [
      "Fazlina & Farzanah",
      "Farhanah & Najwa",
      "Nov 12",
      "9:30 AM",
      "Group, Court B",
      "15-30",
      "2"
    ],
    [
      "Farah & Syazlyana",
      "Sofea & Sorfeena",
      "Nov 12",
      "9:50 AM",
      "Group, Court B",
      "11-30",
      "2"
    ],
    [
      "Nadia & Nadia",
      "Fazlina & Farzanah",
      "Nov 12",
      "10:10 AM",
      "Group, Court B",
      "NA-NA",
      ""
    ],
    [
      "Athliah & Nabilah",
      "Dania & Angelina",
      "Nov 12",
      "10:30 AM",
      "Group, Court B",
      "30-12",
      "1"
    ],
    [
      "Farhah & Izza",
      "Farhanah & Najwa",
      "Nov 12",
      "10:50 AM",
      "Group, Court B",
      "NA-NA",
      ""
    ],
    [
      "Farah & Syazlyana",
      "Dania & Angelina",
      "Nov 12",
      "11:10 AM",
      "Group, Court B",
      "NA-NA",
      ""
    ],
    [
      "",
      "",
      "Nov 12",
      "Break",
      "11:30 AM - 12:30 PM",
      "NA-NA",
      ""
    ],
    [
      "Nadia & Nadia",
      "Farhanah & Najwa",
      "Nov 12",
      "12:30 PM",
      "Group, Court B",
      "NA-NA",
      ""
    ],
    [
      "Athilah & Nabilah",
      "Sofea & Sorfeena",
      "Nov 12",
      "12:50 PM",
      "Group, Court B",
      "NA-NA",
      ""
    ],
    [
      "Farhah & Izza",
      "Fazlina & Farzanah",
      "Nov 12",
      "1:10 PM",
      "Group, Court B",
      "NA-NA",
      ""
    ],
    [
      "TBD",
      "TBD",
      "Nov 12",
      "2:30 PM",
      "Semi 1, Court B",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      ""
    ],
    [
      "TBD",
      "TBD",
      "Nov 12",
      "3:00 PM",
      "Semi 2, Court B",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      ""
    ],
    [
      "TBD",
      "TBD",
      "Nov 12",
      "3:00 PM",
      "3rd & 4th, Court B",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      ""
    ],
    [
      "TBD",
      "TBD",
      "Nov 12",
      "4:00 PM",
      "Final, Court B",
      "NA-NA",
      "NA-NA",
      "NA-NA",
      ""
    ],
  ],
};

export default function Fixture() {
  const [sport, setSport] = useRecoilState(sportState);
  return (
    <main className="flex flex-col items-center min-h-screen gap-6 px-4 py-8 pb-32 md:p-24 ">
      <div className="flex items-center gap-2 translate-x-[-10px] translate-y-3">
        <Image src={msc} alt="Picture of the author" width={60} height={60} />
        <h1 className="text-border-white text-border-size-1 text-black md:text-[40px] font-extrabold text-3xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          MSF 24'
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
          {matchDetails[sport as keyof ObjectType].map((matchDetail, index) => {
            // check the length of the array
            if (matchDetail.length == 7) {
              return (
                <Matches
                  key={index}
                  team1={matchDetail[0]}
                  team2={matchDetail[1]}
                  date={matchDetail[2]}
                  time={matchDetail[3]}
                  venue={matchDetail[4]}
                  score1={matchDetail[5]}
                  winner={matchDetail[6]}
                />
              );
            } else if (matchDetail.length == 8) {
              return (
                <Matches
                  key={index}
                  team1={matchDetail[0]}
                  team2={matchDetail[1]}
                  date={matchDetail[2]}
                  time={matchDetail[3]}
                  venue={matchDetail[4]}
                  score1={matchDetail[5]}
                  score2={matchDetail[6]}
                  winner={matchDetail[7]}
                />
              );
            } else if (matchDetail.length == 9) {
              return (
                <Matches
                  key={index}
                  team1={matchDetail[0]}
                  team2={matchDetail[1]}
                  date={matchDetail[2]}
                  time={matchDetail[3]}
                  venue={matchDetail[4]}
                  score1={matchDetail[5]}
                  score2={matchDetail[6]}
                  score3={matchDetail[7]}
                  winner={matchDetail[8]}
                />
              );
            } else {
              return (
                <Matches
                  key={index}
                  team1={matchDetail[0]}
                  team2={matchDetail[1]}
                  date={matchDetail[2]}
                  time={matchDetail[3]}
                  venue={matchDetail[4]}
                />
              );
            }
          })}
        </TabsContent>
        <TabsContent value="Standings">
          {" "}
          {/* Render all the standings */}
          {Object.entries(standingDetails[sport as keyof ObjectType]).map(
            ([group, matchDetails], index) => (
              <Standings
                key={index}
                title={group}
                teams={matchDetails[0]}
                scores={matchDetails[1]}
              />
            )
          )}
          {sport == "Badminton: Women's" && <Brackets data={badmintonWData} />}
          {sport == "Badminton: Men's" && <Brackets data={badmintonMData} />}
          {sport == "Basketball" && <Brackets data={basketballData} />}
          {sport == "Football" && <Brackets data={footballData} />}
          {sport == "Volleyball" && <Brackets data={volleyballData} />}
        </TabsContent>
      </Tabs>

      {/* loop through matchDetails and output Matches component */}

      <Footer />
    </main>
  );
}
