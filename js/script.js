let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');I
}

let serchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    serchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');I
    
}

let cartItem = document.querySelector('.cart-items-container'); 

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
   
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');I
    
    }