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

export const badmintonMData: Match[] = [
  {
    id: 260005,
    name: "Final",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "4:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: null,
        name: "TBD",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: null,
        name: "TBD",
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "2:30 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "En. Hatimi & En. Yahya",
      },
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Nabil & Ralf",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "3:00 PM",
    state: "SCORE_DONE",
    participants: [
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "",
        isWinner: false,
        status: "PLAYED",
        name: "TBD",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "TBD",
      },
    ],
  },
  {
    id: 260007,
    name: "Quarter Final 1",
    nextMatchId: 260006,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "1:30 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "1ec356ec-a7c4-4026-929b-3657286a92d8",
        resultText: "26",
        isWinner: false,
        status: "PLAYED",
        name: "Danish & Jinyao",
      },
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "30",
        isWinner: true,
        status: "PLAYED",
        name: "En. Hatimi & En. Yahya",
      },
    ],
  },
  {
    id: 260010,
    name: "Quarter Final 2",
    nextMatchId: 260006,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "24",
        isWinner: false,
        status: "PLAYED",
        name: "En. Syahrul & En. Eshraq",
      },
      {
        id: "4651dcd0-853e-4242-9924-602e8200dd17",
        resultText: "30",
        isWinner: true,
        status: "PLAYED",
        name: "Nabil & Ralf",
      },
    ],
  },
  {
    id: 260014,
    name: "Quarter Final 3",
    nextMatchId: 260013,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c2f551b4-2d5a-4c59-86a8-df575805256a",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Shahrunizam & Khairil",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Airil & Akmal",
      },
    ],
  },
  {
    id: 260017,
    name: "Quarter Final 4",
    nextMatchId: 260013,
    nextLooserMatchId: undefined,
    tournamentRoundText: "2",
    startTime: "2:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Affiq & Vincent",
      },
      {
        id: "76ac9113-a541-4b6a-a189-7b5ad43729bd",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Khaiyyum & Eirfann",
      },
    ],
  },
];

export const badmintonWData: Match[] = [
  {
    id: 260005,
    name: "Final",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "4:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: null,
        name: "",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: null,
        name: "",
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "2:30 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Athilah & Nabilah",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Farhah & Izza",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "3:00 PM",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Dania & Angelina",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Farhanah & Najwa",
      },
    ],
  },
];

export const basketballData: Match[] = [
  {
    id: 260005,
    name: "Final",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "1:55 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: null,
        name: "Wisconsin",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: null,
        name: "The Nuthouse",
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11:25 AM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "14",
        isWinner: false,
        status: "PLAYED",
        name: "Asam Pedas Pollock",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "42",
        isWinner: true,
        status: "PLAYED",
        name: "Wisconsin",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "11:25 AM",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "29",
        isWinner: true,
        status: "PLAYED",
        name: "The Nuthouse",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "18",
        isWinner: false,
        status: "PLAYED",
        name: "Penn State",
      },
    ],
  },
];

export const footballData: Match[] = [
  {
    id: 260005,
    name: "Final",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "2:45 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: null,
        name: "TBD",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: null,
        name: "TBD",
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "12:30 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "TBD",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "TBD",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "0",
    startTime: "1:15 PM",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "TBD",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "TBD",
      },
    ],
  },
];

export const volleyballData: Match[] = [
  {
    id: 260005,
    name: "Final",
    nextMatchId: null,
    nextLooserMatchId: undefined,
    tournamentRoundText: "4",
    startTime: "4:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: null,
        name: "TBD",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: null,
        name: "TBD",
      },
    ],
  },
  {
    id: 260006,
    name: "Semi Final 1",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "1:00 PM",
    state: "SCHEDULED",
    participants: [
      {
        id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Cendol VB",
      },
      {
        id: "008de019-4af6-4178-a042-936c33fea3e9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "The Nuthouse",
      },
    ],
  },
  {
    id: 260013,
    name: "Semi Final 2",
    nextMatchId: 260005,
    nextLooserMatchId: undefined,
    tournamentRoundText: "3",
    startTime: "2:00 PM",
    state: "SCORE_DONE",
    participants: [
      {
        id: "9c92feb3-4aa4-4475-a34e-f9a200e21aa9",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Penn State B",
      },
      {
        id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
        resultText: "",
        isWinner: true,
        status: "PLAYED",
        name: "Penn State C",
      },
    ],
  },
];