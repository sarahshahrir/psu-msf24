type Participant = {
  id: string | number;

  isWinner?: boolean;

  name?: string;

  status?: "PLAYED" | "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | string | null;

  resultText?: string | null;

  [key: string]: any;
};

type Match = {
  id: number | string;

  /** Link to this match. While onClick() can be used, providing an href
      better supports opening a new tab, or copying a link. * */
  href?: string;

  name?: string;

  nextMatchId: number | string | null;

  nextLooserMatchId?: number | string;

  tournamentRoundText?: string;

  startTime: string;

  state: "PLAYED" | "NO_SHOW" | "WALK_OVER" | "NO_PARTY" | string;

  participants: Participant[];

  [key: string]: any;
};

export const badmintonData: Match[] = [
  {
    id: 260005,
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: null,
        isWinner: false,
        status: null,
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null,
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final - Match 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "H. W. Woo & A. Daniel",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "H. E. Razif & J. Jesmani",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final - Match 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11-11-2023",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: null,
        isWinner: false,
        status: "NO_SHOW",
        name: "Aedan & JJ",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: "PLAYED",
        name: "D. Hazeem & J. Yao",
      },
    ],
  },
  {
    id: 260007,
    name: "Quarter Final - Match 1",
    nextMatchId: 260006,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "1ec356ec-a7c4-4026-929b-3657286a92d8",
        resultText: "2",
        isWinner: true,
        status: "PLAYED",
        name: "H. W. Woo & A. Daniel",
      },
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "Taqio & M. N. Sharull",
      },
    ],
  },
  {
    id: 260010,
    name: "Quarter Final - Match 2",
    nextMatchId: 260006,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c2f551b4-2d5a-4c59-86a8-df575805256a",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
        name: "M. Naziem & P. D. Iskandar",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "2",
        isWinner: true,
        status: "PLAYED",
        name: "H. E. Razif & J. Jesmani",
      },
    ],
  },
  {
    id: 260014,
    name: "Quarter Final - Match 3",
    nextMatchId: 260013,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "2",
        isWinner: true,
        status: "PLAYED",
        name: "Aedan & JJ",
      },
      {
        id: "4651dcd0-853e-4242-9924-602e8200dd17",
        resultText: "1",
        isWinner: false,
        status: "PLAYED",
        name: "M.N. Azman & S. Hisham",
      },
    ],
  },
  {
    id: 260017,
    name: "Quarter Final - Match 4",
    nextMatchId: 260013,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "2",
        isWinner: true,
        status: "PLAYED",
        name: "D. Hazeem & J. Yao",
      },
      {
        id: "76ac9113-a541-4b6a-a189-7b5ad43729bd",
        resultText: "1",
        isWinner: false,
        status: "PLAYED",
        name: "A. Chong & J. W. Chong",
      },
    ],
  },
];

export const basketballData: Match[] = [
  {
    id: 260005,
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: null,
        isWinner: false,
        status: null,
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null,
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final - Match 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "1",
        isWinner: true,
        status: "PLAYED",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final - Match 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11-11-2023",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: null,
        isWinner: false,
        status: "NO_SHOW",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: true,
        status: "PLAYED",
      },
    ],
  },
];

export const footballData: Match[] = [
  {
    id: 260005,
    name: "Final - Match",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: null,
        isWinner: false,
        status: null,
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: false,
        status: null,
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final - Match 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11-11-2023",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "1",
        isWinner: true,
        status: "PLAYED",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "0",
        isWinner: false,
        status: "PLAYED",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final - Match 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11-11-2023",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: null,
        isWinner: false,
        status: "NO_SHOW",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: null,
        isWinner: true,
        status: "PLAYED",
      },
    ],
  },
];
