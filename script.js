botao.addEventListener('click',function(){

    var nomeCliente = nome.value;
    var quantiaSorvetes = quantidade.value;
    var saborSorvete = sabores.value;

    /*"alert("Nome: " + nomeCliente + " Qnt.: " + quantiaSorvetes + 
    " Sabor: " + saborSorvete);*/

pedidoNome.innerHTML = "Nome:" + nomeCliente;
pedidoQuantia.innerHTML = "Quantia:" + quantiaSorvetes;
pedidoSabores.innerHTML = "Sabores:" + saborSorvete;
}); 