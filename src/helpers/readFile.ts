import { readFileSync } from 'fs';
import * as path from 'path';

export const readFileLines = (filename: string): string[] => {
  const inputPath: string = path.resolve(__dirname, filename);
  return readFileSync(inputPath, 'utf-8')
    .split(/\r?\n/);
}

export const readFileLinesAsNumbers = (filename: string): number[] => {
  const inputPath: string = path.resolve(__dirname, filename);
  return readFileSync(inputPath, 'utf-8')
    .split(/\r?\n/).map(s => Number(s));
}
