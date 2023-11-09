"use client";

import dynamic from "next/dynamic";
import React from "react";

interface Props {
  data: any;
}

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  import("@g-loot/react-tournament-brackets");
}
const SingleEliminationBracket = dynamic(
  () => {
    return import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.SingleEliminationBracket
    );
  },
  { ssr: false }
);

const Match = dynamic(
  () => {
    return import("@g-loot/react-tournament-brackets").then((mod) => mod.Match);
  },
  { ssr: false }
);
const MATCH_STATES = dynamic(
  () => {
    return import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.MATCH_STATES
    );
  },
  { ssr: false }
);
const SVGViewer = dynamic(
  () => {
    return import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.SVGViewer
    );
  },
  { ssr: false }
);

const createTheme = dynamic(
  () => {
    return import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.createTheme
    );
  },
  { ssr: false }
);

// const WhiteTheme = createTheme({
//   textColor: { main: "#000000", highlighted: "#07090D", dark: "#3E414D" },
//   matchBackground: { wonColor: "#daebf9", lostColor: "#96c6da" },
//   score: {
//     background: { wonColor: "#87b2c4", lostColor: "#87b2c4" },
//     text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
//   },
//   border: {
//     color: "#CED1F2",
//     highlightedColor: "#da96c6",
//   },
//   roundHeader: { backgroundColor: "#da96c6", fontColor: "#000" },
//   connectorColor: "#CED1F2",
//   connectorColorHighlight: "#da96c6",
//   svgBackground: "#FAFAFA",
// });

export const Brackets = ({ data }: Props) => {
  const finalWidth = 500;
  const finalHeight = 500;

  return (
    <SingleEliminationBracket
      className="overflow-x-scroll ml-4 "
      matches={data}
      matchComponent={Match}
      options={{
        style: {
          roundHeader: { backgroundColor: "#AAA" },
          connectorColor: "#FF8C00",
          connectorColorHighlight: "#000",
        },
      }}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer
          width={320}
          height={600}
          {...props}
          SVGBackground={"rgba(0,0,0,0)"}
          background={"rgba(0,0,0,0)"}
        >
          {children}
        </SVGViewer>
      )}
    />
  );
};
