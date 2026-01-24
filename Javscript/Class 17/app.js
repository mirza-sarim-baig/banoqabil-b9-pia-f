// //OBJECTS

let userObj = {
    name:  "Habib",
    email: "habib@gmail.com",
    pass: "12345",
    age: 25,
    city: "chakwal",
    education: {
        inter: "Computer Science",
        degree: "BSCS",
        certification: {
            certificate1: "devops",
            certificate2: "web & app",
            certificate3: "aws",
        }
    }
}

// let userEmail = prompt("Enter your email")
// let userPass = prompt("Enter your password")

// if(userEmail == userObj.email && userPass == userObj.pass){
//     console.log("userEmail prompt:",userEmail)
//     console.log("userObj.email:",userObj.email)
//     console.log("userPass prompt:",userPass)
//     console.log("userObj.pass:",userObj.pass)
//     console.log("You are Logged in")
// }
// else{
//     console.log("userEmail prompt:",userEmail)
//     console.log("userObj.email:",userObj.email)
//     console.log("userPass prompt:",userPass)
//     console.log("userObj.pass:",userObj.pass)
//     console.log("You are not Logged in")
// }

// let getUser = (e)=>{
//     e.preventDefault()
//       const email = document.getElementById("email").value;
//   const pass = document.getElementById("pass").value;

//   console.log(e.target)
//   console.log(email, pass);
// }

// Arrow Functions
// Dom document object model
const getUser = (event) =>{
  event.preventDefault()
  let userEmail = document.getElementById("email")
  let userPass = document.getElementById("pass")
console.log("userEmail",userEmail.value)
  console.log("userPass",userPass.value)
}
