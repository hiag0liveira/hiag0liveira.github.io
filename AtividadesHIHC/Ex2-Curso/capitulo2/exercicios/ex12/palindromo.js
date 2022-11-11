function palindromo(){
    var palavra = prompt('Digite aqui para verificar se é um palindromo:');
    let palindromo = true;

    for (let i = 0, j = palavra.length - 1; i < j; i++, j--) {
        if (palavra.charAt(i) !== palavra.charAt(j)) {
            palindromo = false;
            break
        }
    }
    if (palindromo == true){
        alert('Sim é um palindromo');
    } else{
        alert('Não é um palindromo');
    }
}
