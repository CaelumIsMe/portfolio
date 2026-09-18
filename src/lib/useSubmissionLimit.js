import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "contact:send-history";

/*
  Rolling-window send throttle for the contact form.

  Scope: this is a courtesy guard against double-sends and casual repeat-spam.
  It is NOT a security control — it lives in the visitor's own browser, so
  clearing site data, opening a private window, or posting straight to the
  Formspree endpoint all bypass it. Abuse protection belongs on Formspree.

  localStorage, not sessionStorage: sessionStorage is cleared when the tab
  closes, which would make a 12-hour window meaningless.
*/

const readHistory = (windowMs) => {
    if (typeof window === "undefined") return [];

    const now = Date.now();

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];

        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];

        return parsed
            .filter(
                (entry) =>
                    typeof entry === "number" &&
                    Number.isFinite(entry) &&
                    // Ignore timestamps in the future — a changed system clock
                    // would otherwise lock the form until that date arrives.
                    entry <= now &&
                    now - entry < windowMs
            )
            .sort((a, b) => a - b);
    } catch {
        // Unreadable or tampered-with value: treat as no history.
        return [];
    }
};

const writeHistory = (history) => {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch {
        // Storage blocked (private mode, disabled site data). Fail open — better
        // to allow a send than to lock a legitimate visitor out of the form.
    }
};

export const useSubmissionLimit = ({ max, windowMs }) => {
    const [history, setHistory] = useState(() => readHistory(windowMs));

    const isLimited = history.length >= max;
    // The send that has to age out before another slot frees up.
    const resetAt = isLimited ? history[history.length - max] + windowMs : null;

    // Re-check exactly when that send leaves the window, so a page left open
    // re-enables itself instead of staying stuck.
    useEffect(() => {
        if (!resetAt) return;

        const delay = resetAt - Date.now();
        if (delay <= 0) {
            setHistory(readHistory(windowMs));
            return;
        }

        const timer = setTimeout(() => setHistory(readHistory(windowMs)), delay);
        return () => clearTimeout(timer);
    }, [resetAt, windowMs]);

    /*
      Both of these re-read storage rather than trusting React state, so a send
      made in another tab is still counted.
    */
    const canSend = useCallback(() => {
        const current = readHistory(windowMs);
        setHistory(current);
        return current.length < max;
    }, [max, windowMs]);

    const recordSend = useCallback(() => {
        // Only the most recent `max` entries can ever affect the decision.
        const next = [...readHistory(windowMs), Date.now()].slice(-max);
        writeHistory(next);
        setHistory(next);
    }, [max, windowMs]);

    return { isLimited, resetAt, remaining: Math.max(0, max - history.length), canSend, recordSend };
};
