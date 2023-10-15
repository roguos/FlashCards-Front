export interface IFlashcard {
  id: number;
  title?: string | undefined;
  tip: string;
  text?: string | undefined;
  topic: string;
  image?: string | undefined;
}
export interface ICardResult {
  card: IFlashcard;
  result: number;
}
