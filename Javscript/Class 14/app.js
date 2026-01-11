// var userEmail;
// hoistedFunc()
//  Type    Re-Declare      Re-Initialize       Scope
//  var         yes             yes             global/functional
//  let         no              yes             block
//  const       no              yes             block

// const batchNo = 10
// batchNo = 101
// console.log("batchNo",batchNo)

// const userName = "sarim"

//Block Scope
// if(true){ 
// console.log("userName inner",userName)
// }

// console.log("userName outer",userName)

//Functional Scope
function testingScope(){
console.log("userName inner",userName)
}
const userName = "sarim"

testingScope()
console.log("userName outer",userName)


//Error Handling
// try{
// console.log("userName outer",userName)

// }catch(error){
//     console.log(error)
// }

// console.log("Console after error")

// Hoisting
// console.log("userEmail:", userEmail)
// userEmail = "sarim@gmail.com"

// function hoistedFunc(){
//     console.log("I am completely hoisted")
// }

// let user = prompt("Please Enter your name")
// console.log(user)

let num1 = +prompt("enter num1")
let num2 = +prompt("enter num2")

let sum = num1 + num2
console.log("Sum:", num1 + num2)