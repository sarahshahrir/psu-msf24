import React from "react";
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
          sport == "Badminton: Men's" && "outline-double outline-4 outline-rose-700"
        }`}
        variant="outline"
        onClick={() => {
          setSport("Badminton: Men's");
        }}
      >
        <Image
          src={badminton}
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
        className={`ease-in-out duration-200 ${
          sport == "Badminton: Women's" && "outline-double outline-4 outline-rose-700"
        }`}
        variant="outline"
        onClick={() => {
          setSport("Badminton: Women's");
        }}
      >
        <Image
          src={outdoor}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};
