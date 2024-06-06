let nome = document.getElementById("nome")
let resposta = document.getElementById("resposta")

function apertar()
{
    resposta.innerHTML = "olá " + nome.value + " tudo bem?"
}

let metro = document.getElementById("metro")
let centimetro = document.getElementById("centimetro")

function converter()
{
    centimetro.innerHTML = parseInt (metro.value) *100
}

let leia1 = document.getElementById("leia1")
let leia2 = document.getElementById("leia2")
let sucessor = document.getElementById("sucessor")

function imprima()
{
    if(leia1.value < leia2.value)
        {
            sucessor.innerHTML=leia2.value
        }
        else
        {
            sucessor.innerHTML = leia1.value
        }
}

let numero = document.getElementById("numero")
let proximo = document.getElementById("proximo")
let anterior = document.getElementById("anterior")


function transformar()
{
        proximo.innerHTML = parseInt (numero.value) + 1
        anterior.innerHTML = parseInt (numero.value) - 1
}


var i = 0;
while(i <= 100)
    {
        console.log(i)
        i = i + 1
    }

var n = 0
while(n <= 50)
    {
        console.log(n)
        n = n + 5
    }

var l = 100
while(l >= 0)
    {
        console.log(l)
        l = l - 10
    }

let salario = document.getElementById("salario")
let resultado = document.getElementById("resultado")

function calcular()
    {
        if(salario.value > 1250)
            {
                resultado.innerHTML = parseInt (salario.value) *10/100 + parseInt (salario.value)
            }
         else
         {
                resultado.innerHTML = parseInt (salario.value) *15/100 + parseInt (salario.value)
         }
    }
