function verificarCampoVazio(){
    if(document.getElementById("BuscarCod").value.length < 1){
        alert('Por favor, preencha o campo do codigo');
        document.getElementById("BuscarCod").focus();
        return false
        }
}