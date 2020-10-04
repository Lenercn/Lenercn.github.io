///calendar

// document.addEventListener('DOMContentLoaded', function() {
//     formt = dd / mm / yyyy;
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems);
// });
// // Or with jQuery 
// $(document).ready(function() {
//     $('.datepicker').datepicker();
// });
//validar
window.onload = pageLoad;

function pageLoad() {
    let ex = document.getElementById("extraer")
    let col = document.getElementById("colorear")
    col.onclick = colorear;
    ex.onclick = validar, obtenerDatos;

}

function validar() {
    let validar = document.getElementById("apnom").value;
    if (apnom.value == 0) {
        alert("campo nombre vacio")
    }

}
/// segundo entregable extarer
function obtenerDatos() {

    let apnom = document.getElementById("apnom").value;

    let cadnombre = apnom.split(" ");
    for (let index = 0; index < cadnombre.length; index++) {
        if (index >= 2) {
            let snombre = document.getElementById("snombre").value += cadnombre[index] + " ";
        }

    }
    let appat = document.getElementById("appat").value = cadnombre[0];
    let apmat = document.getElementById("apmat").value = cadnombre[1];
    let tamaño = (cadnombre[0].length + cadnombre[1].length);
    document.getElementById("long").value = tamaño;
    //alert("mensaje de alerta" + tamaño);
    let fecha = new Date();
    //   alert("fecha" + fecha);
    fecha = document.getElementById("fecha").value;
    meses = ["Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Setiembre",
        "Octubre",
        "Noviembre",
        "diciemdre"
    ];
    let nmes = fecha.split("-")
    let mes = parseInt(nmes[1] - 1);

    document.getElementById("edad").value = `${ edad(fecha) }`;
    document.getElementById("mes").value = meses[mes];
}
let cambiar = 1;

function colorear() {
    // alert("hola mundo")

    if (cambiar) {
        document.getElementById("azul1").className = "rojo";
        document.getElementById("azul2").className = "rojo";
        document.getElementById("azul3").className = "rojo";
        document.getElementById("azul4").className = "rojo";
        document.getElementById("azul5").className = "rojo";
        document.getElementById("rojo1").className = "azul";
        document.getElementById("rojo2").className = "azul";
        document.getElementById("rojo3").className = "azul";
        document.getElementById("colorear").className = "azul"

        cambiar = 0;
        // alert(cambiar)
    } else {
        document.getElementById("azul1").className = "azul";
        document.getElementById("azul2").className = "azul";
        document.getElementById("azul3").className = "azul";
        document.getElementById("azul4").className = "azul";
        document.getElementById("azul5").className = "azul";
        document.getElementById("rojo1").className = "rojo";
        document.getElementById("rojo2").className = "rojo";
        document.getElementById("rojo3").className = "rojo";
        document.getElementById("colorear").className = "rojo"
        cambiar = 1;
    }

}
edad = (fecha) => {
    var actual = new Date();
    var naci = new Date(fecha);
    var edad = actual.getFullYear() - naci.getFullYear();
    mes = actual.getMonth() - naci.getMonth();
    if (mes < 0 || mes == 0 & actual.getDate() < naci.getDate()) {
        edad;
    }
    return edad;

}