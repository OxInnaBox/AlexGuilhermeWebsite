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
const sizetxt = document.getElementById("size");
const veltxt = document.getElementById("vel");
const tailtxt = document.getElementById("tail");
const routetxt = document.getElementById("route");
const signaltxt = document.getElementById("signal");
const lost = document.getElementById("losttxt");
let time = 10;
let teams = 5;
let ammo = 5;
let objType;
let unknown;
let size;
let vel;
let tail;
let route;
let signal;
var t;
let rescuedships = 0;
let threatshot = 0;
let score = -1;
let threatcount = 0;
let rescuecount = 0;
let milestone = 9;

console.log("scriptloaded");

/*Time Logic*/;
timetxt.innerHTML = "Time Remaining: " + time;
teamtxt.innerHTML = "Teams: " + teams;
ammotxt.innerHTML = "Ammo: " + ammo;
function secondPassed() {
    if (time < 7) {
        unknown = 0;
        setText();
    }
    if (time > 0) {
        time--;
        timetxt.innerHTML = "Time Remaining: " + time;
    }
    else {
        clearInterval(t);
        lost.innerHTML = "Your time has run out."
        gameOver();
    };
}

/*Tab Logic*/
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

/*Game Logic*/

function play() {
    score = -1;
    console.log("play started");
    newObject();
    document.getElementById("menu").style.display = "none";
    document.getElementById("gamecontainer").style.display = "block";
    document.getElementById("lost").style.display = "none";
    rescuedships = 0;
    threatshot = 0;
    document.getElementById("eliminated").innerHTML = "Threats eliminated: " + threatshot;
    document.getElementById("rescued").innerHTML = "Ships rescued: " + rescuedships;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function newObject() {
    if (rescuecount < 5) {
        objType = randomInt(1, 6);
    }
    else {
        objType = randomInt(4, 6);
    }
    unknown = randomInt(0, 2);
    console.log(objType);
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;

    if (score > milestone) {
        ammo = ammo + 5;
        teams = teams + 5;
        ammotxt.innerHTML = "Ammo: " + ammo;
        teamtxt.innerHTML = "Teams: " + teams;
        threatcount = 0;
        rescuecount = 0;
        milestone = milestone + 10;
    }

    if (objType == 1) {
        rescuecount++;
        size = randomInt(50, 91);
        vel = randomInt(40, 61);
        tail = 0;
        route = randomInt(0, 2);
        signal = 0;
    }
    if (objType == 2) {
        rescuecount++;
        size = randomInt(40, 61);
        vel = randomInt(10, 21);
        tail = 0;
        route = randomInt(0, 2);
        signal = 0;
    }
    if (objType == 3) {
        rescuecount++;
        size = randomInt(600, 1301);
        vel = randomInt(1, 6);
        tail = 0;
        route = randomInt(0, 2);
        signal = 0;
    }
    if (objType == 4) {
        size = randomInt(500, 1601);
        vel = randomInt(10, 101);
        tail = 0;
        route = 2;
        if (threatcount < 5) {
            signal = randomInt(1, 3);
            if (signal == 1) {
                threatcount++;
            }
        }
        else {
            signal = 2;
        }
    }
    if (objType == 5) {
        size = randomInt(100, 1301);
        vel = randomInt(10, 71);
        tail = 1;
        if (threatcount < 5) {
            route = randomInt(0, 2);
            if (signal == 0) {
                threatcount++;
            }
        }
        else {
            route = 1;
        }
        signal = 3;
    }

    setText();
    clearInterval(t);
    timetxt.innerHTML = "Time Remaining: 10";
    time = 10;    
    t = setInterval(secondPassed, 1000);

}

function setText() {
    sizetxt.innerHTML = "Size: " + size + "m";
    veltxt.innerHTML = "Velocity: " + vel + "km/s";

    if (unknown == 0) {
        if (tail == 1) {
            tailtxt.innerHTML = "Tail: Contains tail";
        }
        else {
            tailtxt.innerHTML = "Tail: None";
        }
        if (route == 0) {
            routetxt.innerHTML = "Route: Collision";
        }
        if (route == 1) {
            routetxt.innerHTML = "Route: Passing";
        }
        if (route == 2) {
            routetxt.innerHTML = "Route: Unclear";
        }
        if (signal == 0) {
            signaltxt.innerHTML = "Signal: Rescue";
        }
        if (signal == 1) {
            signaltxt.innerHTML = "Signal: Enemy";
        }
        if (signal == 2) {
            signaltxt.innerHTML = "Signal: Peaceful";
        }
        if (signal == 3) {
            signaltxt.innerHTML = "Signal: None";
        }
    }

    if (unknown == 1) {
        tailtxt.innerHTML = "Tail: Unknown";
        routetxt.innerHTML = "Route: Unknown";
        signaltxt.innerHTML = "Signal: Unknown";
    }
}

function rescue() {
    if (teams > 0) {
        teams--;
        teamtxt.innerHTML = "Teams: " + teams;
        if (objType == 1) {
            rescuedships++;
            document.getElementById("rescued").innerHTML = "Ships rescued: " + rescuedships;
            newObject();
        }
        else if (objType == 2) {
            rescuedships++;
            document.getElementById("rescued").innerHTML = "Ships rescued: " + rescuedships;
            newObject();
        }
        else if (objType == 3) {
            rescuedships++;
            document.getElementById("rescued").innerHTML = "Ships rescued: " + rescuedships;
            newObject();
        }
        else if (route == 0) {
            console.log("collided");
            gameOver();
            lost.innerHTML = "You let an asteroid pass and it destroyed your world."
        }
        else if (signal == 1) {
            console.log("enemy attack");
            gameOver();
            lost.innerHTML = "You let an enemy ship pass and your world was destroyed."
        }
        else {
            newObject();
        }
    }
}

function pass() {
    if (route == 0) {
        console.log("collided");
        gameOver();
        lost.innerHTML = "You let an asteroid pass and it destroyed your world."
    }
    else if (signal == 1) {
        console.log("enemy attack");
        gameOver();
        lost.innerHTML = "You let an enemy ship pass and your world was destroyed."
    }
    else {
        newObject();
    }
}

function shoot() {
    if (ammo > 0) {
        ammo--;
        ammotxt.innerHTML = "Ammo: " + ammo;
        if (objType == 1) {
            console.log("shot rescue");
            gameOver();
            lost.innerHTML = "You have shot a ship that needed rescue."
        }
        else if (objType == 2) {
            console.log("shot rescue");
            gameOver();
            lost.innerHTML = "You have shot a ship that needed rescue."
        }
        else if (objType == 3) {
            console.log("shot rescue");
            gameOver();
            lost.innerHTML = "You have shot a ship that needed rescue."
        }
        else if (signal == 2) {
            console.log("shot ally");
            gameOver();
            lost.innerHTML = "You have shot an allied alien ship, and caused another war."
        }
        else {
            console.log("shot threat");
            threatshot++;
            document.getElementById("eliminated").innerHTML = "Threats eliminated: " + threatshot;
            newObject();
        }
    }
}

function gameOver() {
    document.getElementById("finalscore").innerHTML = "Final Score: " + score;
    clearInterval(t);
    document.getElementById("menu").style.display = "none";
    document.getElementById("gamecontainer").style.display = "none";
    document.getElementById("lost").style.display = "block";
}