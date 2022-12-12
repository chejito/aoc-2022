import { readFileLines } from "../helpers/ReadFile";

// const inputPath = '../data/day-4-test.txt' // To test methods
const inputPath = '../data/day-4-input.txt' // To get solutions

const getSplittedPairs = (pairs: string[]): number[][][] => {
  return pairs.map(pair => getPairAsNumbers(pair));
}

const getPairAsNumbers = (pair: string): number[][] => {
  return pair.split(',').map(zones => getZonesAsNumbers(zones));
}

const getZonesAsNumbers = (zones: string): number[] => {
  return zones.split('-').map(zone => Number(zone));
}

const getAllPairZoneRanges = (pairs: number[][][]): number[][][] => {
  return pairs.map(pair => getPairZoneRanges(pair));
}

const getPairZoneRanges = (zonesPair: number[][]): number[][] => {
  return zonesPair.map(zones => getZoneRange(zones));
} 

const getZoneRange = (zones: number[]): number[] => {
  const size = zones[1] - zones[0] + 1;
  const startAt = zones[0];
  return range(size, startAt);
}

const range = (size: number, startAt = 0): number[] => {
  return [...Array(size).keys()].map(i => i + startAt);
}

const getFullyContainedPairs = (pairs: number[][][]): number => {
  const fullyContainedPairs = pairs.filter(pair => isFullyContained(pair[0], pair[1]));     
  return fullyContainedPairs.length;
}

const isFullyContained = (first: number[], second: number[]): boolean => {
  return second.every(zone => first.includes(zone)) || first.every(zone => second.includes(zone));
}

const getOverlappedPairs = (pairs: number[][][]): number => {
  const overlappedPairs = pairs.filter(pair => isOverlapped(pair[0], pair[1]));     
  return overlappedPairs.length;
}

const isOverlapped = (first: number[], second: number[]): boolean => {
  return second.some(zone => first.includes(zone)) || first.some(zone => second.includes(zone));
}

export const dayFour = () => {

  console.clear();
  // Common actions
  const pairs = readFileLines(inputPath);
  const splittedPairs = getSplittedPairs(pairs);
  const rangePairs = getAllPairZoneRanges(splittedPairs);
  
  // Part 1 actions
  const fullyContaineds = getFullyContainedPairs(rangePairs);

  
  // Part 1 solution
  console.log('\nDay 4');
  console.log('\nPart 1 Solution');
  console.log('---------------');
  console.log(`Fully contained assignment pairs: ${fullyContaineds}`);
  
  // Part 2 actions
  const overlapped = getOverlappedPairs(rangePairs);  
  // Part 2 solution:  
  console.log('\nPart 2 Solution');
  console.log('---------------');
  console.log(`Overlapped assignment pairs: ${overlapped}`);
}

