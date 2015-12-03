//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************


//                     FUNCIONES DEL DOCUMENTO                                             //

//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************

function mostrarTexto() {

    var mostrar = document.getElementById("textoOculto");
    mostrar.className = "visible";
    document.getElementById("leermas").className = "oculto";
}
function ocultarTexto() {
    document.getElementById("textoOculto").className = "oculto";
    document.getElementById("leermas").className = "visible";
}


/*
 +++++++++++++++++++++++++++++++++++funcion cambiar IMAGENES++++++++++++++++++++++++++++++++++++++++++++
 */
function rotarImagenes() {
    var imagenes = new Array(
        'images/header1.jpg',
        'images/header2.jpg',
        'images/header3.jpg',
        'images/header4.jpg',
        'images/header5.jpg'
    );
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index = Math.floor((Math.random() * 5));

    // cambiamos la imagen
    document.getElementById("imagenCabecera").src = imagenes[index];
}

/*
 +++++++++++++++++++++++++++++++++++FUNCION MOSTRAR IMAGEN GANDOR TOUR++++++++++++++++++++++++++++++++++++++++++++
 */
function ganadorTour(){
    var x = document.getElementById("fotoOculta");
    x.className="visible";
    var x1 = document.getElementById("frome");
    x1.className="visible";
    var x2 = document.getElementById("imagenGanador");
    x2.className="visible";
    var x3 = document.getElementById("logo");
    x3.className="oculto";
}
/*
 +++++++++++++++++++++++++++++++++++FUNCION OCULTAR IMAGEN GANDOR TOUR++++++++++++++++++++++++++++++++++++++++++++
 */
function ocultarganadorTour(){
    var x = document.getElementById("fotoOculta");
    x.className="oculto";
    var x1 = document.getElementById("frome");
    x1.className="oculto";
    var x2 = document.getElementById("imagenGanador");
    x2.className="oculto";
    var x3 = document.getElementById("logo");
    x3.className="visible";
}

/*
 +++++++++++++++++++++++++++++++++++FUNCION MOSTRAR IMAGEN GANDOR GIRO++++++++++++++++++++++++++++++++++++++++++++
 */
function ganadorGiro(){    
    var x = document.getElementById("fotoOculta");
    x.className="visible";
    var x3 = document.getElementById("imagenGanador2");
    x3.className="visible";
    var x1 = document.getElementById("aru");
    x1.className="visible";
    var x3 = document.getElementById("logo");
    x3.className="oculto";

}
/*
 +++++++++++++++++++++++++++++++++++FUNCION OCULTAR IMAGEN GANDOR GIRO++++++++++++++++++++++++++++++++++++++++++++
 */
function ocultarganadorGiro(){

    var x = document.getElementById("fotoOculta");
    x.className="oculto";
    var x2 = document.getElementById("imagenGanador2");
    x2.className="oculto";
    var x1 = document.getElementById("aru");
    x1.className="oculto";
    var x3 = document.getElementById("logo");
    x3.className="visible";
}

/*
+++++++++++++++++++++++++++++++++++FUNCION MOSTRAR IMAGEN GANDOR Vuelta++++++++++++++++++++++++++++++++++++++++++++
*/
function ganadorVuelta(){
    var x = document.getElementById("fotoOculta");
    x.className="visible";
    var x2 = document.getElementById("imagenGanador3");
    x2.className="visible";
    var x1 = document.getElementById("contador");
    x1.className="visible";
    var x3 = document.getElementById("logo");
    x3.className="oculto";
}

/*
 +++++++++++++++++++++++++++++++++++FUNCION OCULTAR IMAGEN GANDOR Vuelta++++++++++++++++++++++++++++++++++++++++++++
 */
function ocultarganadorVuelta(){
    var x = document.getElementById("fotoOculta");
    x.className="oculto";
    var x2 = document.getElementById("imagenGanador3");
    x2.className="oculto";
    var x1 = document.getElementById("contador");
    x1.className="oculto";
    var x3 = document.getElementById("logo");
    x3.className="visible";
}

//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//
//
//
//
//
//
//
//
//
//
//
//
//
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************


//                     FUNCIONES DE LA CUENTA ATRAS                                            //

//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************
//**********************************************************************************************



/*****************************************************************************************************************
                                                    FALTAN TOUR
 *****************************************************************************************************************/
