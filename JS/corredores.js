/**
 * Created by ALEX on 22/11/2015.
 */
////


/************************************************************************************************************************
 +++++++++++++++++++++++++++++++++++FUNCION MOSTRAR CAMBIAR IMAGENES PANTANI++++++++++++++++++++++++++++++++++++++++++++
 ************************************************************************************************************************/
    function rotarImagenesPantani() {
        var imagenes = new Array(
            'imagenes/pantani1.jpg',
            'imagenes/pantani2.jpg',
            'imagenes/pantani3.jpg',
            'imagenes/pantani4.jpg'
        );
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index = Math.floor((Math.random() * 4));

        // cambiamos la imagen
        document.getElementById("imagenPantani").src = imagenes[index];

    }



/***********************************************************************************************************************
 +++++++++++++++++++++++++++++++++++FUNCION MOSTRAR CAMBIAR IMAGENES CONTADOR++++++++++++++++++++++++++++++++++++++++++++
 ************************************************************************************************************************/
function rotarImagenesContador() {
    var imagenes = new Array(
        'imagenes/contador1.jpg',
        'imagenes/contador2.jpg',
        'imagenes/contador3.jpg',
        'imagenes/contador4.jpg'
    );
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index = Math.floor((Math.random() * 4));

    // cambiamos la imagen
    document.getElementById("imagenContador").src = imagenes[index];

}


/***********************************************************************************************************************
 +++++++++++++++++++++++++++++++++++FUNCION MOSTRAR CAMBIAR IMAGENES INDURAIN++++++++++++++++++++++++++++++++++++++++++++
 ************************************************************************************************************************/
function rotarImagenesIndurain() {
    var imagenes = new Array(
        'imagenes/indurain.jpg',
        'imagenes/indurain2.jpg',
        'imagenes/indurain3.jpg',
        'imagenes/indurain4.jpg'
    );
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index = Math.floor((Math.random() * 4));

    // cambiamos la imagen
    document.getElementById("imagenIndurain").src = imagenes[index];

}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                //ASIGNACIONES

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){

    /*
     ++++++++++++++++++++++++++++++++++PANTANI+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    var botonPantani=document.getElementById("botonPantani");
    var palmaresPantani=document.getElementById("palmaresPantani");
    var imagenPalmares=document.getElementById("imagenPalmares");
    var imagenPantani=document.getElementById("imagenPantani");
    var interval;

    botonPantani.onmouseover=function(){
        palmaresPantani.className="visible";
        palmaresPantani.className="colocarDerecha";
        rotarImagenesPantani();
       imagenPantani.className="resaltarPantani";

        interval=setInterval(rotarImagenesPantani,5000);// Indicamos que cada 5 segundos cambie la imagen
    }

    botonPantani.onmouseout=function(){
        palmaresPantani.className="oculto";
        imagenPantani.className="imagenesCiclistas";
        clearInterval(interval);
    }


    /*
     ++++++++++++++++++++++++++++++++++CONTADOR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    var botonContador=document.getElementById("botonContador");
    var palmaresCOntador=document.getElementById("palmaresContador");
    var imagenContador=document.getElementById("imagenContador");

    botonContador.onmouseover=function(){
        palmaresCOntador.className="visible";
        palmaresCOntador.className="colocarDerecha";
        rotarImagenesContador();
        imagenContador.className="resaltarPantani";
        interval=setInterval(rotarImagenesContador,5000);// Indicamos que cada 5 segundos cambie la imagen
    }

    botonContador.onmouseout=function(){
        palmaresCOntador.className="oculto";
        imagenContador.className="imagenesCiclistas";
        clearInterval(interval);
    }


/*
++++++++++++++++++++++++++++++++++indurain+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
    var botonIndurain=document.getElementById("botonIndurain");
    var palmaresIndurain=document.getElementById("palmaresIndurain");
    var imagenIndurain=document.getElementById("imagenIndurain");

    botonIndurain.onmouseover=function(){
        palmaresIndurain.className="visible";
        palmaresIndurain.className="colocarDerecha";
        rotarImagenesIndurain();
        imagenIndurain.className="resaltarPantani";
        interval=setInterval(rotarImagenesIndurain,5000);// Indicamos que cada 5 segundos cambie la imagen
    }

    botonIndurain.onmouseout=function(){
        palmaresIndurain.className="oculto";
        imagenIndurain.className="imagenesCiclistas";
        clearInterval(interval);
    }









}