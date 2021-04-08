function classToggle() {
    let navs = document.querySelector('.nav-links')

    navs.forEach(nav => nav.classList.toggle('toggleshow'));
}
document.querySelector('.toggle').addEventListener('click', classToggle)


/* let navToggle = document.querySelector('.toggle');
let navs = document.querySelector('.nav-links');

navToggle.addEventListener("click", function() {
    console.log(navs.classList)
    navs.classList.toggle("toggleshow");
} ) */