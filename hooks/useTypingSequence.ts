"use client";

import { useEffect, useMemo, useState } from "react";

import type { TerminalLine } from "@/types/hero";

type TypedLine = TerminalLine & {
  visibleText: string;
  done: boolean;
};

type UseTypingSequenceOptions = {
  lines: TerminalLine[];
  enabled?: boolean;
  charDelayMs?: number;
  lineDelayMs?: number;
};

export function useTypingSequence({
  lines,
  enabled = true,
  charDelayMs = 28,
  lineDelayMs = 220,
}: UseTypingSequenceOptions) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setLineIndex(lines.length);
      setCharIndex(0);
      setComplete(true);
      return;
    }

    setLineIndex(0);
    setCharIndex(0);
    setComplete(false);
  }, [enabled, lines]);

  useEffect(() => {
    if (!enabled || complete) return;
    if (lineIndex >= lines.length) {
      setComplete(true);
      return;
    }

    const current = lines[lineIndex];

    if (current.type === "blank" || current.text.length === 0) {
      const timer = window.setTimeout(() => {
        setLineIndex((value) => value + 1);
        setCharIndex(0);
      }, lineDelayMs);
      return () => window.clearTimeout(timer);
    }

    if (charIndex < current.text.length) {
      const timer = window.setTimeout(() => {
        setCharIndex((value) => value + 1);
      }, charDelayMs);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setLineIndex((value) => value + 1);
      setCharIndex(0);
    }, lineDelayMs);

    return () => window.clearTimeout(timer);
  }, [enabled, complete, lineIndex, charIndex, lines, charDelayMs, lineDelayMs]);

  const typedLines = useMemo<TypedLine[]>(() => {
    if (!enabled) {
      return lines.map((line) => ({
        ...line,
        visibleText: line.text,
        done: true,
      }));
    }

    return lines.slice(0, lineIndex + 1).map((line, index) => {
      if (index < lineIndex) {
        return { ...line, visibleText: line.text, done: true };
      }

      return {
        ...line,
        visibleText: line.text.slice(0, charIndex),
        done: charIndex >= line.text.length,
      };
    });
  }, [enabled, lines, lineIndex, charIndex]);

  return { typedLines, complete, showCaret: enabled && !complete };
}
