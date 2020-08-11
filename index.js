function visor(number){
    //Verifica se há "lixo" no visor
    if(document.form.viwer.value === "Digite um valor!"){
        document.form.viwer.value = "";
    }


    //Reseta a cor do visor para preto
    const tela = document.querySelector("#container .viwer");
    tela.style.color = "#000000";
    //Pega o valor do input e adiciona ao viwer
    //form é o nome de uma tag. viwer é um input. Value é o valor do input
    //Number é um valor recebido quando um botão é pressionado
    document.form.viwer.value += number;
    console.log(document.form.viwer.value)
}

function limpar(){
    //Seta o valor da viwer em vazio
    document.form.viwer.value ="";
}

function igual(){
    //atribui o valor do input a variavel number
    number = document.form.viwer.value;
    //eval é uma função nativa do javaScript, faz qualquer operação matematica
    //Verifica se há algum numero no visor
    if(number!=0 && number!="+" && number!="-" && number!="/" && number!="."){
        if(eval(number)<0){
            document.form.viwer.value = eval(number);
            //Coloca a cor do visor em vermelho
            const visor = document.querySelector("#container .viwer")
            visor.style.color = "#ff0000";
        }else{
            document.form.viwer.value = eval(number);
            //Coloca a cor do visor em azul
            const visor = document.querySelector("#container .viwer")
            visor.style.color = "#0000ff";
        }
    }else{
        document.form.viwer.value = "Digite um valor!";
    }
}