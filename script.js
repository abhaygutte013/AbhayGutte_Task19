const services = [

{
name:"Dry Cleaning",
price:200,
img:"https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600"
},

{
name:"Ironing",
price:50,
img:"https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600"
},

{
name:"Wash And Fold",
price:150,
img:"https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600"
},

{
name:"Stain Removal",
price:500,
img:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600"
}

];

let index = 0;
let total = 0;
let count = 1;

function displayService(){

document.getElementById("serviceName").innerText =
services[index].name;

document.getElementById("servicePrice").innerText =
"₹" + services[index].price;

document.getElementById("serviceImg").src =
services[index].img;
}

function addService(){

const tbody =
document.getElementById("cartBody");

let row = tbody.insertRow();

row.insertCell(0).innerText = count++;
row.insertCell(1).innerText = services[index].name;
row.insertCell(2).innerText = "₹" + services[index].price;

total += services[index].price;

document.getElementById("total").innerText = total;

skipService();
}

function skipService(){

index++;

if(index >= services.length){
index = 0;
}

displayService();
}

function bookNow(){

let name =
document.getElementById("fullName").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let message =
document.getElementById("bookingMessage");

if(name === "" || email === "" || phone === ""){

message.style.display = "block";
message.className = "error";
message.innerHTML = "Please fill all details.";
return;
}

if(total === 0){

message.style.display = "block";
message.className = "error";
message.innerHTML = "Please add at least one service.";
return;
}

document.getElementById("displayUser").innerText =
name;

localStorage.setItem("username",name);

message.style.display = "block";
message.className = "success";

message.innerHTML =
"Booking Successful!<br>" +
"Customer Name : " + name +
"<br>Total Amount : ₹" + total;
}

function logoutUser(){

document.getElementById("displayUser").innerText =
"Guest";

localStorage.removeItem("username");

document.getElementById("fullName").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";

document.getElementById("cartBody").innerHTML = "";

document.getElementById("bookingMessage").style.display =
"none";

total = 0;
count = 1;

document.getElementById("total").innerText = "0";
}

window.onload = function(){

let savedUser =
localStorage.getItem("username");

if(savedUser){
document.getElementById("displayUser").innerText =
savedUser;
}

displayService();
}