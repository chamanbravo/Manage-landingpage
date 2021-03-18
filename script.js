var menu = document.querySelector(".menu");
var btn = document.querySelector(".fa-bars");
var closebtn = document.querySelector(".fa-times");
var overlay = document.querySelector(".overlay");
var body = document.querySelector("body");

btn.addEventListener("click", showMenu);
closebtn.addEventListener("click", closeMenu);

function showMenu(){
	overlay.style.opacity = "0.5";
	menu.style.display = "unset";
	body.style.overflow = "hidden";
	closebtn.style.display = "unset";
	btn.style.display = "none"
}

function closeMenu(){
	overlay.style.opacity = "0";
	menu.style.display = "none";
	body.style.overflow = "unset";
	btn.style.display = "unset";
	closebtn.style.display = "none";
}

