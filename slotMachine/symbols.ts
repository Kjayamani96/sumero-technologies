// src/slotMachine/symbols.ts

// **Symbol identifiers used on the reels**
export type SlotSymbolId = "A" | "K" | "Q" | "J" | "Gold" | "Dragon" | "Wild";

// **All possible symbols that can appear on the reels**
export const ALL_SYMBOLS: SlotSymbolId[] = [
  "A",
  "K",
  "Q",
  "J",
  "Gold",
  "Dragon",
  "Wild",
];

// **Simple payout table: multiplier per full horizontal line of the same symbol**
// Winnings = bet * multiplier
export const PAYOUT_MULTIPLIERS: Record<SlotSymbolId, number> = {
  A: 2,
  K: 3,
  Q: 4,
  J: 5,
  Gold: 10,
  Dragon: 20,
  Wild: 25,
};