function faltanTour() {

    var anioFinal = 2016; //a�oo de la fecha
    var mesFinal = 07; //mes de la fecha
    var diaFinal = 02; //dia de la fecha
    var mensajeInicio = "Faltan ";
    var mensajeFinal = " para el incio del:";

    mesFinal -= 1;




    fechaFinal = new Date(anioFinal, mesFinal, diaFinal);
    fechaActual = new Date();
    diferencia = fechaFinal - fechaActual;
    diferenciaSegundos = diferencia / 1000;
    diferenciaMinutos = diferenciaSegundos / 60;
    diferenciaHoras = diferenciaMinutos / 60;
    diferenciaDias = diferenciaHoras / 24;
    diferenciaHoras2 = parseInt(diferenciaHoras) - (parseInt(diferenciaDias) * 24);
    diferenciaMinutos2 = parseInt(diferenciaMinutos) - (parseInt(diferenciaHoras) * 60);
    diferenciaSegundos2 = parseInt(diferenciaSegundos) - (parseInt(diferenciaMinutos) * 60);
    diferenciaDias = parseInt(diferenciaDias);
    if (diferenciaDias < 10 && diferenciaDias > -1) {
        diferenciaDias = "0" + diferenciaDias;
    }
    if (diferenciaHoras2 < 10 && diferenciaHoras2 > -1) {
        diferenciaHoras2 = "0" + diferenciaHoras2;
    }
    if (diferenciaMinutos2 < 10 && diferenciaMinutos2 > -1) {
        diferenciaMinutos2 = "0" + diferenciaMinutos2;
    }
    if (diferenciaSegundos2 < 10 && diferenciaSegundos2 > -1) {
        diferenciaSegundos2 = "0" + diferenciaSegundos2;
    }
    if (diferenciaDias <= 0 && diferenciaHoras2 <= 0 && diferenciaMinutos2 <= 0 && diferenciaSegundos2 <= 0) {
        diferenciaDias = 0;
        diferenciaHoras2 = 0;
        diferenciaMinutos2 = 0;
        diferenciaSegundos2 = 02;
        document.getElementById("tiempoTour").innerHTML = mensajeInicio + diferenciaDias + " dias, " + diferenciaHoras2 + " horas, " + diferenciaMinutos2 + " minutos, " + diferenciaSegundos2 + mensajeFinal;
    }
    else {
        document.getElementById("tiempoTour").innerHTML = mensajeInicio + diferenciaDias + " dias, " + diferenciaHoras2 + " horas, " + diferenciaMinutos2 + " minutos, " + diferenciaSegundos2 + mensajeFinal;
        setTimeout('faltanTour()', 1000);
    }
}


/*****************************************************************************************************************
                                                FALTAN GIRO
 *****************************************************************************************************************/
function faltanGiro() {

    var anioFinal = 2016; //a�oo de la fecha
    var mesFinal = 04; //mes de la fecha
    var diaFinal = 30; //dia de la fecha
    var mensajeInicio = "Faltan ";
    var mensajeFinal = " para el incio del:";

    mesFinal -= 1;

    fechaFinal = new Date(anioFinal, mesFinal, diaFinal);
    fechaActual = new Date();
    diferencia = fechaFinal - fechaActual;
    diferenciaSegundos = diferencia / 1000;
    diferenciaMinutos = diferenciaSegundos / 60;
    diferenciaHoras = diferenciaMinutos / 60;
    diferenciaDias = diferenciaHoras / 24;
    diferenciaHoras2 = parseInt(diferenciaHoras) - (parseInt(diferenciaDias) * 24);
    diferenciaMinutos2 = parseInt(diferenciaMinutos) - (parseInt(diferenciaHoras) * 60);
    diferenciaSegundos2 = parseInt(diferenciaSegundos) - (parseInt(diferenciaMinutos) * 60);
    diferenciaDias = parseInt(diferenciaDias);
    if (diferenciaDias < 10 && diferenciaDias > -1) {
        diferenciaDias = "0" + diferenciaDias;
    }
    if (diferenciaHoras2 < 10 && diferenciaHoras2 > -1) {
        diferenciaHoras2 = "0" + diferenciaHoras2;
    }
    if (diferenciaMinutos2 < 10 && diferenciaMinutos2 > -1) {
        diferenciaMinutos2 = "0" + diferenciaMinutos2;
    }
    if (diferenciaSegundos2 < 10 && diferenciaSegundos2 > -1) {
        diferenciaSegundos2 = "0" + diferenciaSegundos2;
    }
    if (diferenciaDias <= 0 && diferenciaHoras2 <= 0 && diferenciaMinutos2 <= 0 && diferenciaSegundos2 <= 0) {
        diferenciaDias = 0;
        diferenciaHoras2 = 0;
        diferenciaMinutos2 = 0;
        diferenciaSegundos2 = 02;
        document.getElementById("tiempoGiro").innerHTML = mensajeInicio + diferenciaDias + " dias, " + diferenciaHoras2 + " horas, " + diferenciaMinutos2 + " minutos, " + diferenciaSegundos2 + mensajeFinal;
    }
    else {
        document.getElementById("tiempoGiro").innerHTML = mensajeInicio + diferenciaDias + " dias, " + diferenciaHoras2 + " horas, " + diferenciaMinutos2 + " minutos, " + diferenciaSegundos2 + mensajeFinal;
        setTimeout('faltanGiro()', 1000);
    }
}


/*****************************************************************************************************************
                                            FALTAN VUELTA
 *****************************************************************************************************************/
