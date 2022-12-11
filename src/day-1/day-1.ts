import { readFileLinesAsNumbers } from "../helpers/ReadFile";

// const inputPath = '../data/day-1-test.txt' // To test methods
const inputPath = '../data/day-1-input.txt'; // To get solutions  

const totalTopThreeSumCalories = (totalCalories: number[]): number[] => {
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

export const dayOne = () => {
  
  let contentArray = readFileLinesAsNumbers(inputPath);
  let totalTopThreeCalories = totalTopThreeSumCalories(contentArray);
  let totalTopThreeCaloriesSum = totalTopThreeCalories.reduce((sum: number, num: number) => sum + num, 0);
  
  console.log('\nDay 1 - Part 1 Solution');
  console.log('-----');
  console.log(`Top 1 elf: ${totalTopThreeCalories[0]} calories` );
  console.log('\nDay 1 - Part 2 Solution');
  console.log('-----');
  console.log(`Top 3 elves: ${totalTopThreeCaloriesSum} calories`);
  console.log('Breakdown:');
  totalTopThreeCalories.forEach((elf, index )=> console.log(`Top ${index + 1}: ${elf} calories`));
}
