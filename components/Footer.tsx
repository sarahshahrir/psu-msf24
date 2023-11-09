import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import basketball from "@/public/basketball.png";
import badminton from "@/public/badminton.png";
import football from "@/public/football.png";
import volleyball from "@/public/volley.png";
import outdoor from "@/public/outdoor.png";

export const Footer = () => {
  return (
    <div className="fixed flex items-center gap-4 bottom-8">
      <Button variant="outline">
        <Image
          src={football}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
      <Button variant="outline">
        <Image
          src={basketball}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
      <Button variant="outline">
        <Image
          src={badminton}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
      <Button variant="outline">
        <Image
          src={volleyball}
          alt="Picture of the author"
          width={20}
          height={20}
        />
      </Button>
      <Button variant="outline">
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
