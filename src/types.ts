export type UserQuery = (number | null)[];

export type Answer = number[];

export type SingleHistoryType = {
  answer: Answer;
  hit: number;
  blow: number;
}
export type HistoryType = SingleHistoryType[];
