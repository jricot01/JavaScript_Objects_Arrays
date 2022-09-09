console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;

  //find sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let sum1 = arraySum(numbers);
let sum2 = arraySum([1, 2, 3, 4, 5]);

console.log(sum1, sum2);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  readCount: 2,
  info: function () {
    return `${this.title} by ${this.author} is ${this.pages} pages long, 
    and has been read ${this.readCount} time(s).`;
  },
};

book.readCount++;

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

// function to reverse a string
function reverseStr(str) {
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }

  return reversedStr;
}

function reverseWordsFromSentence(sentence) {
  // split a sentence into words
  let words = sentence.split(" ");
  // reverse each word in a array
  let reversedWords = words.map(function (word) {
    return reverseStr(word);
  });

  return reversedWords.join(" ");
}

console.log(reverseWordsFromSentence(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData =
  "name,age,isFellowship\nFrodo,50,true\nSam,38,true\nMerry,36,true\nPippin,26,true\nBilbo,111,false";

console.log(csvData);

function toJSON(input) {
  let dataArr = input.split("\n");

  // get the headers
  let headers = dataArr[0].split(","); // "name,age" -> ["name", "age"]

  // get each record
  // returns a subarray from starting index, to ending index (if not supplied, end of array)
  let records = dataArr.slice(1);

  console.log(headers, records);

  let json = records.map(function (record) {
    let values = record.split(","); // "Frodo,50" -> ["Frodo", "50"]
    let obj = {};

    // add headers a properties on the obj
    // use the header index to grab the corresponding value at the same index
    headers.forEach(function (header, index) {
      obj[header] = values[index];
    });

    return obj;
  });

  return json;
}

let result = toJSON(csvData);
console.log(result);
