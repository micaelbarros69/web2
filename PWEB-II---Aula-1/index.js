console.log("Hello World");
var olaMundo = "Hello World";
console.log(olaMundo);

// Operadores

let a = 10;
const b = "10";

console.log(a === b)

let cor = "vermelho";

//if e else
if(cor == "verde"){
    console.log("Siga")
}else if(cor == "vermelho"){
    onsole.log("Pare")
}
else if(cor == "amarelo"){
    console.log("atencao")
}

// for
let num = 5;
for(i = 0; i < 11; i++){
    console.log(i + "X" + num + "=" + (i*num))
}

//function
function valor(){
    valor = document.getElementById("valor").value;
    alert(valor);
}


function compararIgual(){
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;

    if(valor1 == valor2){
        alert("São iguais")
    }else{
        alert("Não são iguais")
    }
}

function compararDiferente(){
    valor1 = document.getElementById("valor3").value;
    valor2 = document.getElementById("valor4").value;

    if(valor1 != valor2){
        alert("Não são iguais")
    }else{
        alert("São iguais")
    }
}

function compararMaior(){
    valor1 = document.getElementById("valor5").value;
    valor2 = document.getElementById("valor6").value;

    if(valor1 > valor2){
        alert("Valor 1 é maior")
    }else if (valor2 >  valor1){
        alert("Valor 2 é maior")
    }else{
        alert("São iguais")
    }
}

function compararMaiorIgual(){
    valor1 = document.getElementById("valor7").value;
    valor2 = document.getElementById("valor8").value;

    if(valor1 > valor2){
        alert("Valor 1 é maior")
    }else if (valor2 >  valor1){
        alert("Valor 2 é maior")
    }else{
        alert("São iguais")
    }
}

function compararMenor(){
    valor1 = document.getElementById("valor9").value;
    valor2 = document.getElementById("valor10").value;

    if(valor1 < valor2){
        alert("Valor 1 é menor")
    }else if (valor2 <  valor1){
        alert("Valor 2 é menor")
    }else{
        alert("São iguais")
    }
}

function compararMenorIgual(){
    valor1 = document.getElementById("valor11").value;
    valor2 = document.getElementById("valor12").value;

    if(valor1 < valor2){
        alert("Valor 1 é menor")
    }else if (valor2 <  valor1){
        alert("Valor 2 é menor")
    }else{
        alert("São iguais")
    }
}