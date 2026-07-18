// Cart Counter

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartCount").textContent = cart.length;
let slideIndex = 0;

const slides = document.querySelectorAll(".slides");

showSlides();

function showSlides(){

slides.forEach(slide=>{

slide.style.display="none";

});

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,4000);

}

document.querySelector(".next").addEventListener("click",()=>{

slides[slideIndex-1].style.display="none";

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

});

document.querySelector(".prev").addEventListener("click",()=>{

slides[slideIndex-1].style.display="none";

slideIndex--;

if(slideIndex<1){

slideIndex=slides.length;

}

slides[slideIndex-1].style.display="block";

});