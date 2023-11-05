const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 2000);
})

function folioAll() {
    document.getElementById('Babel').style.display = "grid";
    document.getElementById('JS.dev').style.display = "grid";
    document.getElementById('Repacking').style.display = "grid";
    document.getElementById('HighNoon').style.display = "grid";
    document.getElementById('NCLCC').style.display = "grid";
    document.getElementById('RLBCSA').style.display = "grid";
}

function folioProg() {
    document.getElementById('Babel').style.display = "grid";
    document.getElementById('JS.dev').style.display = "grid";
    document.getElementById('Repacking').style.display = "grid";
    document.getElementById('HighNoon').style.display = "none";
    document.getElementById('NCLCC').style.display = "grid";
    document.getElementById('RLBCSA').style.display = "grid";
}

function folioDes() {
    document.getElementById('Babel').style.display = "grid";
    document.getElementById('JS.dev').style.display = "none";
    document.getElementById('Repacking').style.display = "grid";
    document.getElementById('HighNoon').style.display = "grid";
    document.getElementById('NCLCC').style.display = "none";
    document.getElementById('RLBCSA').style.display = "none";
}

function folioProd() {
    document.getElementById('Babel').style.display = "grid";
    document.getElementById('JS.dev').style.display = "none";
    document.getElementById('Repacking').style.display = "none";
    document.getElementById('HighNoon').style.display = "grid";
    document.getElementById('NCLCC').style.display = "grid";
    document.getElementById('RLBCSA').style.display = "none";
}