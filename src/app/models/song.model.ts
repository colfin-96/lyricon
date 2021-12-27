import { Verse } from './verse.model';

export interface Song {
  number: number;
  title: string;
  subtitle: string;
  author: string;
  composer: string;
  verses: Verse[];
}
