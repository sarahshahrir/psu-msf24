"use client";

import React from "react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useRecoilState } from "recoil";
import { sportState } from "@/components/atoms";
import { BiCrown } from "react-icons/bi";
import { Transition } from "@headlessui/react";

interface Props {
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
  score1?: string;
  score2?: string;
  score3?: string;
  winner?: number;
}
export const Matches = ({
  team1,
  team2,
  date,
  time,
  venue,
  score1,
  score2,
  score3,
  winner,
}: Props) => {
  const [sport, setSport] = useRecoilState(sportState);
  const [showScore, setShowScore] = useState(false);
  const [hasScore, setHasScore] = useState(false);

  // input of score1 is in format "1-2"
  // split the string into an array of strings
  let teamA_score1;
  let teamB_score1;
  let scoreArray = [];

  if (score1) {
    const score1Array = score1?.split("-");
    teamA_score1 = score1Array[0];
    teamB_score1 = score1Array[1];
    scoreArray.push([teamA_score1, teamB_score1]);
  }

  let teamA_score2;
  let teamB_score2;

  if (score2) {
    const score2Array = score2?.split("-");
    teamA_score2 = score2Array[0];
    teamB_score2 = score2Array[1];
    scoreArray.push([teamA_score2, teamB_score2]);
  }

  let teamA_score3;
  let teamB_score3;

  if (score3) {
    const score3Array = score3?.split("-");
    teamA_score3 = score3Array[0];
    teamB_score3 = score3Array[1];
    scoreArray.push([teamA_score3, teamB_score3]);
  }

  // append all the scores into an array

  return (
    <div
      onClick={() => {
        // set the state for 3 second only and set it back to false
        // if sport is football or basketball, show the score
        // if sport is badminton or volleyball, show the score only if there is a score

        if (
          (sport == "Badminton" || sport == "Volleyball") &&
          scoreArray.length > 0
        ) {
          setShowScore(!showScore);
        }

        setTimeout(() => {
          setShowScore(false);
        }, 2500);
      }}
      className="relative p-4 border h-[90px] border-slate-400 items-center min-w-[320px] rounded-md grid grid-cols-3 gap-3 mb-4"
    >
      {/* Team */}

      {score1 ? (
        <div className="flex flex-col gap-1 min-w-[140px] col-span-2 text-sm">
          <div
            className={`flex items-center ${
              sport == "Football" || sport == "Basketball"
                ? "justify-between"
                : "gap-2"
            }`}
          >
            <p className={`${sport == "Sukaneka" && "truncate max-w-[170px]"}`}>
              {team1}
            </p>
            {(sport == "Volleyball" || sport == "Badminton") && winner == 1 && (
              <BiCrown className="w-4 h-4 text-yellow-600 animate-pulse" />
            )}
            {(sport == "Football" || sport == "Basketball") && (
              <p className={`mr-2 ${winner == 1 && "font-bold"} `}>
                {teamA_score1}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className={`${sport == "Sukaneka" && "truncate max-w-[170px]"}`}>
              {team2}
            </p>
            {(sport == "Volleyball" || sport == "Badminton") && winner == 2 && (
              <BiCrown className="w-4 h-4 text-yellow-600 animate-pulse" />
            )}
            {(sport == "Football" || sport == "Basketball") && (
              <p className={`mr-2 ${winner == 2 && "font-bold"} `}>
                {teamB_score1}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 min-w-[140px] col-span-2 text-sm">
          <p className={`${sport == "Sukaneka" && "truncate max-w-[170px]"}`}>
            {team1}
          </p>
          <p className={`${sport == "Sukaneka" && "truncate max-w-[170px]"}`}>
            {team2}
          </p>
        </div>
      )}

      {/* Separator */}
      <Separator
        orientation="vertical"
        className="absolute top-0 h-10 translate-y-6 right-[114px] bg-slate-500"
      />

      {/* Date */}
      {showScore ? (
        <Transition
          appear={true}
          show={showScore}
          enter="transition-opacity  ease-linear duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity  ease-linear duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex items-center justify-center gap-2 ease-in-out ">
            {scoreArray.map((score, index) => (
              <div key={index} className="flex flex-col text-sm">
                <p class={`${winner == 1 && "font-bold"}`}>{score[0]}</p>
                <p class={`${winner == 2 && "font-bold"}`}>{score[1]}</p>
              </div>
            ))}
          </div>
        </Transition>
      ) : (
        <div className="flex flex-col items-center justify-center text-xs font-semibold text-center whitespace-nowrap">
          <div>
            {date}, {time}
          </div>
          <div>{venue}</div>
        </div>
      )}
    </div>
  );
};
