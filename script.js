const botao = document.getElementById("modo");

botao.addEventListener("click", ()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

botao.innerHTML="☀️ Modo Claro";

}else{

botao.innerHTML="🌙 Modo Escuro";

}

});

const pesquisa=document.getElementById("pesquisa");

pesquisa.addEventListener("keyup",()=>{

const texto=pesquisa.value.toLowerCase();

const itens=document.querySelectorAll("#listaAlbuns li");

itens.forEach(item=>{

if(item.innerText.toLowerCase().indexOf(texto)>-1){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.background="#ff6600";
card.style.color="white";

});

card.addEventListener("mouseout",()=>{

card.style.background="";
card.style.color="";

});

});

console.log("Blog Charlie Brown Jr carregado com sucesso!");
