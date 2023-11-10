type Match = {
  id: number | string;

  /** Link to this match. While onClick() can be used, providing an href
        better supports opening a new tab, or copying a link. * */
  href?: string;

  name?: string;

  nextMatchId: number | string | null | undefined | any;

  nextLooserMatchId?: number | string;

  tournamentRoundText?: string;

  startTime: string;

  state: "PLAYED" | "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | string;

  participants: any[];

  [key: string]: any;
};

export const walkOverData: Match[] = [
  {
    id: 260005,
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: null,
        isWinner: false,
        status: null,
        name: "giacomo123",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null,
        name: "Ant",
      },
    ],
  },
  ,
  {
    id: 260006,
    name: "Semi Final - Match 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "1",
        isWinner: true,
        status: "PLAYED",
        name: "giacomo123",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "TowbyTest",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final - Match 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: null,
        isWinner: false,
        status: "NO_SHOW",
        name: "WubbaLubbaDubbish",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: true,
        status: "WALK_OVER",
      },
    ],
  },
  {
    id: 260007,
    name: "Quarter Finals - Match 1",
    nextMatchId: 260006,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "1ec356ec-a7c4-4026-929b-3657286a92d8",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "TestSpectacles",
      },
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "0",
        isWinner: true,
        status: "PLAYED",
      },
    ],
  },
  {
    id: 260010,
    name: "Quarter Finals - Match 2",
    nextMatchId: 260006,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "c2f551b4-2d5a-4c59-86a8-df575805256a",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "Ahshitherewegoagain",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "1",
        isWinner: true,
        status: "PLAYED",
      },
    ],
  },
  {
    id: 260014,
    name: "Quarter Finals - Match 3",
    nextMatchId: 260013,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "1",
        isWinner: true,
        status: "PLAYED",
      },
      {
        id: "4651dcd0-853e-4242-9924-602e8200dd17",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "FIFA_MASTER",
      },
    ],
  },
  {
    id: 260017,
    name: "Quarter Finals - Match 4",
    nextMatchId: 260013,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2021-05-30",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "1",
        isWinner: true,
        status: "PLAYED",
      },
      {
        id: "76ac9113-a541-4b6a-a189-7b5ad43729bd",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "رئيس",
      },
    ],
  },
];
