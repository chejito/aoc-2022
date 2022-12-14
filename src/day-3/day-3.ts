import { readFileLines } from "../helpers/ReadFile";

// const inputPath = '../data/day-3-test.txt' // To test methods
const inputPath = '../data/day-3-input.txt' // To get solutions

const values = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getRepeatedItems = (rucksack: string): string[] => {
  const repeatedItems: string[] = [];
  const partitions = getPartitions(rucksack); 
  let first = partitions[0].split('');
  
  for (let i = 0; i < first.length; i++) {
    let value = first[i];
    if (partitions[1].includes(value) && !repeatedItems.includes(value)){
      repeatedItems.push(value);      
    }
  }
  return repeatedItems;
}

const getPartitions = (rucksack: string): string[]  => {
  const middle = rucksack.length / 2;
  return [rucksack.substring(0, middle), rucksack.substring(middle)]
}

const getItemsPriorities = (items: string[]): number[] => {
  return items.map(i => values.indexOf(i));
}

const getTotalPriority = (priorities: number[]): number => {
  return priorities.reduce((sum: number, current: number) => sum + current, 0);
}

const groupByThree = (rucksacks: string[]): string[][] => {
  const groupSize = 3;  

  return [...Array(Math.ceil(rucksacks.length / groupSize))]
    .map((_, i) => rucksacks.slice(i * groupSize, (i + 1) * groupSize));
}

const findBadge = (group: string[]): string => {
  const first = group[0].split('');
  let badge = '';
  for (let i = 0; i < first.length; i++) {
    let value = first[i];
    if (group[1].includes(value) && group[2].includes(value)){
      badge = value;
    }
  }
  return badge;
}

export const dayThree = () => {
  // Common actions
  const rucksacks = readFileLines(inputPath);
  
  // Part 1 actions
  const repeatedItems = rucksacks.map(r => getRepeatedItems(r));
  const priorities = repeatedItems.map(ri => getTotalPriority(getItemsPriorities(ri)));
  
  // Part 1 solution
  const totalPriorities = getTotalPriority(priorities);
  console.log('\nDay 3 - Part 1 Solution');
  console.log('-----------------------');
  console.log(`Total Priorities: ${totalPriorities}`);
  
  // Part 2 actions
  const badges = groupByThree(rucksacks).map(g => findBadge(g));
  const badgePriorities = getItemsPriorities(badges);
  
  // Part 2 solution
  const totalBadgePriorities = getTotalPriority(badgePriorities);
  console.log('\nDay 3 - Part 1 Solution');
  console.log('-----------------------');
  console.log(`Total Badge Priorities: ${totalBadgePriorities}`);
}

