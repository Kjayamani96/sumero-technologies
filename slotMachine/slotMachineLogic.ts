// src/slotMachine/slotMachineLogic.ts

import { useCallback, useMemo, useState } from "react";
import { ALL_SYMBOLS, PAYOUT_MULTIPLIERS, SlotSymbolId } from "./symbols";

// **Constant configuration for the slot machine**
export const REEL_COUNT = 5;
export const ROW_COUNT = 3;
export const STARTING_BALANCE = 100_000;
export const BET_OPTIONS = [10, 50, 100, 500] as const;

export type BetAmount = (typeof BET_OPTIONS)[number];

// **Matrix representation of the reels: rows x reels**
export type ReelsMatrix = SlotSymbolId[][]; // [row][reel]

export interface SpinResult {
  reels: ReelsMatrix;
  winAmount: number;
  winningRows: number[]; // row indices that won on this spin
}

// **Randomly select a symbol (uniform distribution for now)**
function getRandomSymbol(): SlotSymbolId {
  const idx = Math.floor(Math.random() * ALL_SYMBOLS.length);
  return ALL_SYMBOLS[idx];
}

// **Generate a new reels matrix filled with random symbols**
export function generateRandomReels(
  rows: number = ROW_COUNT,
  reels: number = REEL_COUNT
): ReelsMatrix {
  const matrix: ReelsMatrix = [];
  for (let r = 0; r < rows; r++) {
    const row: SlotSymbolId[] = [];
    for (let c = 0; c < reels; c++) {
      row.push(getRandomSymbol());
    }
    matrix.push(row);
  }
  return matrix;
}

// **Basic horizontal win evaluation (row-based only)**
// Rule: if all 5 symbols in a row are the same, pay bet * symbolMultiplier.
export function evaluateHorizontalWins(
  reels: ReelsMatrix,
  bet: BetAmount
): { winAmount: number; winningRows: number[] } {
  let totalWin = 0;
  const winningRows: number[] = [];

  for (let rowIndex = 0; rowIndex < reels.length; rowIndex++) {
    const row = reels[rowIndex];
    if (row.length === 0) continue;

    const first = row[0];
    const allSame = row.every((s) => s === first);

    if (allSame) {
      const multiplier = PAYOUT_MULTIPLIERS[first];
      const rowWin = bet * multiplier;
      totalWin += rowWin;
      winningRows.push(rowIndex);
    }
  }

  return { winAmount: totalWin, winningRows };
}

// **Hook: orchestrates balance, betting, spins, and win tracking**
export function useSlotMachineLogic() {
  const [balance, setBalance] = useState<number>(STARTING_BALANCE);
  const [bet, setBet] = useState<BetAmount>(BET_OPTIONS[0]);
  const [reels, setReels] = useState<ReelsMatrix>(() =>
    generateRandomReels(ROW_COUNT, REEL_COUNT)
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWinAmount, setLastWinAmount] = useState(0);
  const [winningRows, setWinningRows] = useState<number[]>([]);

  // **Derived flag: whether a spin is allowed with the current balance**
  const canAffordBet = useMemo(() => balance >= bet, [balance, bet]);

  // **Update bet while ensuring it does not exceed current balance**
  const handleChangeBet = useCallback(
    (newBet: BetAmount) => {
      setBet((prev) => {
        const next = newBet;
        if (balance < next) {
          // If balance is too low, keep previous bet (no-op)
          return prev;
        }
        return next;
      });
    },
    [balance]
  );

  // **Perform one logical spin (no animation here)**
  const performLogicalSpin = useCallback(
    (currentBalance: number, currentBet: BetAmount): SpinResult | null => {
      if (currentBalance < currentBet) {
        return null;
      }

      const nextBalance = currentBalance - currentBet;
      const nextReels = generateRandomReels(ROW_COUNT, REEL_COUNT);
      const { winAmount, winningRows } = evaluateHorizontalWins(nextReels, currentBet);

      // Update external state for balance and winning rows
      setBalance(nextBalance + winAmount);
      setWinningRows(winningRows);
      setLastWinAmount(winAmount);
      setReels(nextReels);

      return { reels: nextReels, winAmount, winningRows };
    },
    []
  );

  // **Public spin handler: guards against double-spins and low balance**
  const spin = useCallback(async () => {
    if (isSpinning) return;
    if (!canAffordBet) return;

    setIsSpinning(true);
    setLastWinAmount(0);
    setWinningRows([]);

    // Delay aligns with animation duration in the UI component
    const animationDurationMs = 900;

    // Deduct bet immediately and compute result (state updates inside)
    performLogicalSpin(balance, bet);

    // Wait for animation "spin" to complete before releasing the lock
    await new Promise((resolve) => setTimeout(resolve, animationDurationMs));

    setIsSpinning(false);
  }, [balance, bet, canAffordBet, isSpinning, performLogicalSpin]);

  return {
    balance,
    bet,
    reels,
    isSpinning,
    lastWinAmount,
    winningRows,
    canAffordBet,
    setBet: handleChangeBet,
    spin,
  };
}