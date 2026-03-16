// src/slotMachine/paylines.ts

// **Payline definition: each payline is an array of [row, reel] positions**
export type Payline = [row: number, reel: number][];

// **Placeholder for 20 paylines (only horizontal lines used currently)**
// We define 3 horizontal paylines (rows 0, 1, 2). The other 17 are
// placeholders for future advanced patterns.
export const PAYLINES: Payline[] = [
  // Horizontal row 0
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  // Horizontal row 1
  [
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  // Horizontal row 2
  [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  // 17 more placeholder paylines (not used yet)
  ...Array.from({ length: 17 }, () => []),
];