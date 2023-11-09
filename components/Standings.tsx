import React from "react";
import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
  teams: string[];
  scores: string[];
  goals?: string[];
  nums: number[];
}
export const Standings = ({ title, teams, scores, nums }: Props) => {
  return (
    <div className="relative border  border-slate-400 items-center min-w-[320px] flex flex-col  ">
      {/* Title */}
      <div className="flex items-center justify-center w-full p-4 text-lg font-bold text-white bg-red-600 flex-center">
        <p>{title}</p>
      </div>

      {/* Date */}
      {/* loop through the arrays and output them */}
      {teams.map((team, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full p-4 text-lg text-black flex-center"
        >
          <div className="flex items-center gap-3">
            <p className="font-thin">{nums[index]}</p>
            <p className="font-bold">{teams[index]}</p>
          </div>
          <p>{scores[index]}</p>
        </div>
      ))}
    </div>
  );
};
