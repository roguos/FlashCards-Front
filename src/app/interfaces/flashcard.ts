export interface IFlashcard {
  id: number;
  title?: string | undefined;
  tip: string;
  text?: string | undefined;
  topic: string;
  image?: string | undefined;
}
