// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// a function that takes in an array of objects
const sentenceMaker = (object) => {
  //iterate thru object
  let sentence = object.map(value =>{
    //for each string name, split into array so we can map
    let person = value.name.split(" ")
    //map through array of first and last names to capitalize
    let capitalizedName = person.map( (name) => {
          //concat string of slices with first index capitalized
          return name[0].toUpperCase().concat(name.slice(1))
        }).join(" ")
          //for each value, string interpolate
        return `${capitalizedName} is a ${value.occupation}.`
  }).join(" ")
  return sentence
}

console.log(sentenceMaker(people));

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// takes in a mixed data array
const moduloThree = (array) => {
  //filters for type of integer only
  let numbersOnly = array.filter(value => {
    return typeof value === "number"
  })
  // map thru and returm modulo 3 
  return numbersOnly.map(number => {
    return number % 3
  })
}

console.log(moduloThree(testingArray1));
console.log(moduloThree(testingArray2));



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//a function that takes in two arrays as arugments
const noDuplicates = (arr1, arr2) => {
  //we had this challenge for week 4, so I'm going to try to utilize Sarah's tip from last assessment!
  //as per Sarah's advice, create a final array that concats arr1 and arr2
  let finalArr = arr1.concat(arr2)
  //from Sarah's advice, use a higher order function with a built in "if" => filter
  return finalArr.filter((value, index) =>{
    //only return values if they're not already present in finalarr
    //use indexOf to find first instance of that value
    //if indexOf value === current index, then current index is the first time that value is seen
    //thus, keep that value only and no future instances of value
    return finalArr.indexOf(value) === index
  })

}

console.log(noDuplicates(testingArray3, testingArray4));