import { readFileSync } from 'fs';
import * as path from 'path';

const inputPath: string = path.resolve(__dirname, './input.txt');
// const inputPath: string = path.resolve(__dirname, './test.txt');

enum MoveItems {
  'A' = 1,
  'X' = 1,
  'B' = 2,
  'Y' = 2,
  'C' = 3,
  'Z' = 3,
}

enum Results {
  Win = 6,
  Draw = 3,
  Loss = 0,
}

function readFile(filename: string): string[] {
  return readFileSync(filename, 'utf-8')
    .split(/\r?\n/);
}

function getItems(move: string): string[] {
  return move.split(' '); 
}

function replaceWithNames(letters: string[]): number[] {
  return letters.map(letter => MoveItems[letter]);
}

function getMoveResult(move: number[]): number {
  if (move[0] == move[1]) return Results.Draw + move[1];
  else if (checkWin(move[0], move[1])) return Results.Win + move[1];
  return Results.Loss + move[1];
}

function checkWin(elfMove: number, myMove: number): boolean {
  if ((elfMove == 1 && myMove == 2) 
  || (elfMove == 2 && myMove == 3) 
  || (elfMove == 3 && myMove == 1)){
    return true;
  }
}

const content = readFile(inputPath);
const items = content.map(i => getItems(i));
const numbers = items.map(i => replaceWithNames(i));
const points = numbers.map(n => getMoveResult(n));
const totalPoints = points.reduce((sum: number, num: number) => sum + num, 0);

console.log('\nMoves:');
content.forEach(action => console.log(action));

console.log('\nMoves:');
items.forEach(i => console.log(`Elf: ${i[0]} \tMe: ${i[1]}`));

console.log('\nMoves:');
numbers.forEach(i => console.log(`Elf: ${i[0]} \tMe: ${i[1]}`));

console.log('\nMoves:');
points.forEach(p => console.log(`Move points: ${p}`));

console.log(`\nTotal points: $${totalPoints}`);
