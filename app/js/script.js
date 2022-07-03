//pre loaddder 

const loadder = document.getElementById("preloadder");

window.addEventListener("load",()=>{
    loadder.style.display = "none";
});


// nav bar 
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('primary-navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'primary-navbar' ){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    };
};

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
})