// Reverse Each letter of a sentence.
// 	"Welcome to this Javascript"
// 	"emocleW ot siht tpircsavaJ",
// 2. Remove duplicates from an array i.e [1,2,2,5,7,1] => output [1,2,5,7])
// 3. find first duplicate [3,5,2,3,2] => 3 only return the first duplicate value
// 4. Write a function that checks an array and return what should be the name of new folder Example:
// input: [ "new folder", "new folder (2)"] output : new folder (3)
// input: [ "new folder (3)", "new folder (2)"] output: new folder

//Task 1
const array = ['Welcome to this Javascript'];
console.log(array[0].split('').reverse().join(''));

//Task 2
const duplicate = [3, 5, 2, 3, 2];
console.log(
  duplicate.filter((item, index) => duplicate.indexOf(item) !== index)
);

//Task 3
const firstRepeat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] === arr[x]) {
        return x;
      }
    }
  }
  return -1;
};

const arr = [3, 5, 2, 3, 2];
const index = firstRepeat(arr);

if (index == -1) {
  console.log('No element found');
} else {
  console.log('First repeating element is', arr[index]);
}

//Task 4
const checker = (arr) => {
  let newFolder = 'new folder';

  if (arr.length === 0) {
    return newFolder;
  }

  let num = 2;
  while (arr.includes(newFolder)) {
    newFolder = `new folder (${num})`;
    num++;
  }

  return newFolder;
};

const folder1 = ['new folder', 'new folder (2)'];
const folder2 = ['new folder (3)', 'new folder (2)'];

console.log(checker(folder1));
console.log(checker(folder2));
