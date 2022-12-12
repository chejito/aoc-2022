import { readFileLines } from "../helpers/ReadFile";

// const inputPath = '../data/day-5-test.txt' // To test methods
const inputPath = '../data/day-5-input.txt' // To get solutions

const cleanDrawingLines = (lines: string[]): string[][] => {
  return lines.map((line: string) => cleanDrawingLine(line)).reverse();
}

const cleanDrawingLine = (line: string): string[] => {
  line += ' ';
  const chunkSize = 4;
  let lineArray = chunkString(line, chunkSize);
  return lineArray.map(item => item[1]); 
}

function chunkString(str: string, length: number): string[] {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

const createStacks = (drawingLines: string[][]): string[][] => {
  const stackNumber = drawingLines[0].length;  
  const stacks: string[][] = initSatcksArray(stackNumber);
  drawingLines.forEach((line) => {
    line.forEach((item, itemIndex) => {
      if (item != ' ') {
        stacks[itemIndex].push(item);
      }
    })
  });
  return stacks;
}

const initSatcksArray = (stackNumber: number): string[][] => {
  const stacks: string[][] = [];
  for (let i = 0; i < stackNumber; i++) {
    const stack: string[] = [];
    stacks.push(stack);
  }
  return stacks;
}

const cleanProcedure = (procedure: string[]): number[][] => {
  procedure.shift();
  return procedure.map((move: string) => cleanMove(move));
}

const cleanMove = (move: string): number[] => {
  return move.trim()
    .split(' ')
    .filter((_, index) => index % 2 != 0)
    .map(item => Number(item));
}

const processProcedureOneCrateAtATime = (
  procedure: number[][],
  stacks: string[][]): string[][] => {
    
    let resultStacks = initSatcksArray(stacks.length);
    procedure.forEach(move => resultStacks = processMoveOneAtATime(move, stacks));
    return resultStacks;
}

const processProcedureAllCratesAtATime = (
  procedure: number[][],
  stacks: string[][]): string[][] => {
    
    let resultStacks = initSatcksArray(stacks.length);
    procedure.forEach(move => resultStacks = processMoveAllAtATime(move, stacks));
    return resultStacks;
}

const processMoveOneAtATime = (move: number[], stacks: string[][]): string[][] => {
  const stacksOffset = 1;
  const cratesQuantity = move[0];
  const originStack = move[1] - stacksOffset;
  const destinationStack = move[2] - stacksOffset;
  for (let i = 0; i < cratesQuantity; i++) {
    const crate = stacks[originStack].pop();
    stacks[destinationStack].push(crate);  
  }  
  return stacks;
}

const processMoveAllAtATime = (move: number[], stacks: string[][]): string[][] => {
  const stacksOffset = 1;
  const cratesQuantity = move[0];
  const originStack = move[1] - stacksOffset;
  const destinationStack = move[2] - stacksOffset;  
  const cutPoint = stacks[originStack].length - cratesQuantity;
  const movedCrates = stacks[originStack].splice(cutPoint, cratesQuantity);
  stacks[destinationStack].push(...movedCrates);
  return stacks;
}

const getTopCrates = (stacks: string[][]): string => {
  return stacks.map(stack => stack.pop()).join('');
}

export const dayFive = () => {
  console.clear();

  // Common actions
  const input = readFileLines(inputPath);
  const stacksLine = input.filter((line: string) => line.startsWith(' 1'));
  const stacksIndex = input.indexOf(stacksLine[0]);
  const drawing = input.slice(0, stacksIndex);
  const procedure = input.slice(stacksIndex + 1);
  const stacks = cleanDrawingLines(drawing);
  const cleanedProcedure = cleanProcedure(procedure);
  
  // Part 1 actions
  const initialStacks1 = createStacks(stacks); 
  processProcedureOneCrateAtATime(cleanedProcedure, initialStacks1);
  const result1 = getTopCrates(initialStacks1);  
  
  // Part 1 solution
  console.log('\nDay 5');
  console.log('\nPart 1 Solution');
  console.log('---------------');
  console.log(`Final crates: ${result1}`);
  
  
  // Part 2 actions
  const initialStacks2 = createStacks(stacks);
  processProcedureAllCratesAtATime(cleanedProcedure, initialStacks2);
  const result2 = getTopCrates(initialStacks2);
  
  // Part 2 solution:  
  console.log('\nPart 2 Solution');
  console.log('---------------');
  console.log(`Final crates: ${result2}`);
  
}




