import React from "react";
import { motion } from "framer-motion";
import {
  BET_OPTIONS,
  REEL_COUNT,
  ROW_COUNT,
  useSlotMachineLogic,
} from "./slotMachineLogic";
import { SlotSymbolId } from "./symbols";

interface SlotMachineProps {
  className?: string;
}

// **Symbol styling for a premium casino feel**
function getSymbolStyles(symbol: SlotSymbolId): string {
  switch (symbol) {
    case "Wild":
      return "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 text-black font-extrabold shadow-[0_0_20px_rgba(251,191,36,0.9)]";
    case "Dragon":
      return "bg-gradient-to-br from-red-500 to-rose-600 text-white font-extrabold shadow-[0_0_18px_rgba(248,113,113,0.8)]";
    case "Gold":
      return "bg-gradient-to-br from-yellow-300 to-amber-400 text-black font-bold shadow-[0_0_16px_rgba(252,211,77,0.8)]";
    case "A":
    case "K":
    case "Q":
    case "J":
    default:
      return "bg-slate-900/90 text-sky-100 font-semibold border border-slate-600/80 tracking-[0.12em] uppercase";
  }
}

export const SlotMachine: React.FC<SlotMachineProps> = ({ className = "" }) => {
  const {
    balance,
    bet,
    reels,
    isSpinning,
    lastWinAmount,
    winningRows,
    canAffordBet,
    setBet,
    spin,
  } = useSlotMachineLogic();

  const spinDisabled = isSpinning || !canAffordBet;

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 p-4 ${className}`}
    >
      {/* Global background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_55%)]" />

      {/* Machine body */}
      <div className="relative w-full max-w-md rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/70 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl px-4 py-5 sm:px-6 sm:py-6 space-y-4">
        {/* Decorative lever hint */}
        <div className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 h-24 w-2 rounded-full bg-gradient-to-b from-slate-600 via-slate-300 to-slate-600 shadow-[0_0_16px_rgba(148,163,184,0.8)]" />

        {/* Header */}
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-wide text-sky-100">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 text-sm font-bold shadow-[0_0_18px_rgba(251,191,36,0.9)]">
                ★
              </span>
              Mythic Dragon Slots
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              5 reels · 3 rows · 20 paylines (coming soon)
            </p>
          </div>
          <div className="text-right">
            <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
              Balance
            </p>
            <p className="text-lg sm:text-xl font-bold text-emerald-400 tabular-nums">
              {balance.toLocaleString()} <span className="text-xs">coins</span>
            </p>
          </div>
        </header>

        {/* Reels */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/70 shadow-inner shadow-black/70 px-3 py-4 sm:px-4 sm:py-5 overflow-hidden">
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,113,113,0.14),_transparent_55%)]" />

          <div className="relative grid grid-cols-5 gap-1 sm:gap-1.5">
            {Array.from({ length: REEL_COUNT }).map((_, reelIndex) => (
              <motion.div
                key={reelIndex}
                className="overflow-hidden rounded-xl bg-slate-950/70 border border-slate-700/60 shadow-lg shadow-black/60"
                animate={{
                  y: isSpinning ? ["0%", "-100%", "0%"] : "0%",
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              >
                <div className="flex flex-col gap-1 sm:gap-1.5 p-1.5">
                  {Array.from({ length: ROW_COUNT }).map((_, rowIndex) => {
                    const symbol = reels[rowIndex][reelIndex];
                    const isWinningRow = winningRows.includes(rowIndex);

                    return (
                      <motion.div
                        key={rowIndex}
                        animate={
                          isWinningRow && !isSpinning
                            ? {
                                scale: [1, 1.05, 1],
                                boxShadow:
                                  "0 0 24px rgba(16,185,129,0.9)",
                              }
                            : { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }
                        }
                        transition={{
                          duration: 0.6,
                          repeat:
                            isWinningRow && !isSpinning ? Infinity : 0,
                        }}
                        className={`flex items-center justify-center rounded-md sm:rounded-lg h-16 sm:h-20 text-xl sm:text-2xl tracking-wide
                          ${getSymbolStyles(symbol)}
                          ${
                            isWinningRow && !isSpinning
                              ? "ring-2 ring-emerald-400/80 ring-offset-[3px] ring-offset-slate-900"
                              : ""
                          }`}
                      >
                        {symbol}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Bet selector */}
          <div className="flex flex-col gap-1">
            <span className="text-[0.65rem] uppercase tracking-wide text-slate-400">
              Bet per spin
            </span>
            <div className="flex flex-wrap gap-1.5">
              {BET_OPTIONS.map((option) => {
                const isSelected = bet === option;
                const disabled = option > balance;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={disabled}
                    onClick={() => setBet(option)}
                    className={`px-2.5 py-1.5 text-xs rounded-full border transition
                      ${
                        isSelected
                          ? "bg-sky-500 text-slate-950 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]"
                          : "bg-slate-900/90 text-slate-200 border-slate-600 hover:border-sky-400/80 hover:text-sky-100"
                      }
                      ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    {option.toLocaleString()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Spin button */}
          <div className="flex flex-col items-stretch sm:items-end gap-1">
            <button
              type="button"
              disabled={spinDisabled}
              onClick={spin}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base sm:text-lg font-semibold tracking-wide
                transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-slate-900
                ${
                  spinDisabled
                    ? "bg-slate-700/80 text-slate-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-slate-950 shadow-[0_0_32px_rgba(52,211,153,0.9)] hover:brightness-105 active:scale-[0.98]"
                }
              `}
            >
              <span>{isSpinning ? "Spinning…" : "SPIN"}</span>
            </button>
            <p className="text-[0.65rem] text-slate-400">
              Bet:{" "}
              <span className="font-semibold text-sky-300">
                {bet.toLocaleString()} coins
              </span>
            </p>
          </div>
        </div>

        {/* Info / feedback */}
        <div className="flex flex-col gap-1 text-xs text-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Last win</span>
            <span
              className={
                lastWinAmount > 0
                  ? "font-semibold text-emerald-400"
                  : "font-medium text-slate-400"
              }
            >
              {lastWinAmount > 0
                ? `+${lastWinAmount.toLocaleString()} coins`
                : "No win yet"}
            </span>
          </div>

          {lastWinAmount > 0 && !isSpinning && (
            <div className="mt-1 rounded-full bg-emerald-500/15 border border-emerald-400/60 px-3 py-1 text-[0.7rem] text-emerald-200 text-center">
              You won{" "}
              <span className="font-semibold">
                {lastWinAmount.toLocaleString()} coins
              </span>
              !
            </div>
          )}

          {!canAffordBet && (
            <p className="text-rose-400 text-[0.65rem]">
              Balance too low for the selected bet.
            </p>
          )}
          {isSpinning && (
            <p className="text-sky-400/80 text-[0.65rem]">
              Reels are spinning… good luck!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};