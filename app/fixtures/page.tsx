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
import {
  footballData,
  badmintonData,
  basketballData,
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
    "Group A": [
      [
        "MySA Badgers FC",
        "Ngauman Singa PennState (NSP)",
        "Illinois",
        "PMX FC",
      ],
      ["1-0-0", "1-0-0", "0-0-1", "0-0-1"],
    ],
    "Group B": [
      ["Ola Bola", "Gophers Cyclones FC", "Default Name"],
      ["0-0-0", "0-0-0", "0-0-0"],
    ],
  },
  Volleyball: {
    // every array represent a group and its point or score
    Teams: [
      ["Cendol VB", "Illinois", "OSU Buckeyes", "Free Agent 1", "Free Agent 2"],
      ["0-0", "0-0", "0-0", "0-0", "0-0"],
    ],
  },
  Badminton: {
    // every array represent a group and its point or score
    "Group A": [
      [
        "H. W. Woo & A. Daniel",
        "J. Goh & J. Y. Tan",
        "Aedan & JJ",
        "Fiena & D. Suhaimi",
      ],
      ["1-0", "1-0", "0-0", "0-0"],
    ],
    "Group B": [
      [
        "M.N. Azman & S. Hisham",
        "Taqio & M. N. Sharull",
        "Daksheshkaran & M. I. Ispandi",
        "E. Victor & N. Razi",
      ],
      ["1-0", "1-0", "0-0", "0-0"],
    ],
    "Group C": [
      [
        "D. Hazeem & J. Yao",
        "A. Nadzri & A. Azman",
        "M. Naziem & P. D. Iskandar",
        "M. H. Mohamad & K. Mustafar",
      ],
      ["1-0", "1-0", "0-0", "0-0"],
    ],
    "Group D": [
      [
        "H. E. Razif & J. Jesmani",
        "A. Chong & J. W. Chong",
        "W. A. Anaqi & Fikri",
        "I. E. Ayob & T. Qistina",
      ],
      ["1-0", "1-0", "0-0", "0-0"],
    ],
  },
  Basketball: {
    // every array represent a group and its point or score
    "Group A": [
      ["UW Badgers", "Swish Kebabs", "Free Agents", "Powerpuff Mojos"],
      ["0-0", "0-0", "0-0", "0-0"],
    ],
    "Group B": [
      ["Penn State", "OSU Buckeyes", "Illinois"],
      ["0-0", "0-0", "0-0"],
    ],
  },
  Sukaneka: {
    // every array represent a group and its point or score
    // every array represent a group and its point or score
    Dodgeball: [
      ["Team A", "Team B", "Team C", "Team D"],
      ["0-0", "0-0", "0-0", "0-0"],
    ],
    "Tarik Tali": [
      ["Team A", "Team B", "Team C", "Team D"],
      ["0-0", "0-0", "0-0", "0-0"],
    ],
    "Galah Panjang": [
      [
        "Team A1",
        "Team B1",
        "Team C1",
        "Team D1",
        "Team A2",
        "Team B2",
        "Team C2",
        "Team D2",
      ],
      ["0-0", "0-0", "0-0", "0-0", "0-0", "0-0", "0-0", "0-0"],
    ],
  },
};

