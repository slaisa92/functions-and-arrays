        // Iteration 1

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
} console.log(maxOfTwoNumbers(99, 100));

        //Iteration 2

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let longestWord;
  if (words.length === 0){
    return null;

  } else {
    for (let i=0; i < words.length; i++){
      let word = words[i];
      if (!longestWord || longestWord.length < word.length){
      longestWord = word;
  }
    } 
    return longestWord;
  }
} console.log(findLongestWord(words));

        // Iteration 3

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
          let sum = 0
          if (numbers.length === 0){
            return 0;
          } else {
            for (let i = 0; i<numbers.length; i++){
              let number = numbers[i]
              sum += number;
              }
          }
          return sum
        
          } console.log(sumNumbers(numbers));

        // Iteration 3.1 (Bonus)
    
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArr) {
    let countChar = 0;
    let countNum = 0;
    let countBol = 0;
    
    if (mixedArr.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < mixedArr.length; i++) {
        let element = mixedArr[i];
        if (typeof element === 'number') {
          countNum += element;
        } else if (typeof element === 'string') {
          countChar += element.length;
        } else if (typeof element === 'boolean'){
          countBol += element;
        } else {
          throw new Error("Occuer Error");
        }
      }
    }
    let sumNumChar = countChar + countNum+ countBol;
    return sumNumChar;
  } console.log(sum(mixedArr));

        // Iteration 4 part 1

const numbers7 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers7) {
    let sum = 0
    if (numbers7.length === 0){
      return null;
    } else {
      for (let i = 0; i < numbers7.length; i++) {
        let number = numbers7[i];
        sum += number; 
        }
    }
  
    return sum / numbers7.length;
  } console.log(averageNumbers(numbers7));
    
    // Iteration 4 part 2

    const wordsArray = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

    function averageWordLength(wordsArray) {
        let count = 0;
        if (wordsArray.length === 0){
            return null
    }   else {
        for (let i = 0; i < wordsArray.length; i++) {
            let char = wordsArray[i];
            count += char.length;
        }
    }   return count / wordsArray.length;
    } console.log(averageWordLength(wordsArray));
    
        // Iteration 4 part 3

const mixedArray = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {
    let countChar = 0;
    let countNum = 0;
    let countBol = 0;
        if (mixedArray.length === 0){
        return null;
    } else {
        for (let i = 0; i <mixedArray.length; i++){
            let element = mixedArray[i];
      if (typeof element === 'number') {
        countNum += element;
      } else if (typeof element === 'string') {
        countChar += element.length;
      } else if (typeof element === 'boolean'){
        countBol += element;
      } 
    }
  }
  let sumNumChar = countChar + countNum + countBol;
  return sumNumChar / mixedArray.length;
}   console.log(avg(mixedArray));
   
        // Iteration 5

const wordsIndex = [
            'crab',
            'poison',
            'contagious',
            'simple',
            'bring',
            'sharp',
            'playground',
            'poison',
            'communion',
            'simple',
            'bring'
          ];
function uniquifyArray(wordsIndex) {
    let finalArray = [ ];

    if (wordsIndex.length === 0) {
        return null
}   else {
    for (let i = 0; i < wordsIndex.length; i++){
    const words = wordsIndex[i]; 
    if (!finalArray.includes(words)){
        finalArray.push(words);
}
}
} return finalArray;
} console.log(uniquifyArray(wordsIndex));

        // Iteration 6

const word = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(wordsFind, word) {
    if (wordsFind.length === 0){
      return null;
    }else{
      for (let i = 0; i < wordsFind.length; i++) {
        let element = wordsFind[i];
        if (element === word) {
          return true;
        }
      }
    }
      return false;
    } console.log(doesWordExist(word));

        // Iteration 7 

        const words7 = [
            'machine',
            'matter',
            'subset',
            'trouble',
            'starting',
            'matter',
            'eating',
            'matter',
            'truth',
            'disobedience',
            'matter'
          ];
          
          function howManyTimes(wordsCount, word) {
            let count = 0;
            for (let i = 0; i < wordsCount.length; i++){
              element = wordsCount[i];
              if (word === element){
                count++;
              }
            }
            return count;
        } console.log(howManyTimes(words7,'matter'))


        
              








