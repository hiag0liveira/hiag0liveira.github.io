function verificarCampoVazio(){
    if(document.getElementById("Login").value.length < 1){
        alert('Por favor, preencha o campo de Login');
        document.getElementById("Login").focus();
        return false;
        }
    if(document.getElementById("Senha").value.length < 1){
        alert('Por favor, preencha o campo de Senha');
        document.getElementById("Login").focus();
        return false;
        }
    return true;
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