const matchDetails: ObjectType = {
  // After group is the score
  // After score is who won, 0 is draw, 1 is team1, 2 is team2

  Football: [
    ["MySA Badgers FC", "PMX FC", "Nov 11", "9:00 AM", "Group", "3-0", "1"],
    ["Illinois", "NSP", "Nov 11", "9:40 AM", "Group", "0-2", "2"],
    ["Ola Bola Squad", "Gophers Cyclones FC", "Nov 11", "10:20 AM", "Group"],
    ["MySA Badgers FC", "Illinois", "Nov 11", "11:00 AM", "Group"],
    ["PMX FC", "NSP", "Nov 11", "11:40 AM", "Group"],
    ["Ola Bola Squad", "Default", "Nov 11", "12:20 PM", "Group"],
    ["MySA Badgers FC", "NSP", "Nov 11", "1:00 PM", "Group"],
    ["PMX FC", "Illinois", "Nov 11", "1:40 PM", "Group"],
    ["Gophers Cyclones FC", "Default", "Nov 11", "2:20 PM", "Group"],
    ["Winner Group A", "Runner-up Group B", "Nov 11", "3:00 PM", "Playoffs"],
    ["Winner Group B", "Runner-up Group A", "Nov 11", "3:40 PM", "Playoffs"],
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
    [
      "H. W. Woo & A. Daniel",
      "Aedan & JJ",
      "Nov 11",
      "10:00 AM",
      "Group, Court 1",
      "NA-NA",
      "NA-NA",
      "1",
    ],
    [
      "Fiena & D. Suhaimi",
      "J. Goh & J. Y. Tan",
      "Nov 11",
      "10:00 AM",
      "Group, Court 2",
      "NA-NA",
      "NA-NA",
      "2",
    ],
    [
      "M.N. Azman & S. Hisham",
      "Daksheshkaran & M. I. Ispandi",
      "Nov 11",
      "10:00 AM",
      "Group, Court 3",
      "NA-NA",
      "NA-NA",
      "1",
    ],
    [
      "E. Victor & N. Razi",
      "Taqio & M. N. Sharull",
      "Nov 11",
      "10:00 AM",
      "Group, Court 4",
      "NA-NA",
      "NA-NA",
      "2",
    ],
    [
      "D. Hazeem & J. Yao",
      "M. Haziem & P. D. Iskandar",
      "Nov 11",
      "10:00 AM",
      "Group, Court 5",
      "NA-NA",
      "NA-NA",
      "1",
    ],
    [
      "A. Nadzri & A. Azman",
      "M. H. Mohamad & K. Mustafar",
      "Nov 11",
      "10:00 AM",
      "Group, Court 6",
      "NA-NA",
      "NA-NA",
      "1",
    ],
    [
      "H. E. Razif & J. Jesmani",
      "W. A. Anaqi & Fikri",
      "Nov 11",
      "10:00 AM",
      "Group, Court 7",
      "NA-NA",
      "NA-NA",
      "1",
    ],
    [
      "A. Chong & J. W. Chong",
      "I. E. Ayob & T. Qistina",
      "Nov 11",
      "10:00 AM",
      "Group, Court 8",
      "NA-NA",
      "NA-NA",
      "1",
    ],
    [
      "Han Wei Woo & Afiq Daniel",
      "Fiena & D. Suhaimi",
      "Nov 11",
      "10:30 AM",
      "Group, Court 1",
    ],
    [
      "Aedan & JJ",
      "J. Goh & J. Y. Tan",
      "Nov 11",
      "10:30 AM",
      "Group, Court 2",
    ],
    [
      "M.N. Azman & S. Hisham",
      "E. Victor & N. Razi",
      "Nov 11",
      "10:30 AM",
      "Group, Court 3",
    ],
    [
      "Daksheshkaran & M. I. Ispandi",
      "Taqio & M. N. Sharull",
      "Nov 11",
      "10:30 AM",
      "Group, Court 4",
    ],
    [
      "D. Hazeem & J. Yao",
      "A. Nadzri & A. Azman",
      "Nov 11",
      "10:30 AM",
      "Group, Court 5",
    ],
    [
      "M. Haziem & P. D. Iskandar",
      "M. H. Mohamad & K. Mustafar",
      "Nov 11",
      "10:30 AM",
      "Group, Court 6",
    ],
    [
      "H. E. Razif & J. Jesmani",
      "A. Chong & J. W. Chong",
      "Nov 11",
      "10:30 AM",
      "Group, Court 7",
    ],
    [
      "W. A. Anaqi & Fikri",
      "I. E. Ayob & T. Qistina",
      "Nov 11",
      "10:30 AM",
      "Group, Court 8",
    ],
    [
      "Han Wei Woo & Afiq Daniel",
      "J. Goh & J. Y. Tan",
      "Nov 11",
      "11:00 AM",
      "Group, Court 1",
    ],
    [
      "Aedan & JJ",
      "Fiena & D. Suhaimi",
      "Nov 11",
      "11:00 AM",
      "Group, Court 2",
    ],
    [
      "M.N. Azman & S. Hisham",
      "Taqio & M. N. Sharull",
      "Nov 11",
      "11:00 AM",
      "Group, Court 3",
    ],
    [
      "Daksheshkaran & M. I. Ispandi",
      "E. Victor & N. Razi",
      "Nov 11",
      "11:00 AM",
      "Group, Court 4",
    ],
    [
      "D. Hazeem & J. Yao",
      "M. H. Mohamad & K. Mustafar",
      "Nov 11",
      "11:00 AM",
      "Group, Court 5",
    ],
    [
      "M. Haziem & P. D. Iskandar",
      "A. Nadzri & A. Azman",
      "Nov 11",
      "11:00 AM",
      "Group, Court 6",
    ],
    [
      "H. E. Razif & J. Jesmani",
      "I. E. Ayob & T. Qistina",
      "Nov 11",
      "11:00 AM",
      "Group, Court 7",
    ],
    [
      "W. A. Anaqi & Fikri",
      "A. Chong & J. W. Chong",
      "Nov 11",
      "11:00 AM",
      "Group, Court 8",
    ],

    [
      "Winner Group A",
      "Runner-up Group B",
      "Nov 11",
      "3:00 PM",
      "Quarter, Court 1",
    ],
    [
      "Winner Group B",
      "Runner-up Group A",
      "Nov 11",
      "3:00 PM",
      "Quarter, Court 2",
    ],
    [
      "Winner Group C",
      "Runner-up Group D",
      "Nov 11",
      "3:00 PM",
      "Quarter, Court 3",
    ],
    [
      "Winner Group D",
      "Runner-up Group C",
      "Nov 11",
      "3:00 PM",
      "Quarter, Court 4",
    ],

    ["TBD", "TBD", "Nov 11", "3:50 PM", "Semis, Court 1"],
    ["TBD", "TBD", "Nov 11", "3:50 PM", "Semis, Court 2"],
    ["TBD", "TBD", "Nov 11", "4:40 PM", "3rd & 4th, Court 2"],
    ["TBD", "TBD", "Nov 11", "4:40 PM", "Final, Court 1"],
  ],
  Basketball: [
    ["UW Badgers", "Swish Kebabs", "Nov 11", "12:00 PM", "Group, Court 7"],
    ["Penn State", "OSU Buckeyes", "Nov 11", "12:00 PM", "Group, Court 8"],
    ["Free Agent", "Powerpuff Mojos", "Nov 11", "12:30 PM", "Group, Court 7"],
    ["UW Badgers", "Free Agent", "Nov 11", "1:00 PM", "Group, Court 7"],
    ["Illinois", "Penn State", "Nov 11", "1:00 PM", "Group, Court 8"],
    ["Swish Kebabs", "Powerpuff Mojos", "Nov 11", "1:30 PM", "Group, Court 7"],
    ["UW Badgers", "Powerpuff Mojos", "Nov 11", "2:00 PM", "Group, Court 7"],
    ["Illinois", "OSU Buckeyes", "Nov 11", "2:00 PM", "Group, Court 8"],
    ["Swish Kebabs", "Free Agent", "Nov 11", "2:00 PM", "Group, Court 7"],
    [
      "Winner Group A",
      "Runner-up Group B",
      "Nov 11",
      "5:30 PM",
      "Semis, Court 7",
    ],
    [
      "Winner Group B",
      "Runner-up Group A",
      "Nov 11",
      "5:30 PM",
      "Semis, Court 8",
    ],
    ["TBD", "TBD", "Nov 11", "7:00 PM", "3rd & 4th, Court 7"],
    ["TBD", "TBD", "Nov 11", "7:00 PM", "Finals, Court 8"],
  ],
  Sukaneka: [
    [
      "Team A (Dodgeball)",
      "Team B (Dodgeball)",
      "Nov 12",
      "8:30 AM",
      "Match 1, Court 5",
    ],
    [
      "Team A (Tarik Tali)",
      "Team B (Tarik Tali)",
      "Nov 12",
      "8:30 AM",
      "Match 1, Court 6",
    ],
    [
      "Team A1 (Galah Panjang)",
      "Team B1 (Galah Panjang)",
      "Nov 12",
      "8:30 AM",
      "Match 1, Court 7",
    ],
    [
      "Team C (Dodgeball)",
      "Team D (Dodgeball)",
      "Nov 12",
      "8:50 AM",
      "Match 2, Court 5",
    ],
    [
      "Team C (Tarik Tali)",
      "Team D (Tarik Tali)",
      "Nov 12",
      "8:50 AM",
      "Match 2, Court 6",
    ],
    [
      "Team A2 (Galah Panjang)",
      "Team B2 (Galah Panjang)",
      "Nov 12",
      "8:50 AM",
      "Match 2, Court 7",
    ],
    [
      "Loser 1 (Dodgeball)",
      "Loser 2 (Dodgeball)",
      "Nov 12",
      "9:10 AM",
      "3rd & 4th, Court 5",
    ],
    [
      "Loser 1 (Tarik Tali)",
      "Loser 2 (Tarik Tali)",
      "Nov 12",
      "9:10 AM",
      "3rd & 4th, Court 6",
    ],
    [
      "Team C1 (Galah Panjang)",
      "Team D1 (Galah Panjang)",
      "Nov 12",
      "9:10 AM",
      "Match 3, Court 7",
    ],
    [
      "Winner 1 (Dodgeball)",
      "Winner 2 (Dodgeball)",
      "Nov 12",
      "9:30 AM",
      "Final, Court 5",
    ],

    [
      "Winner 1 (Tarik Tali)",
      "Winner 2 (Tarik Tali)",
      "Nov 12",
      "9:30 AM",
      "Final, Court 6",
    ],

    [
      "Team C2 (Galah Panjang)",
      "Team D2 (Galah Panjang)",
      "Nov 12",
      "9:30 AM",
      "Match 4, Court 7",
    ],
    [
      "Winner Match-1 (Galah Panjang)",
      "Winner Match-2 (Galah Panjang)",
      "Nov 12",
      "9:50 AM",
      "Semi 1, Court 5",
    ],
    [
      "Winner Match-3 (Galah Panjang)",
      "Winner Match-4 (Galah Panjang)",
      "Nov 12",
      "9:50 AM",
      "Semi 2, Court 6",
    ],
    [
      "Loser Semi 1 (Galah Panjang)",
      "Loser Semi 2 (Galah Panjang)",
      "Nov 12",
      "10:10 AM",
      "3rd & 4th, Court 6",
    ],
    [
      "Winner Semi 1 (Galah Panjang)",
      "Winner Semi 2 (Galah Panjang)",
      "Nov 12",
      "10:10 AM",
      "Final, Court 7",
    ],
  ],
};

export default function Fixture() {
  const [sport, setSport] = useRecoilState(sportState);
  return (
    <main className="flex flex-col items-center min-h-screen gap-6 px-4 py-8 pb-32 md:p-24 ">
      <div className="flex items-center gap-2 translate-x-[-10px] translate-y-3">
        <Image src={mysa} alt="Picture of the author" width={60} height={60} />
        <h1 className="text-border-white text-border-size-1 text-black md:text-[40px] font-extrabold text-3xl">
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
          {sport == "Badminton" && <Brackets data={badmintonData} />}
          {sport == "Basketball" && <Brackets data={basketballData} />}
          {sport == "Football" && <Brackets data={footballData} />}
        </TabsContent>
      </Tabs>

      {/* loop through matchDetails and output Matches component */}

      <Footer />
    </main>
  );
}
