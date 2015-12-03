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

    /*creo una variable de tipo booleana que en principio tendr� un valor true,
     y que retornaremos en false(falso) cuando nuestra condici�n no se cumpla*/
    var todo_correcto = true;

    /*El primer campo que comprobamos es el del nombre. Lo traemos por id y verificamos
     la condici�n, en este caso, por ejemplo, le decimos que tiene que tener m�s de 2 d�gitos
     para que sea un nombre v�lido. Si no tiene m�s de dos d�gitos, la variable todo_correcto
     devolver� false.*/

    //ELEMENTOS
    var nombre = document.getElementById('element_1_1');
    var apellido = document.getElementById('element_1_2');
    var direccion = document.getElementById('element_2_1');
    var ciudad = document.getElementById('element_2_3');
    var provincia = document.getElementById('element_2_4');
    var cp = document.getElementById('element_2_5');
    var pais = document.getElementById('element_2_6');
    var tel = document.getElementById('telefono');
    var web = document.getElementById('element_5');
    var email = document.getElementById('element_6');
    var month = document.getElementById('element_3_1');
    var day = document.getElementById('element_3_2');
   var year = document.getElementById('element_3_3');
    var dateFormulario = month.value  + "/" + day.value  + "/" + year.value;
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
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
    var regexpTelefono = /(?:[+]?(?:[0-9]{1,5}|\\x28[0-9]{1,5}\\x29)[ ]?)?[0-9]{2}(?:[0-9][ ]?){6}[0-9]/;
    var regexpWeb = /^(http?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/;
    var regexpEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;


/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR NOMBRE
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(nombre.value)) {
        nombre.style.borderColor = "red";
        todo_correcto = false;
    }else{
        nombre.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR APELLIDO
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(apellido.value)) {
        apellido.style.borderColor = "red";
        todo_correcto = false;
    }else{
        apellido.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR Direccion
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpDireccion.test(direccion.value)) {
        direccion.style.borderColor = "red";
        todo_correcto = false;
    }else{
        direccion.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR CIUDAD
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(ciudad.value)) {
        ciudad.style.borderColor = "red";
        todo_correcto = false;
    }else{
        ciudad.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR PROVINCIA
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpGlobal.test(provincia.value)) {
        provincia.style.borderColor = "red";
        todo_correcto = false;
    }else{
        provincia.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR CODIGO POSTAL
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpCodigoPostal.test(cp.value)) {
        cp.style.borderColor = "red";
        todo_correcto = false;
    }else{
        cp.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR PAIS
/////////////////////////////////////////////////////////////////////////////////////////////
    if (pais.value == "") {
        pais.style.borderColor = "red";
        todo_correcto = false;
    }else{
        pais.style.borderColor = "black";
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR TELEFONO
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpTelefono.test(tel.value)) {
        tel.style.borderColor = "red";
        todo_correcto = false;
    }else{
        tel.style.borderColor = "black";
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR WEB
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpWeb.test(web.value)) {
        web.style.borderColor = "red";
        todo_correcto = false;
    }else{
        web.style.borderColor = "black";
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR email
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!regexpEmail.test(email.value)) {
        email.style.borderColor = "red";
        todo_correcto = false;
    }else{
        email.style.borderColor = "black";
    }
/////////////////////////////////////////////////////////////////////////////////////////////
// VALIDAR fecha
/////////////////////////////////////////////////////////////////////////////////////////////
    if (!validaFechaDDMMAAAA(dateFormulario)) {
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        todo_correcto = false;


    }
    if(fecha2MayorFecha1(dateFormulario,fechaActual)){
        day.style.borderColor = "red";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        todo_correcto = false;

    }


    if (todo_correcto==false) {
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

        if((Date.parse(fechaFormulario)) <= (Date.parse(fechaFinal))) {
            alert("fecha nacimiento mayor que la actual");
            return true;

        }else{
                return false;
            }





}




