// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let user = prompt("Give me a number")
user = parseInt(user)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let user2 = prompt("Type another number")
user2 = parseInt(user2)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for (let x = user; x <= user2; x++) {
  console.log(x)
}





// PART 2: Averaging an array
// Create an array of numbers 
let numbers = [1, 2, 3, 4, 5]
let sum = 0

// Write a for loop that calculates the sum of the elements 
for (let i = 0; i < numbers.length; i++) {
  let index = numbers[i]
  sum = sum + index


}

console.log(sum)




// Using the sum, calculate the average of all the elements (sum divided by the length of the array)

let average = sum / numbers.length
console.log(average)
