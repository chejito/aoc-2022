import { readFileSync } from 'fs';
import * as path from 'path';

const inputPath: string = path.resolve(__dirname, './input.txt');

enum MoveItems {
  'A' = 1,
  'B' = 2,
  'C' = 3,
  'X' = 1,
  'Y' = 2,
  'Z' = 3,
}

enum Results {
  Win = 6,
  Draw = 3,
  Loss = 0,
}

const readFile = (filename: string): string[] => {
  return readFileSync(filename, 'utf-8')
    .split(/\r?\n/);
}

const replaceWithValues = (letters: string[]): number[] => {
  return letters.map(letter => MoveItems[letter]);
}

const getMovePoints = (move: number[]): number => {
  if (move[0] == move[1]) return Results.Draw + move[1];
  else if (checkWin(move[0], move[1])) return Results.Win + move[1];
  return Results.Loss + move[1];
}

const checkWin = (elfMove: number, myMove: number): boolean => {
  if ((elfMove == 1 && myMove == 2) 
  || (elfMove == 2 && myMove == 3) 
  || (elfMove == 3 && myMove == 1)){
    return true;
  }
}

const totalPoints = readFile(inputPath)
  .map(move => getMovePoints(replaceWithValues(move.split(' '))))
  .reduce((sum: number, num: number) => sum + num, 0);

console.log(`\nTotal points: $${totalPoints}`);
