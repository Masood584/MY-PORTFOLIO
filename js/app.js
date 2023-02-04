
function onClick() {
    alert("das");
}

let humberger = document.querySelector("#humberger");
humberger.onclick = function () {

    let navbar = document.querySelector("#navbar-links");
    navbar.classList.toggle("active")
}