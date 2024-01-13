// let n='Pakistan';
// function reverseString(inputString){
// let reverseStr='';
//     for(let i=inputString.length-1;i>=0;i--){
//     reverseStr+=inputString[i]
// }
// return reverseStr
// }
// let reverseStr=reverseString(n);
// console.log(reverseStr)




// function vowelcount(input){
// let count=0;
// const vowels="aeiouAEIOU";
// for(let i=0;i<input.length;i++){
//     if(vowels.includes(input[i])){
//         count++;
//     }
// }
// return count;
// }

// let strvowel=vowelcount("pakistan");
// console.log(strvowel)




// let n="pakistan is our country"
// const capitalize = (string)=>{
// return string.replace(/\b\w/g,char=>char.toUpperCase())
// }
// const capitalizesentence=capitalize(n);
// console.log(capitalizesentence)


// let arr=[-1,1,2,3,4,5,-5]
// let sum=0;
// for (let i in arr){
// if( arr[i]>=0){
//     sum+=arr[i];
// }
// }
// console.log(sum)


// let arr=[1,2,3,4,5]
// const elementFind=1
// const index= arr.indexOf(elementFind)
// if(index!== -1){
//     console.log(`Index of ${elementFind} is ${index}`)
// }
// else console.log(`not found`)


// let array1 = [1,2,3,4,5,1,3]; 
// function duplicateArray (arr) {
//     let uniqueArray = [];

//     for(let i=0 ; i<arr.length; i++){
//         if(uniqueArray.indexOf(arr[i]) === -1){
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// let newArr = duplicateArray(array1)
// console.log(newArr)



// let arr = [1, 22, 88, 11, 33];
// let ascending = [...arr]; 
// let descending = [...arr];


// for (let i = 0; i < ascending.length - 1; i++) {
//   for (let j = 0; j < ascending.length - 1 - i; j++) {
//     if (ascending[j] > ascending[j + 1]) {

//       let temp = ascending[j];
//       ascending[j] = ascending[j + 1];
//       ascending[j + 1] = temp;
//     }
//   }
// }


// for (let i = 0; i < descending.length - 1; i++) {
//   for (let j = 0; j < descending.length - 1 - i; j++) {
//     if (descending[j] < descending[j + 1]) {

//       let temp = descending[j];
//       descending[j] = descending[j + 1];
//       descending[j + 1] = temp;
//     }
//   }
// }

// console.log("Ascending:", ascending);
// console.log("Descending:", descending);


// let number=1;
// while(number<=20){

// if(number%2 == 0){
//     console.log(number)

// }

//     number++
// }

// let number=3;
// let factorial=1;
// do{
//     factorial=number*factorial
//     number--
    
// }
// while(number>0)
// console.log(factorial)

// let object = [
//     {name:'Safwan', university:'Zalim Habib'},
//     {name:'Shaffan', university:'TIBU'},
// ];
// for(let i in object){
//     console.log(object[i].name + '\t  studied in \t'+  object[i].university)
// }


// let originalArray = [1, 2, 3, 4, 5];
// let doubledArray = [];

// for (let element of originalArray) {
//   doubledArray.push(element * 2);
// }

// console.log(doubledArray);


 
//  const checknumber=(number)=>{
//  if(number%2 == 0){
//      console.log(number+" number is even")
     
//     }
//     else
//     console.log(number+"number is odd")
//  }
//  checknumber(21)



// let num1 = 8;
// let num2 = 12;
// let num3 = 6;

// let maxNumber = num1 > num2  ? (num1 > num3 ? num1 : num3)  : (num2 > num3 ? num2 : num3);

// console.log("The maximum number is:", maxNumber);




// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   // Example usage:
//   let yearToCheck = 2024;
//   console.log(yearToCheck + " is a leap year: " + isLeapYear(yearToCheck));
  
