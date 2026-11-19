import type { CSSProperties } from "react";

// Delay (in milliseconds) before an element fades in. Used with the data-reveal attribute
// so a group of elements appears one after another instead of all at once.
export function rd(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
