import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import basketball from "@/public/basketball.png";
import badminton from "@/public/badminton.png";
import football from "@/public/football.png";
import volleyball from "@/public/volley.png";
import outdoor from "@/public/outdoor.png";
import { useRecoilState } from "recoil";
import { sportState } from "@/components/atoms";

export const Footer = () => {
  const [sport, setSport] = useRecoilState(sportState);
  const [isBadmintonDropdownOpen, setBadmintonDropdownOpen] = useState(false);

  const toggleBadmintonDropdown = () => {
    setBadmintonDropdownOpen(!isBadmintonDropdownOpen);
  }

  return (
    <div className="fixed flex items-center gap-3 bottom-8">
      <Button
        // write conditional statement for classname in tailwind
        className={`${
          sport == "Football" && "outline-double outline-4 outline-rose-700"
        }`}
        variant="outline"
        onClick={() => {
          setSport("Football");
        }}
      >
        <Image
          src={football}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
      <Button
        className={`ease-in-out duration-200 ${
          sport == "Basketball" && "outline-double outline-4 outline-rose-700"
        }`}
        variant="outline"
        onClick={() => {
          setSport("Basketball");
        }}
      >
        <Image
          src={basketball}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
      <Button
        className={`ease-in-out duration-200 ${
          sport == "Volleyball" && "outline-double outline-4 outline-rose-700"
        }`}
        variant="outline"
        onClick={() => {
          setSport("Volleyball");
        }}
      >
        <Image
          src={volleyball}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>

      <Button
        className={`${
          sport == "Badminton" && "outline-double outline-4 outline-rose-700"
        }`}
        variant="outline"
        onClick={toggleBadmintonDropdown}
      >
        <Image src={badminton} alt="Badminton Icon" width={20} height={20} />
      </Button>

      {isBadmintonDropdownOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[-50px] flex flex-col items-center bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            className="px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => {
              setSport("Badminton: Men's");
              setBadmintonDropdownOpen(false);
            }}
          >
            Men&apos;s Badminton
          </button>
          <button
            className="px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => {
              setSport("Badminton: Women's");
              setBadmintonDropdownOpen(false);
            }}
          >
            Women&apos;s Badminton
          </button>
        </div>
      )}
    </div>
  );
};
