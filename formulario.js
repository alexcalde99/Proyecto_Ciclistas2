/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// AIGNACIONES

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    var boton = document.getElementById("botonFormulario");
    boton.onclick = validarFormulario;

}


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// FUNCION VALIDAR FORMULARIO

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
function validarFormulario() {

    /*creo una variable de tipo booleana que en principio tendrá un valor true,
     y que retornaremos en false(falso) cuando nuestra condición no se cumpla*/
    var todo_correcto = true;

    /*El primer campo que comprobamos es el del nombre. Lo traemos por id y verificamos
     la condición, en este caso, por ejemplo, le decimos que tiene que tener más de 2 dígitos
     para que sea un nombre válido. Si no tiene más de dos dígitos, la variable todo_correcto
     devolverá false.*/

    //ELEMENTOS
    var nombre = document.getElementById('element_1_1');
    var apellido = document.getElementById('element_1_2');
    var direccion = document.getElementById('element_2_1');
    var ciudad = document.getElementById('element_2_3');
    var provincia = document.getElementById('element_2_4');
    var cp = document.getElementById('element_2_5');
    var pais = document.getElementById('element_2_6');
    var month = document.getElementById('element_3_1');
    var day = document.getElementById('element_3_2');
    var year = document.getElementById('element_3_3');
    var dateFormulario = month.value  + "/" + day.value  + "/" + year.value;
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1; //hoy es 0!
    var yyyy = hoy.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    var fechaActual = mm+'/'+dd+'/'+yyyy;


    var x=fecha2MayorFecha1(dateFormulario,fechaActual);




    //EXPRESIONES REGULARES
    var regexpGlobal = /^([a-z ??????]{2,60})$/i;
    var regexpDireccion = /^([a-zA-Z\d\s\-\,\#\.\+])+/;
    var regexpCodigoPostal = /^\d{5}(?:[-\s]\d{4})?$/;


/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR NOMBRE
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(nombre.value)) {
        nombre.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR APELLIDO
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(apellido.value)) {
        apellido.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR Direccion
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpDireccion.test(direccion.value)) {
        direccion.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR CIUDAD
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(ciudad.value)) {
        ciudad.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR PROVINCIA
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(provincia.value)) {
        provincia.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR CODIGO POSTAL
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpCodigoPostal.test(cp.value)) {
        cp.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR PAIS
/////////////////////////////////////////////////////////////////////////////////////////////
    if (pais.value == "") {
        pais.style.borderColor = "red";
        todo_correcto = false;
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR fecha
/////////////////////////////////////////////////////////////////////////////////////////////
    if(fecha2MayorFecha1(fechaActual,dateFormulario)){
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        todo_correcto = false;
        alert("Fecha nacimiento mayor que la fecha actual");
    }
    if (!validaFechaDDMMAAAA(dateFormulario)) {
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        todo_correcto = false;

    }

    if (!todo_correcto) {
        alert('Los campos en rojo no estan correctos, vuelva a revisarlos');
    }

    return todo_correcto;


}


/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// FUNCION VALIDAR FECHA FORMULARIO

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

function validaFechaDDMMAAAA(fecha){
    var dtCh= "/";
    var minYear=1900;
    var maxYear=2100;
    function isInteger(s){
        var i;
        for (i = 0; i < s.length; i++){
            var c = s.charAt(i);
            if (((c < "0") || (c > "9"))) return false;
        }
        return true;
    }
    function stripCharsInBag(s, bag){
        var i;
        var returnString = "";
        for (i = 0; i < s.length; i++){
            var c = s.charAt(i);
            if (bag.indexOf(c) == -1) returnString += c;
        }
        return returnString;
    }
    function daysInFebruary (year){
        return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
    }
    function DaysArray(n) {
        for (var i = 1; i <= n; i++) {
            this[i] = 31
            if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
            if (i==2) {this[i] = 29}
        }
        return this
    }
    function isDate(dtStr){
        var daysInMonth = DaysArray(12)
        var pos1=dtStr.indexOf(dtCh)
        var pos2=dtStr.indexOf(dtCh,pos1+1)
        var strDay=dtStr.substring(0,pos1)
        var strMonth=dtStr.substring(pos1+1,pos2)
        var strYear=dtStr.substring(pos2+1)
        strYr=strYear
        if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
        if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
        for (var i = 1; i <= 3; i++) {
            if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
        }
        month=parseInt(strMonth)
        day=parseInt(strDay)
        year=parseInt(strYr)
        if (pos1==-1 || pos2==-1){
            return false
        }
        if (strMonth.length<1 || month<1 || month>12){
            return false
        }
        if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
            return false
        }
        if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
            return false
        }
        if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
            return false
        }
        return true
    }
    if(isDate(fecha)){
        return true;
    }else{
        return false;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// FUNCION VALIDA FECHA1 ES MAYOR QUE FECHA2
//comprueba que la fecha2 es mayor que la fecha1,.....si es mayor devuelve true,si no false

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
function fecha2MayorFecha1(fechaFinal,fechaFormulario){

        if((Date.parse(fechaFormulario)) >= (Date.parse(fechaFinal))) {
            return true;
        }else{
                return false;
            }





}





