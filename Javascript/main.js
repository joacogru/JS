// let hoyo1 = prompt("Ingrese Hoyo 1");
/* let nombre = prompt("ingresa tu nombre y apellido");
let hoyo1 = parseInt(prompt("Hoyo 1"));
let hoyo2 = parseInt(prompt("Hoyo 2"));
let hoyo3 = parseInt(prompt("Hoyo 3"));
let hoyo4 = parseInt(prompt("Hoyo 4"));
let hoyo5 = parseInt(prompt("Hoyo 5"));
let hoyo6 = parseInt(prompt("Hoyo 6"));
let hoyo7 = parseInt(prompt("Hoyo 7"));
let hoyo8 = parseInt(prompt("Hoyo 8"));
let hoyo9 = parseInt(prompt("Hoyo 9"));
let hoyo10 = parseInt(prompt("Hoyo 10"));
let hoyo11 = parseInt(prompt("Hoyo 11"));
let hoyo12 = parseInt(prompt("Hoyo 12"));
let hoyo13 = parseInt(prompt("Hoyo 13"));
let hoyo14 = parseInt(prompt("Hoyo 14"));
let hoyo15 = parseInt(prompt("Hoyo 15"));
let hoyo16 = parseInt(prompt("Hoyo 16"));
let hoyo17 = parseInt(prompt("Hoyo 17"));
let hoyo18 = parseInt(prompt("Hoyo 18"));
let ida = hoyo1 + hoyo2 + hoyo3 + hoyo4 + hoyo5 + hoyo6 + hoyo7 + hoyo8 + hoyo9;
let vuelta = hoyo10 + hoyo11 + hoyo12 + hoyo13 + hoyo14 + hoyo15 + hoyo16 + hoyo17 + hoyo18; 
let total = ida + vuelta;


if (ida < 36) {
    console.log("El/la jugador/a " + nombre + " realizo un score bajo par en la ida con un total de " + ida + " golpes.");
} else if (ida === 36) {console.log("El/la jugador/a " + nombre + " realizo un score de par de cancha en la ida con un total de " + ida + " golpes.")
} else {
    console.log("El/la jugador/a " + nombre + " realizo un score sobre par en la ida con un total de " + ida + " golpes.")
};

if (vuelta < 36) {
    console.log("El/la jugador/a " + nombre + " realizo un score bajo par en la vuelta con un total de " + vuelta + " golpes.");
} else if (vuelta === 36) {console.log("El/la jugador/a " + nombre + " realizo un score de par de cancha en la vuelta con un total de " + vuelta + " golpes.")
} else {
    console.log("El/la jugador/a " + nombre + " realizo un score sobre par en la vuelta con un total de " + vuelta + " golpes.")
};

if (total < 72) {
    alert("FELICITACIONES! " + nombre + " por la vuelta de " + total + " golpes");
} else if (total === 72) {
    alert("EXCELENTE! " + nombre + " por conseguir el par de cancha con " + total + " golpes")
} else if (total <= 80) {
    alert("A seguir entrenando " + nombre + "que vas por buen camino con la vuelta realizada de " + total + " golpes")
} else {
    alert ("BURROOOOOOOOOOOOOOOOO dejá el golf por el bien de todos!")
};
 */
/* let malaSuerte = 13;


for (let i = 0; i < 15; i++) {
    if (i === malaSuerte) {
        continue;
    } else if (i === 7){
        console.log(i + " es el numero de la BUENA SUERTE!");
        continue;
    }
    console.log(i);
} */



// while condicion de salida o bucle infinito posible!

/* let numero = prompt("Ingrese un numero y le diré si es mala suerte \n *Para salir deje el campo vacío");
while (numero !== "") {
    if (numero == malaSuerte) {
        console.log("Has ingresado el " + numero + " DE LA MALA SUERTE!!! CORRANNNNNN");
    } else if (numero == 7) {
        console.log("INGRESASTE EL " + numero + " de la BUENA SUERTE!!!!");
    } else {
        console.log("Estamosa a salvo, el numero " + numero + " no trae mala suerte!!!");
    }
    numero = prompt("Ingrese un numero y le diré si es mala suerte \n *Para salir deje el campo vacío");
}; */


// SIMULADOR Tarjeta de Golf
const parHoyo1 = 4;
const parHoyo2 = 3;
const parHoyo3 = 4;
const parHoyo4 = 4;
const parHoyo5 = 5;
const parHoyo6 = 3;
const parHoyo7 = 4;
const parHoyo8 = 5;
const parHoyo9 = 4;

const parIda = parHoyo1+parHoyo2+parHoyo3+parHoyo4+parHoyo5+parHoyo6+parHoyo7+parHoyo8+parHoyo9

let jugador = prompt("Ingresa tu nombre.")

let hoyo1 = parseInt(prompt("Hoyo 1"));
let hoyo2 = parseInt(prompt("Hoyo 2"));
let hoyo3 = parseInt(prompt("Hoyo 3"));
let hoyo4 = parseInt(prompt("Hoyo 4"));
let hoyo5 = parseInt(prompt("Hoyo 5"));
let hoyo6 = parseInt(prompt("Hoyo 6"));
let hoyo7 = parseInt(prompt("Hoyo 7"));
let hoyo8 = parseInt(prompt("Hoyo 8"));
let hoyo9 = parseInt(prompt("Hoyo 9"));

let ida = hoyo1+hoyo2+hoyo3+hoyo4+hoyo5+hoyo6+hoyo7+hoyo8+hoyo9

console.log(parIda);


function par(ida) {
    if (ida == parIda) {
        console.log("Hola "+jugador+". Hiciste "+ida+" golpes, par de cancha.");
    } else if(ida > parIda) {
        console.log("Hola "+jugador+". Hiciste "+ida+" golpes, "+ (ida-parIda) +" sobre el par de cancha.");
    } else if (ida < parIda) {
        console.log("Hola "+jugador+". Hiciste "+ida+" golpes, "+ (parIda-ida) +" bajo el par de cancha.");
    } else if (isNaN(ida)) {
        console.log("Walk Over");
    };
}


//PREGUNTA DESDE EL PRACTICO!! (SE PUEDE CONCATENAR ASI? PORQUE ME TIRA UN UNDEFINED..)
console.log(par(ida)+" "+"con la siguiente tarjeta: "+hoyo1+" "+hoyo2+" "+hoyo3+" "+hoyo4+" "+hoyo6+" "+hoyo7+" "+hoyo8+" "+hoyo9);



