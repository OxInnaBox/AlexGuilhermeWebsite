const sizeselectbut = document.getElementById("sizeselect");
const velselectbut = document.getElementById("velselect");
const tailselectbut = document.getElementById("tailselect");
const routeselectbut = document.getElementById("routeselect");
const signalselectbut = document.getElementById("signalselect");
const sizeinfo = document.getElementById("sizeinfo");
const velinfo = document.getElementById("velinfo");
const tailinfo = document.getElementById("tailinfo");
const routeinfo = document.getElementById("routeinfo");
const signalinfo = document.getElementById("signalinfo");
const teamtxt = document.getElementById("teams");
const ammotxt = document.getElementById("ammo");
const timetxt = document.getElementById("time");
let time = 10;
let teams = 5;
let ammo = 5;
var t = setInterval(secondPassed, 1000);
timetxt.innerHTML = "Time Remaining: " + time;
teamtxt.innerHTML = "Teams: " + teams;
ammotxt.innerHTML = "Ammo: " + ammo;

function secondPassed() {
    if (time > 0) {
        time--;
        timetxt.innerHTML = "Time Remaining: " + time;
    }
    else clearInterval(t);
    console.log("A")
}
function sizeSelect() {
    sizeselectbut.style.backgroundColor = "steelblue";
    velselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    tailselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    routeselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    signalselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    sizeinfo.style.display= "block";
    velinfo.style.display= "none";
    tailinfo.style.display= "none";
    routeinfo.style.display= "none";
    signalinfo.style.display= "none";
}
function velSelect() {
    sizeselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    velselectbut.style.backgroundColor = "steelblue";
    tailselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    routeselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    signalselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    sizeinfo.style.display= "none";
    velinfo.style.display= "block";
    tailinfo.style.display= "none";
    routeinfo.style.display= "none";
    signalinfo.style.display= "none";
}
function tailSelect() {
    sizeselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    velselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    tailselectbut.style.backgroundColor = "steelblue";
    routeselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    signalselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    sizeinfo.style.display= "none";
    velinfo.style.display= "none";
    tailinfo.style.display= "block";
    routeinfo.style.display= "none";
    signalinfo.style.display= "none";
}
function routeSelect() {
    sizeselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    velselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    tailselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    routeselectbut.style.backgroundColor = "steelblue";
    signalselectbut.style.backgroundColor = "rgb(58, 60, 64)";
    sizeinfo.style.display= "none";
    velinfo.style.display= "none";
    tailinfo.style.display= "none";
    routeinfo.style.display= "block";
    signalinfo.style.display= "none";
}
function signalSelect() {
    sizeselectbut.style.background = "rgb(58, 60, 64)";
    velselectbut.style.background = "rgb(58, 60, 64)";
    tailselectbut.style.background = "rgb(58, 60, 64)";
    routeselectbut.style.background = "rgb(58, 60, 64)";
    signalselectbut.style.backgroundColor = "steelblue";
    sizeinfo.style.display= "none";
    velinfo.style.display= "none";
    tailinfo.style.display= "none";
    routeinfo.style.display= "none";
    signalinfo.style.display= "block";
}
