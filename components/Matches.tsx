import React from "react";
import { Separator } from "@/components/ui/separator";

interface Props {
  team1: string;
  team2: string;
  date: string;
  time: string;
}
export const Matches = ({ team1, team2, date, time }) => {
  return (
    <div className="relative p-4 border h-[90px] border-slate-400 items-center min-w-[320px] rounded-md grid grid-cols-3 gap-4">
      {/* Team */}

      <div className="flex flex-col gap-1 min-w-[140px] col-span-2">
        <p>{team1}</p>
        <p>{team2}</p>
      </div>
      {/* Separator */}
      <Separator
        orientation="vertical"
        className="absolute top-0 right-28 bg-slate-500 h-10 translate-y-6"
      />

      {/* Date */}
      <di className="flex flex-col text-xs font-semibold text-center items-center justify-center ">
        <p>{date}</p>
        <p>{time}</p>
      </di>
    </div>
  );
};
