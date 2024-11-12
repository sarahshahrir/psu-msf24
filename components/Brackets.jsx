"use client";

import dynamic from "next/dynamic";
import React from "react";

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

// Define Penn State color theme with PMS 648 Blue
const PennStateTheme = createTheme({
  textColor: { main: "#FFFFFF", highlighted: "#E5E5E5", dark: "#002D62" },
  matchBackground: { wonColor: "#DAE1E7", lostColor: "#A0B6CF" },
  score: {
    background: { wonColor: "#A0B6CF", lostColor: "#A0B6CF" },
    text: { highlightedWonColor: "#FFFFFF", highlightedLostColor: "#DAE1E7" },
  },
  border: {
    color: "#002D62", // PMS 648 Blue for border
    highlightedColor: "#E5E5E5", // Lighter highlight color
  },
  roundHeader: { backgroundColor: "#002D62", fontColor: "#FFFFFF" }, // PMS 648 Blue background, white text
  connectorColor: "#002D62", // PMS 648 Blue connectors
  connectorColorHighlight: "#FFFFFF", // White highlighted connectors
  svgBackground: "#FFFFFF", // Light background for the SVG area
});

// Then apply the theme to the Brackets component
export const Brackets = ({ data }) => {
  const finalWidth = 500;
  const finalHeight = 500;

  return (
    <SingleEliminationBracket
      className="ml-4 overflow-x-scroll "
      matches={data}
      matchComponent={Match}
      options={{
        theme: PennStateTheme,
        style: { backgroundColor: '#002D62 !important' }, // Inline style with `!important`
      }}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer
          width={320}
          height={600}
          {...props}
          SVGBackground={"#FFFFFF"}
        >
          {children}
        </SVGViewer>
      )}
    />
  );
};