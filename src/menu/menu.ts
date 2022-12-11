import { dayOne } from "../day-1/day-1";
import { dayTwo } from "../day-2/day-2";
import { dayThree } from "../day-3/day-3";
import { dayFour } from "../day-4/day-4";
import * as rl from 'readline';

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const backToMenu = () => {
  readline.question('\nPress any key to return to Menu...', () => {
    menu();
  });
}

export const menu = () => {
  console.clear();
  console.log('.: Advent of Code 2022 Solutions :.\n')
  console.log('\t1 - Day 1');
  console.log('\t2 - Day 2');
  console.log('\t3 - Day 3');
  console.log('\t4 - Day 4');
  console.log('\tX - Exit program');

    
  readline.question('\nSelect an option: ', option => {
    switch (option.toLowerCase()) {
      case '1':
        console.clear();
        dayOne();
        backToMenu();
        break;

      case '2':
        console.clear();
        dayTwo();
        backToMenu();
        break;

      case '3':
        console.clear();
        dayThree();
        backToMenu();
        break;

      case '4':
        console.clear();
        dayFour();
        backToMenu();
        break;

      case 'x':
      console.clear();
      process.exit(0);

      default:
        console.clear();
        menu();
        break;
    }
  });
}

