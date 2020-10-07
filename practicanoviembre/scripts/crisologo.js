let cambiar = 1;
window.onload = pageLoad;


function pageLoad() {
    let lc01 = document.getElementById("l01")
    lc01.onclick = l01;
    let lc02 = document.getElementById("l02")
    lc02.onclick = l02;
    let lc03 = document.getElementById("l03")
    lc03.onclick = l03;
    let lc04 = document.getElementById("l04")
    lc04.onclick = l04;
    /* fecha*/
    let btnt = document.getElementById("bt01")
    btnt.onclick = bt01;
    let btn02 = document.getElementById("btnTur")
    btn02.onclick = btntu;



}
// cambio lectura
function l01() {

    if (cambiar) {
        document.getElementById("01").innerHTML = "Lectura compleda";

        cambiar = 0
    } else {
        document.getElementById("01").innerHTML = "Lectura 3min";

        cambiar = 1;
    }
}

function l02() {

    if (cambiar) {

        document.getElementById("02").innerHTML = "Lectura compleda";
        cambiar = 0
    } else {

        document.getElementById("02").innerHTML = "Lectura 2min";
        cambiar = 1;
    }
}

function l03() {

    if (cambiar) {
        document.getElementById("03").innerHTML = "Lectura compleda";

        cambiar = 0
    } else {
        document.getElementById("03").innerHTML = "Lectura 3min";

        cambiar = 1;
    }
}

function l04() {

    if (cambiar) {

        document.getElementById("04").innerHTML = "Lectura compleda";
        cambiar = 0
    } else {

        document.getElementById("04").innerHTML = "Lectura 5min";
        cambiar = 1;
    }
}
////la fecha y hora actual
function bt01() {
    let fec = new Date();

    if (cambiar) {
        document.getElementById("fec").innerHTML = fec;

        cambiar = 0
    } else {
        document.getElementById("fec").innerHTML = "";

        cambiar = 1;
    }
}
let tabla = document.getElementById("tabla").innerHTML;
document.getElementById("tabla").innerHTML = "";
let orig = document.getElementById("orig").innerHTML;

function
btntu() {
    //alert("sto")
    if (cambiar) {
        document.getElementById("tabla").innerHTML = tabla;
        document.getElementById("orig").innerHTML = "";
        cambiar = 0
    } else {
        document.getElementById("tabla").innerHTML = "";
        document.getElementById("orig").innerHTML = orig;

        cambiar = 1;
    }
}