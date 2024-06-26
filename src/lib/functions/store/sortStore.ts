import { type Writable, writable } from "svelte/store";

export interface CharObj {
  value: string;
  index: number;
  style: string;
  removeStyle(style: string): void;
  addStyle(style: string): void;
}

class CharObjImpl implements CharObj {
  value: string;
  index: number;
  style: string;

  constructor(value: string, index: number) {
    this.value = value;
    this.index = index;
    this.style = "";
  }

  removeStyle(styleToRemove: string): void {
    const styles = this.style.split(" ");
    const updatedStyles = styles.filter((style) => style !== styleToRemove);
    this.style = updatedStyles.join(" ");
  }

  addStyle(styleToAdd: string): void {
    this.style = this.style + " " + styleToAdd;
  }
}

interface AlgorithmObj {
  name?: string;
  complexity?: string;
}

const algorithm: AlgorithmObj = { name: "start" };

/* Store with the name of the current algorithm being executed */
export const currentAlgorithm = writable<AlgorithmObj>(algorithm);

/* Store with the text to be sorted on screen */
export const textArray = writable([
  new CharObjImpl("M", 0),
  new CharObjImpl("a", 1),
  new CharObjImpl("s", 2),
  new CharObjImpl("o", 3),
  new CharObjImpl("n", 4),
  new CharObjImpl("&ensp;", 5),
  new CharObjImpl("B", 6),
  new CharObjImpl("o", 7),
  new CharObjImpl("t", 8),
  new CharObjImpl("t", 9),
]);

/* Store with the interval between each step of the sorting algorithm */
export const sortInterval: Writable<number> = writable<number>(175);
