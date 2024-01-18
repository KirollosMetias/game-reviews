import {getGames} from "./home.js"
getGames();
let cat = document.querySelectorAll('.nav-link')
cat.forEach(category => {
    let navCat = category.getAttribute('data-category');
    category.addEventListener('click' , ()=> {
        getGames(navCat);
    })
});
document.addEventListener("DOMContentLoaded", ()=> {
    let navLinks = document.querySelectorAll(".nav-item .nav-link");

    navLinks.forEach(link=> {
    link.addEventListener("click", ()=> {
        navLinks.forEach(navLink=> {
        navLink.classList.remove("active");
        });
        link.classList.add("active");
    });
    });
});