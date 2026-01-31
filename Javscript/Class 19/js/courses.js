
// let pageHead = document.getElementById("pageHeading");
// pageHead.innerText = "Singed up Users";

// let users = JSON.parse(localStorage.getItem("userObj"));
// console.log(users);

// let coursesContainer = document.getElementById("coursesContainer");

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching data:', error));

const getUsers = async () =>{
 console.log("inside funtion");

try {
    let response = await fetch('https://fakestoreapi.com/products');
    response = await response.json()
    console.log(response);

    
for(let i=0; i < response.length; i++) {
coursesContainer.innerHTML += `
          <div class="course-card">
            <div class="course-image">
            <img src="${response[i].image}" alt="Course Image">
            </div>
            <div class="course-content">
              <h3>${response[i].title}</h3>
              <p>
                ${response[i].description}
              </p>
               <p>
                ${response[i].price}
              </p>
              <div class="course-meta">
                <span class="course-duration">8 weeks</span>
                <button class="course-btn" onclick=detailsPage(${response[i].id})>See more</button>
              </div>
            </div>
          </div>`
}

} catch (error) {
    console.error('Error fetching data:', error);
}



}
getUsers()

 console.log("outside try catch");


const detailsPage = (id) => {
  console.log("course id is:", id);
  localStorage.setItem("productId", id);
  window.location.href = "../pages/productDetail.html";
}


// JS PROMISES 3 STATES

// PENDING 
// FULFILLED // SUCCESS // RESOLVED
// REJECTED // ERROR
