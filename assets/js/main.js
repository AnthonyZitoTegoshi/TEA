function windowResized() {
    // Pega as navbars contraíveis
    var navbars = document.getElementsByClassName("navbar-contractible");

    // Arruma todas as navbars contraíveis
    for (var i = 0; i < navbars.length; i++) {
        // Pega seus elementos e os itens do primeiro
        var firstChild = navbars[i].firstElementChild;
        var lastChild = navbars[i].lastElementChild;
        var items = firstChild.children;

        // Seta o display para o padrão definido
        firstChild.style.display = "block";
        lastChild.style.display = "none";

        // Conta o tamanho do primeiro filho e dos seus itens
        var maxWidth = firstChild.clientWidth;
        var itemsWidth = 0;
        for (var j = 0; j < items.length; j++) {
            itemsWidth += items[j].clientWidth;
        }

        // Caso os filhos não caibam na navbar, seta para o modo contraído
        if (itemsWidth > maxWidth) {
            firstChild.style.display = "none";
            lastChild.style.display = "block";
        }
    }
}

// Seta quando chamar a função de resize
window.addEventListener("resize", windowResized);

// Chama a função uma vez quando estiver carregada a página
window.addEventListener("load", windowResized);

// Função que verifica com qual dropdown o usuário interagiu
function dropdownToggle(e) {
    // Verifica qual foi o dropdown clicado
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
        // Pega o modelo retângulo do dropdown 
        var dropdown = dropdowns[i].getBoundingClientRect();
        
        // Pega o filho que deve aparecer ou desaparecer
        var items = dropdowns[i].firstElementChild;

        // Pega os valores css do filho antes de ser displayado
        var itemsCS = getComputedStyle(items);

        // Pega o modelo retângulo do filho antes de ser displayado
        var itemsRect = items.getBoundingClientRect();

        // Verifica se o mouse está ou não sobre o dropdown para mostrar ou não o filho
        if (dropdown.left <= e.clientX && dropdown.left + dropdown.width >= e.clientX && dropdown.top <= e.clientY && dropdown.top + dropdown.height >= e.clientY && (itemsCS.display == "none" || e.type == "mouseover") || itemsRect.left <= e.clientX && itemsRect.left + itemsRect.width >= e.clientX && itemsRect.top <= e.clientY && itemsRect.top + itemsRect.height >= e.clientY) {
            // Ativa o filho para pegar os seus valores quando está visível
            items.style.display = "block";

            // Pega os valores css do filho verdadeiros após o filho ficar visível
            var itemsCS = getComputedStyle(items);

            // Pega o modelo retângulo do filho verdadeiros após o filho ficar visível
            var itemsRect = items.getBoundingClientRect();

            // Ajusta o posicionamento do filho para que não fique fora da tela
            if (itemsRect.left + itemsRect.width > window.innerWidth) {
                items.style.left = itemsCS.left.substring(0, itemsCS.left.length - 2) - (itemsRect.left + itemsRect.width - window.innerWidth) + "px";
            }
            if (itemsRect.top + itemsRect.height > window.innerHeight) {
                items.style.top = itemsCS.top.substring(0, itemsCS.top.length - 2) - (itemsRect.top + itemsRect.height - window.innerHeight) + "px";
            }
        } else {
            // Contrai o dropdown que não foi acionado
            items.style.display = "none";
            items.style.left = "unset";
            items.style.top = "unset";
        }
    }
}

// Listen que verifica os cliques do usuário para abrir ou fechar dropdowns
window.addEventListener("click", dropdownToggle);

// Listen que verifica se o dropdown está com o mouse sobreposto
window.addEventListener("mouseover", dropdownToggle);


//Criando um slider

//Tentativa-2
function slide1(){
    document.getElementById('banner').src="assets/img/slideImg/6.jpg";
    setTimeout("slide2()", 1000);
    }
    
function slide2(){
    document.getElementById('banner').src="assets/img/slideImg/2.jpg";
    setTimeout("slide3()", 1000);
    }
    
function slide3(){
    document.getElementById('banner').src="assets/img/slideImg/3.jpg";
    setTimeout("slide1()", 1000);
    }

//jquery activation

let img_array=[
    'assets/img/slideImg/1.jpg',
    'assets/img/slideImg/2.jpg',
    'assets/img/slideImg/3.jpg',
    'assets/img/slideImg/4.jpg'
];

let pickup = $('.slideshow-board');
alert(pickup);
let sli = 0;

$(document).ready(function () {
    pickup.fadeOut(1000, ()=>{
        pickup.attr('src', img_array[sli]);
        pickup.fadeIn(1000);
    });    
},3000);

