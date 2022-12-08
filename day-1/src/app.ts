import { readFileSync } from 'fs';
import * as path from 'path';

const inputPath: string = path.resolve(__dirname, './input.txt');

function readFile(filename: string): number[] {
  return readFileSync(filename, 'utf-8')
    .split(/\r?\n/)
    .map(line => Number(line));
}

function totalTopThreeSumCalories(totalCalories: number[]): number[] {
  let sumCaloriesArray: number[] = [];
  let sumIndividualCalories = 0;  
  
  totalCalories.forEach(calories => {
    if (calories == 0) {
      sumCaloriesArray.push(sumIndividualCalories);
      sumIndividualCalories = 0;
    } else {
      sumIndividualCalories += calories;
    }
  });

  return sumCaloriesArray.sort().reverse().slice(0, 3);  
}

let contentArray = readFile(inputPath);
let totalTopThreeCalories = totalTopThreeSumCalories(contentArray);
let totalTopThreeCaloriesSum = totalTopThreeCalories.reduce((sum: number, num: number) => sum + num, 0);

console.log(`Top 1 elf: ${totalTopThreeCalories[0]} calories` );
console.log(`Top 3 elves: ${totalTopThreeCaloriesSum} calories`);
console.log('Breakdown:');
totalTopThreeCalories.forEach((elf, index )=> console.log(`Top ${index + 1}: ${elf} calories`));
