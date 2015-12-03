///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCION MOSTRAR TODOS LAS SECCIONES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarTodasSeccion() {

    var elemento1 = document.getElementById("seccion1");
    elemento1.className = "visible";
    var elemento2 = document.getElementById("seccion2");
    elemento2.className = "visible";
    var elemento3 = document.getElementById("seccion3");
    elemento3.className = "visible";
    var elemento4 = document.getElementById("seccion4");
    elemento4.className = "visible";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION MOSTRAR SECCION ALPES
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarSeccionAlpes() {
    var elemento3 = document.getElementById("seccion3");
    elemento3.className = "visible";

    //ocultar las otras secciones
    var x1 = document.getElementById("seccion1");
    x1.className = "oculto";
    var x2 = document.getElementById("seccion2");
    x2.className = "oculto";
    var x3 = document.getElementById("seccion4");
    x3.className = "oculto";

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION MOSTRAR SECCION PIRINEOS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarSeccionPirineos() {
    var elemento3 = document.getElementById("seccion2");
    elemento3.className = "visible";

    //ocultar las otras secciones
    var x1 = document.getElementById("seccion1");
    x1.className = "oculto";
    var x2 = document.getElementById("seccion3");
    x2.className = "oculto";
    var x3 = document.getElementById("seccion4");
    x3.className = "oculto";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION MOSTRAR SECCION RESTO CORDILLERAS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mostrarSeccionCordilleras() {
    var elemento3 = document.getElementById("seccion4");
    elemento3.className = "visible";

    //ocultar las otras secciones
    var x1 = document.getElementById("seccion3");
    x1.className = "oculto";
    var x2 = document.getElementById("seccion2");
    x2.className = "oculto";
    var x3 = document.getElementById("seccion1");
    x3.className = "oculto";

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION MOSTRAR mas
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarMas(elemento, numero) {

    //sacamos la ID del elemento
    var idElemento = elemento.id;
    //cojemos el elemento por el id pasado
    var x = document.getElementById(idElemento);
    //ocultamos el elemento pasado
    x.className = "oculto";
    //a este string le concateno el nummero, para ocultar por ID
    var stringOculto = "elementoOculto";
    //concatenamos el string con el numero para encontrar el id
    var idElementoOculto = stringOculto.concat(numero);
    //ocultamos el elemento por el string
    var x2 = document.getElementById(idElementoOculto);
    //sacamos el elemento oculto
    x2.className = "visible";
    //servira para concatenarlo con el NUMERO y mostrar el elemento "mostrasMenos"
    var x3 = "mostrarMenos";
    //esta variable valdra "mostrarMenos1"
    var x4 = x3.concat(numero);
    //selecionamos el elemento "mostrarMenos1"
    var x5 = document.getElementById(x4);
    // mostramos el elemento "mostrarMenos1"
    x5.className = "visible";


}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION MOSTRAR menos
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarMenos(elemento, numero) {
    var stringOculto = "elementoOculto";
    //concatenamos el string con el numero para encontrar el id
    var idElementoOculto = stringOculto.concat(numero);
    //ocultamos el elemento por el string
    var x2 = document.getElementById(idElementoOculto);
    //ocultamos el span oculto que esta visible
    x2.className = "oculto";
    var x3 = "mostrarMenos";
    //esta variable valdra "mostrarMenos1"
    var x4 = x3.concat(numero);
    //selecionamos el elemento "mostrarMenos1"
    var x5 = document.getElementById(x4);
    // ocultamos el elemento "mostrarMenos1"
    x5.className = "oculto";


    var x6 = "mostrarMas";
    //esta variable valdra "mostrarMenos1"
    var x7 = x6.concat(numero);
    //selecionamos el elemento "mostrarMenos1"
    var x8 = document.getElementById(x7);
    // ocultamos el elemento "mostrarMenos1"
    x8.className = "visible";


}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION mostrar ALTIMETRIAS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarAltimetrias(foto) {
    var id = foto.id;
    var x = document.getElementById(id);
    x.className = "visible";

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION mostrar MINIATURAS OCULTAS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sacarMinuaturas(numero) {
    var x1 = "miniuaturasOcultas";
    //esta variable valdra "miniuaturasOcultas1"
    var x2 = x1.concat(numero);
    //selecionamos el elemento "miniuaturasOcultas1"
    var x3 = document.getElementById(x2);
    // mostramos el elemento "miniuaturasOcultas1"
    x3.className = "visible";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ASIGNACIONES

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function () {

    var eleccion1 = document.getElementById("todos");
    eleccion1.addEventListener("click", mostrarTodasSeccion);


    var eleccion2 = document.getElementById("alpes");
    eleccion2.addEventListener("click", mostrarSeccionAlpes);

    var eleccion3 = document.getElementById("pirineos");
    eleccion3.addEventListener("click", mostrarSeccionPirineos);

    var eleccion4 = document.getElementById("resto");
    eleccion4.addEventListener("click", mostrarSeccionCordilleras);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//funciones de mostrarMas1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var mostrar = document.getElementById("mostrarMas1");
    mostrar.onclick = function () {
        mostrarMas(this, 1);
    }
    //funciones de mostrarMas2
    var mostrar2 = document.getElementById("mostrarMas2");
    mostrar2.onclick = function () {
        mostrarMas(this, 2);
    }
    //funciones de mostrarMas3
    var mostrar3 = document.getElementById("mostrarMas3");
    mostrar3.onclick = function () {
        mostrarMas(this, 3);
    }
    //funciones de mostrarMas4
    var mostrar4 = document.getElementById("mostrarMas4");
    mostrar4.onclick = function () {
        mostrarMas(this, 4);
    }
    //funciones de mostrarMas5
    var mostrar5 = document.getElementById("mostrarMas5");
    mostrar5.onclick = function () {
        mostrarMas(this, 5);
    }
    //funciones de mostrarMas4
    var mostrar6 = document.getElementById("mostrarMas6");
    mostrar6.onclick = function () {
        mostrarMas(this, 6);
    }
    //funciones de mostrarMas4
    var mostrar7 = document.getElementById("mostrarMas7");
    mostrar7.onclick = function () {
        mostrarMas(this, 7);
    }
    //funciones de mostrarMas4
    var mostrar8 = document.getElementById("mostrarMas8");
    mostrar8.onclick = function () {
        mostrarMas(this, 8);
    }
    //funciones de mostrarMas4
    var mostrar9 = document.getElementById("mostrarMas9");
    mostrar9.onclick = function () {
        mostrarMas(this, 9);
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////MENOS///////////////////////////////////

    var menos = document.getElementById("mostrarMenos1");
    menos.className = "oculto";
    menos.onclick = function () {
        mostrarMenos(this, 1);
    }
    var menos2 = document.getElementById("mostrarMenos2");
    menos2.className = "oculto";
    menos2.onclick = function () {
        mostrarMenos(this, 2);
    }
    var menos3 = document.getElementById("mostrarMenos3");
    menos3.className = "oculto";
    menos3.onclick = function () {
        mostrarMenos(this, 3);
    }
    var menos4 = document.getElementById("mostrarMenos4");
    menos4.className = "oculto";
    menos4.onclick = function () {
        mostrarMenos(this, 4);
    }
    var menos5 = document.getElementById("mostrarMenos5");
    menos5.className = "oculto";
    menos5.onclick = function () {
        mostrarMenos(this, 5);
    }
    var menos6 = document.getElementById("mostrarMenos6");
    menos6.className = "oculto";
    menos6.onclick = function () {
        mostrarMenos(this, 6);
    }
    var menos7 = document.getElementById("mostrarMenos7");
    menos7.className = "oculto";
    menos7.onclick = function () {
        mostrarMenos(this, 7);
    }
    var menos8 = document.getElementById("mostrarMenos8");
    menos8.className = "oculto";
    menos8.onclick = function () {
        mostrarMenos(this, 8);
    }
    var menos9 = document.getElementById("mostrarMenos9");
    menos9.className = "oculto";
    menos9.onclick = function () {
        mostrarMenos(this, 9);
    }

/////////////////////////////tourmalet/////////////////////////////
    var altimetria = document.getElementById("altimetriaTourmalet");
    var foto1 = document.getElementById("tourmalet");
    altimetria.onclick = function () {
        mostrarAltimetrias(foto1, 1);
    }
    var galeria1 = document.getElementById("galeriaTourmalet");
    galeria1.onclick = function () {
        sacarMinuaturas(1);
    }
///////////////////////////////EVALIRA/////////////////////////////
    var altimetria2 = document.getElementById("altimetriaEvalira");
    var foto2 = document.getElementById("evalira");
    altimetria2.onclick = function () {
        mostrarAltimetrias(foto2, 2);
    }
    var galeria2 = document.getElementById("galeriaEvalira");
    galeria2.onclick = function () {
        sacarMinuaturas(2);
    }
///////////////////////////////ausbique/////////////////////////////
    var altimetria3 = document.getElementById("altimetriaAusbique");
    var foto3 = document.getElementById("ausbique");
    altimetria3.onclick = function () {
        mostrarAltimetrias(foto3, 3);
    }
    var galeria3 = document.getElementById("galeriaAusbique");
    galeria3.onclick = function () {
        sacarMinuaturas(3);
    }
///////////////////////////////AlpeDhuz/////////////////////////////
    var altimetria4 = document.getElementById("altimetriaAlpe");
    var foto4 = document.getElementById("alpe");
    altimetria4.onclick = function () {
        mostrarAltimetrias(foto4, 4);
    }
    var galeria4 = document.getElementById("galeriaAlpe");
    galeria4.onclick = function () {
        sacarMinuaturas(4);
    }
////////////////////////////////////stelvio/////////////////////////////
    var altimetria5 = document.getElementById("altimetriaStelvio");
    var foto5 = document.getElementById("stelvio");
    altimetria5.onclick = function () {
        mostrarAltimetrias(foto5, 5);
    }
    var galeria5 = document.getElementById("galeriaStelvio");
    galeria5.onclick = function () {
        sacarMinuaturas(5);
    }

////////////////////////////////////stelvio/////////////////////////////
    var altimetria6 = document.getElementById("altimetriaGavia");
    var foto6 = document.getElementById("gavia");
    altimetria6.onclick = function () {
        mostrarAltimetrias(foto6, 6);
    }
    var galeria6 = document.getElementById("galeriaGavia");
    galeria6.onclick = function () {
        sacarMinuaturas(6);
    }

////////////////////////////////////Mont Ventoux/////////////////////////////
    var altimetria7 = document.getElementById("altimetriaVentoux");
    var foto7 = document.getElementById("ventoux");
    altimetria7.onclick = function () {
        mostrarAltimetrias(foto7, 7);
    }
    var galeria7 = document.getElementById("galeriaVentoux");
    galeria7.onclick = function () {
        sacarMinuaturas(7);
    }

////////////////////////////////////Angliru/////////////////////////////
    var altimetria8 = document.getElementById("altimetriaAngliru");
    var foto8 = document.getElementById("angliru");
    altimetria8.onclick = function () {
        mostrarAltimetrias(foto8, 8);
    }
    var galeria8 = document.getElementById("galeriaAngliru");
    galeria8.onclick = function () {
        sacarMinuaturas(8);
    }

////////////////////////////////////Lagos de covadonga/////////////////////////////
    var altimetria9 = document.getElementById("altimetriaCovadonga");
    var foto9 = document.getElementById("covadonga");
    altimetria9.onclick = function () {
        mostrarAltimetrias(foto9, 9);
    }
    var galeria9 = document.getElementById("galeriaCovadonga");
    galeria9.onclick = function () {
        sacarMinuaturas(9);
    }



}