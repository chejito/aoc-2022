import { readFileLines } from "../helpers/ReadFile";

// const inputPath = '../data/day-6-test.txt' // To test methods
const inputPath = '../data/day-6-input.txt' // To get solutions

// To test methods
// const getAllMarkers = (codes: string[]): string => {
//   let result = '';
//   codes.forEach(code => result += getStartOfMarker(code, 4));
//   return result;
// }

const getStartOfMarker = (input: string, markerLength: number): number => {
  const offset = markerLength - 1;
  for (let i = 0; i < input.length - offset; i++) {
    const last = i + offset + 1;
    const chunk = input.slice(i, last);
    // const repeated = chunk.split('').filter(char => isRepeated(char, chunk));
    if (chunk.split('').filter(char => isRepeated(char, chunk)).length == 0) return last;
  }
  return -1;
} 

const isRepeated = (char: string, chunk: string): boolean => {
  return (chunk.split(char).length - 1) > 1
}

export const daySix = () => {
  console.clear();

  // Common actions
  const input = readFileLines(inputPath)[0];
  
  // Part 1 actions
  const charsBeforePacketMarker = getStartOfMarker(input, 4);

  // Part 1 solution
  console.log('\nDay 6');
  console.log('\nPart 1 Solution');
  console.log('---------------');
  console.log(`Characters before Marker: ${charsBeforePacketMarker}`);
  // Part 2 actions
  const charsBeforeMessageMarker = getStartOfMarker(input, 14);
    
  // Part 2 solution:  
  console.log('\nPart 2 Solution');
  console.log('---------------');
  console.log(`Characters before Marker: ${charsBeforeMessageMarker}`);
}
