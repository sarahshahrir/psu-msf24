import React from "react";
import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
  teams: string[];
  scores: string[];
  goals?: string[];
}

export const Standings = ({ title, teams, scores }: Props) => {
  return (
    <div className="relative border mb-4 border-slate-400 items-center min-w-[320px] flex flex-col  rounded-md ">
      {/* Title */}
      <div className="flex items-center justify-center w-full p-1 text-lg font-bold text-white bg-red-700 flex-center rounded-t-md">
        <p>{title}</p>
      </div>

      {/* Date */}
      {/* loop through the arrays and output them */}
      {teams.map((team, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full px-4 py-2 text-sm text-black flex-center"
        >
          <div className="flex items-center gap-3">
            <p className="font-thin min-w-[10px]">{index + 1}</p>
            <p className="font-medium">{teams[index]}</p>
          </div>
          <p>{scores[index]}</p>
        </div>
      ))}
    </div>
  );
};
