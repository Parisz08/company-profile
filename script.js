const menuButton = document.querySelector(".menu");
const burgerContainer = document.querySelector(".burgers");
const burgers = document.getElementsByClassName("burger");
const content = document.querySelector(".menu-content");

menuButton.addEventListener("click", () =>{
    burgerContainer.classList.toggle("p-2");XPathExpression
    burgers[0] .classList.toggle("rotate-1");
    burgers[1] .classList.toggle("hide");
    burgers[2] .classList.toggle("rotate-2");
    content.classList.toggle("show");
});

// Notifikasi sederhana menggunakan alert
function showNotification() {
    alert("Ini adalah notifikasi sederhana!");
}

// Panggil fungsi notifikasi saat halaman dimuat
window.onload = function() {
    showNotification();
    showBrowserNotification();
};

// Fungsi untuk mengganti konten sesuai halaman yang diklik
function loadPage(page) {
    const content = document.getElementById('content');

    switch(page) {
        default:
            content.innerHTML = '<h2>Halaman tidak ditemukan!</h2>';
    }
}

// Muat halaman Home secara default
window.onload = function() {
    loadPage('home');
}

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};