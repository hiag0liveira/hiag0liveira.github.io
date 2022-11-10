function verificarCampoVazio(){
    if(document.getElementById("BuscarLogin").value.length < 3){
        alert('Por favor, preencha o campo de Login a ser buscado');
        document.getElementById("BuscarLogin").focus();
        return false
        }
}
function checarEmail(){
    if( document.forms[1].BuscarEmail.value=="" 
    || document.forms[1].BuscarEmail.value.indexOf('@')==-1 
    || document.forms[1].BuscarEmail.value.indexOf('.')==-1 )
        {
        alert( "Por favor, informe um E-MAIL válido!" );
        return false;
    }
    return true;
}
function verificarCampoVazioEmail(){
    if(document.getElementById("BuscarEmail").value.length < 3){
        alert('Por favor, preencha o campo de E-MAIL a ser buscado');
        return false;
    }
    if( document.forms[1].BuscarEmail.value=="" 
    || document.forms[1].BuscarEmail.value.indexOf('@')==-1 
    || document.forms[1].BuscarEmail.value.indexOf('.')==-1 )
        {
        alert( "Por favor, informe um E-MAIL válido!" );
        return false;
    }
    return true;
}

