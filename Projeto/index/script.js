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
