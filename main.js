/* /* function classToggle() {
    let navs = document.querySelectorAll('.nav-links > li')

    navs.forEach(nav => nav.classList.toggle("toggleshow"));
}
document.querySelector('.toggle').addEventListener('click', classToggle)

 let navToggle = document.querySelector('.toggle');
let navs = document.querySelector('.nav-links > li');

navToggle.addEventListener("click", function() {
    console.log(navs.classList)
    navs.classList.toggle("toggleshow");
} )  */
let toggle = 0;

function classToggle() {
    let nav= document.querySelector('#nav-links');
    let navLists = document.querySelectorAll('.nav-links > li');

    toggle += 1;
    if(toggle === 0) {
        nav.classList.add('display-none');
        navLists.forEach(navLi => navLi.classList.add('display-none'));
    }

    if (toggle ===1) {
        toggle = -1;
        nav.classList.remove('display-none');
        navLists.forEach(navLi => navLi.classList.remove('display-none'));
    }

    nav.classList.toggle('absolute-and-visible-class');
    navLists.forEach(navLi => navLi.classList.toggle('display-block'));
}
document.querySelector('.toggle').addEventListener('click', classToggle)