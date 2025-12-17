let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let n0 = document.getElementById("n0");
let nmais = document.getElementById("n+")
let nmenos = document.getElementById("n-")
let nmultiplicar = document.getElementById("n*")
let ndividir = document.getElementById("n/")
let igual = document.getElementById("nigual");
let teste = document.getElementById("teste");
let limpar = document.getElementById("limpar");
let del = document.getElementById("deletar");
let tela = "";
n1.addEventListener("click", function (){
  tela =  tela + "" + 1
    teste.innerText = tela
})
n2.addEventListener("click", function (){
  tela =  tela + "" + 2
  teste.innerText = tela
}) 
n3.addEventListener("click", function (){
  tela =  tela + "" + 3
    teste.innerText = tela
}) 
n4.addEventListener("click", function (){
  tela =  tela + "" + 4
    teste.innerText = tela
}) 
n5.addEventListener("click", function (){
  tela =  tela + "" + 5
    teste.innerText = tela
}) 
n6.addEventListener("click", function (){
  tela =  tela + "" + 6
    teste.innerText = tela
}) 
n7.addEventListener("click", function (){
  tela =  tela + "" + 7
    teste.innerText = tela
}) 
n8.addEventListener("click", function (){
  tela =  tela + "" + 8
    teste.innerText = tela
}) 
n9.addEventListener("click", function (){
  tela =  tela + "" + 9
    teste.innerText = tela
}) 
nmais.addEventListener("click", function(){
  tela = tela + "" + "+"
  teste.innerText = tela
})
nmenos.addEventListener("click", function(){
  tela = tela + "" + "-"
  teste.innerText = tela
})
nmultiplicar.addEventListener("click", function(){
  tela = tela + "" + "*"
  teste.innerText = tela
})
ndividir.addEventListener("click", function(){
  tela = tela + "" + "/"
  teste.innerText = tela 
})
igual.addEventListener("click", function(){
  teste.innerText = eval(tela)
  tela = ""

})
limpar.addEventListener("click", function(){
  teste.innerText = ""
  tela = ""
})
del.addEventListener("click", function(){
  let t1 = tela.slice(0,-1) + "";
  tela = t1
  teste.innerText = tela
})


