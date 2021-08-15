
// .reverse()
// Выводит массив в обратном порядке
// let names = ["Aybek","Mirbek","Bnerbek"]
// let result = names.reverse()
// console.log(result)
// console.log(names)
// Метод reverse мутирует исходный массив

// .join()
// Соединяет массив
// let names = ["Aybek","Mirbek","Bnerbek"]
// let result = names.join(" ")
// console.log(result)
// console.log(names)
// В отличии от .reverse(), .join() не мутирует исходный массив

// .sort()
// let numbers = [35,32,35,23,56,23,45]
// let result = numbers.sort((a,b) => a-b)
// console.log(result)
// Применяется только к массивам

// let names = ["Darya","Anna","Boris"]
// let result = names.sort((a,b) => a > b ? 1 : -1 )
// console.log(result)
// Мутирует исходный массив

// Есть функция которая принимает строку определить  явл-ся эта строка Палиндромом

// const isPalindrome = str =>{
//     return str.toLowerCase().split("").reverse().join("") === str.toLowerCase()
// }
// console.log(isPalindrome("topot1"))
// console.log(isPalindrome("anna"))

// const isAnagram = (str1, str2) =>{
//     let word1 = str1.split("").sort((a,b) => a > b ? 1 : -1).join("")
//     let word2 = str2.split("").sort((a,b) => a > b ? 1 : -1).join("")
//     return word1 === word2
// }
// console.log(isAnagram("банка", "кабан"))
// console.log(isAnagram("банк","кабан"))


// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const task = num =>{
//     return num.map((item) =>{
//         if (item % 3 === 0 && item % 5 === 0){
//             return "FizzBuzz"
//         }
//         else if (item % 5 === 0 ){
//             return "Buzz"
//         }
//         else if (item % 3 === 0){
//             return "Fizz"
//         }
//         return item
//     })
// }
// console.log(task([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))


// function opposite(number) {
//     //your code here
//     return -number
// }
// console.log(opposite(5))


// function basicOp(operation, value1, value2) {
//     if (operation === "+"){
//         return value1 + value2
//     } else if (operation === "-"){
//         return value1 - value2
//     } else if (operation === "*"){
//         return value1 * value2
//     }
//         return value1 / value2
// }
//
// console.log(basicOp('+', 4, 7))

// function rentalCarCost(d) {
//      if (d >= 7){
//          return d * 40 -50
//      } else if (d >= 3){
//          return d * 40 - 20
//      }
//      return d * 40
// }
//
// console.log(rentalCarCost(10))


// function array(arr){
//     if (arr.split(",").length < 3){
//         return null
//     }
//     return arr.split(",").slice(1,-1).join(" ")
// }
// console.log(array("1,2,3,4"))


//HW
// task1
// function solution(str){
//     return str.split("").reverse().join("")
// }
// console.log(solution("world"))

// task2
// function removeChar(str){
//     return str.slice(1,str.length -1)
// }
//
// console.log(removeChar("Привет"))

// task3
// function isPalindrome(line) {
//     return line.toLowerCase().split("").reverse().join("") === line.toLowerCase()
// }
//
// console.log(isPalindrome("Makam"))
// console.log(isPalindrome("Anna"))

// task4
// var isAnagram = function(test, original) {
//     return test.split("").sort((a,b) => a > b ? 1 : -1).join("") === original.split("").sort((a,b) => a > b ? 1 : -1).join("")
// };
// console.log(isAnagram("добро","бодро"))

// task5
// function even_or_odd(number) {
//     if ( number % 2 === 0){
//         return "Even"
//     }
//     return "Odd"
// }
// console.log(even_or_odd(35))

// task6
// function century(year) {
//     return Math.ceil(year/100)
// }
// console.log(century(1800))

// task7
// function findDup( arr ){
//
// }
//
// console.log(findDup([3, 2, 5, 1, 3, 4]))

// function distinct(a) {
//     return a.filter((item,idx) => a.indexOf(item) === idx)
// }
//
// console.log(distinct([33,9,87,22,33,22,9]))

// task9
// function positiveSum(arr) {
//     return arr.filter((item) => item > 0).reduce((acc,item) => acc + item,0)
// }
// console.log(positiveSum([2,19,-87,74]))


// task10
// function fizzbuzz(n) {
// let array = Array(n).fill(0).map((item, idx) => idx +1)
//     return array.map(item =>{
//         if (item % 15 === 0){
//             return "FizzBuzz"
//         } else if (item % 3 === 0){
//             return "Fizz"
//         } else if (item % 5 === 0){
//             return "Buzz"
//         }
//         return item
//     })
// }
// console.log(fizzbuzz(5))

// task11
// function squareDigits(num){
//     return +num.toString().split("").map((item) => item * item).join("")
// }
// console.log(squareDigits(25648136))


// Find
// const findDup = (arr) =>{
//     return arr.find((item, idx) =>{
//         if (arr.indexOf(item) !== idx){
//             return item
//         }
//     })
// }
// console.log(findDup([1,4,2,3,2,5,6]))