function faltanVuelta() {

    var anioFinal = 2016; //a�oo de la fecha
    var mesFinal = 09; //mes de la fecha
    var diaFinal = 03; //dia de la fecha
    var mensajeInicio = "Faltan ";
    var mensajeFinal = " para el incio del:";

    mesFinal -= 1;

    fechaFinal = new Date(anioFinal, mesFinal, diaFinal);
    fechaActual = new Date();
    diferencia = fechaFinal - fechaActual;
    diferenciaSegundos = diferencia / 1000;
    diferenciaMinutos = diferenciaSegundos / 60;
    diferenciaHoras = diferenciaMinutos / 60;
    diferenciaDias = diferenciaHoras / 24;
    diferenciaHoras2 = parseInt(diferenciaHoras) - (parseInt(diferenciaDias) * 24);
    diferenciaMinutos2 = parseInt(diferenciaMinutos) - (parseInt(diferenciaHoras) * 60);
    diferenciaSegundos2 = parseInt(diferenciaSegundos) - (parseInt(diferenciaMinutos) * 60);
    diferenciaDias = parseInt(diferenciaDias);
    if (diferenciaDias < 10 && diferenciaDias > -1) {
        diferenciaDias = "0" + diferenciaDias;
    }
    if (diferenciaHoras2 < 10 && diferenciaHoras2 > -1) {
        diferenciaHoras2 = "0" + diferenciaHoras2;
    }
    if (diferenciaMinutos2 < 10 && diferenciaMinutos2 > -1) {
        diferenciaMinutos2 = "0" + diferenciaMinutos2;
    }
    if (diferenciaSegundos2 < 10 && diferenciaSegundos2 > -1) {
        diferenciaSegundos2 = "0" + diferenciaSegundos2;
    }
    if (diferenciaDias <= 0 && diferenciaHoras2 <= 0 && diferenciaMinutos2 <= 0 && diferenciaSegundos2 <= 0) {
        diferenciaDias = 0;
        diferenciaHoras2 = 0;
        diferenciaMinutos2 = 0;
        diferenciaSegundos2 = 02;
        document.getElementById("tiempoVuelta").innerHTML = mensajeInicio + diferenciaDias + " dias, " + diferenciaHoras2 + " horas, " + diferenciaMinutos2 + " minutos, " + diferenciaSegundos2 + mensajeFinal;
    }
    else {
        document.getElementById("tiempoVuelta").innerHTML = mensajeInicio + diferenciaDias + " dias, " + diferenciaHoras2 + " horas, " + diferenciaMinutos2 + " minutos, " + diferenciaSegundos2 + mensajeFinal;
        setTimeout('faltanVuelta()', 1000);
    }
}



 /**********************************************************************************************************
 ************************************************************************************************************
 ***********************************************************************************************************/
 /**********************************************************************************************************
 **************************************ASIGNACIONES**********************************************************
 ***********************************************************************************************************/
 /**********************************************************************************************************
 **********************************************************************************************************
 ***********************************************************************************************************/





window.onload = function () {
    
 /**********************************************************************************************************
 ***************************ASIGNACIONES  DOCUMENTO***********************************************************
 ***********************************************************************************************************/

    document.getElementById("leermas").onclick = mostrarTexto;

    document.getElementById("leermenos").onclick = ocultarTexto;



    var enlacesInteres = document.getElementById("lista1");
    var enlaces = enlacesInteres.getElementsByTagName("li");
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = "grey";
        var x = enlaces[i].getElementsByTagName("a")[0];
        x.style.color = "black";
        x.onmouseover = function () {
            this.style.color = "red";
        };
        x.onmouseout = function () {
            this.style.color = "black";
        };

    }

    //Cambiar color titulos
    var seccionesAbajo = document.getElementsByClassName("wrapper");
    var elementos = seccionesAbajo[1].getElementsByTagName("h2");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "black";
        elementos[i].style.color = "white";
        elementos[i].style.padding = "2px";
        elementos[i].style.marginBottom = "4px";
    }



    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes,5000);



    //imagenes ganadores TOUR
    var x = document.getElementById("ganador1");
    x.onmousemove=ganadorTour;
    x.onmouseout=ocultarganadorTour;

    //imagenes ganadores GIRO
    var x1 = document.getElementById("ganador2");
    x1.onmousemove=ganadorGiro;
    x1.onmouseout=ocultarganadorGiro;

    //imagenes ganadores Vuelta
    var x2 = document.getElementById("ganador3");
    x2.onmousemove=ganadorVuelta;
    x2.onmouseout=ocultarganadorVuelta;
    
    /**********************************************************************************************************
 *************************************************************************************************************
 ***********************************************************************************************************/
    
    
    /**********************************************************************************************************
 ***************************ASIGNACIONES  RELOJ***********************************************************
 ***********************************************************************************************************/
    faltanTour();
    faltanGiro();
    faltanVuelta();

    };



