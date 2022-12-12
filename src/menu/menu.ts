import * as rl from 'readline';
import { dayOne } from "../day-1/day-1";
import { dayTwo } from "../day-2/day-2";
import { dayThree } from "../day-3/day-3";
import { dayFour } from "../day-4/day-4";
import { dayFive } from "../day-5/day-5";
import { daySix } from "../day-6/day-6";

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
  console.log('\t\t\t.: Advent of Code 2022 Solutions :.\n')
  console.log('1 - Day 1\t6 - Day 6\t11 - Day 11\t16 - Day 16\t21 - Day 21');
  console.log('2 - Day 2\t7 - Day 7\t12 - Day 12\t17 - Day 17\t22 - Day 22');
  console.log('3 - Day 3\t8 - Day 8\t13 - Day 13\t18 - Day 18\t23 - Day 23');
  console.log('4 - Day 4\t9 - Day 9\t14 - Day 14\t19 - Day 19\t24 - Day 24');
  console.log('5 - Day 5\t10 - Day 10\t15 - Day 15\t20 - Day 20\t25 - Day 25');
  console.log('\n\t\t\t\tX - Exit program');

    
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
      
      case '5':
        console.clear();
        dayFive();
        backToMenu();
        break;

      case '6':
        console.clear();
        daySix();
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

