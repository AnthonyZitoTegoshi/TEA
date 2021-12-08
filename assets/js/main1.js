// Função que lida com o clique na tela
function windowClicked(event) {
    // Verifica se o clique foi em algum "contractible"
    var contractibles = window.document.getElementsByClassName("contractible");
    for (var i = 0; i < contractibles.length; i++) {
        // Pega a área do contractible
        var area = contractibles[i].children[0].getBoundingClientRect();

        // Verifica se o clique foi na área do contractible
        if (area.left <= event.clientX && area.left + area.width >= event.clientX && area.top <= event.clientY && area.top + area.height >= event.clientY) {
            alert("foi");
        }
    }
}

// Função que lida com o resize da tela
function windowResized() {
    // Faz a responsividade de todos os elementos "contractible"
    var contractibles = window.document.getElementsByClassName("contractible");
    for (var i = 0; i < contractibles.length; i++) {
        // Pega o elemento com os itens do dropdown
        var dropdown = contractibles[i].getElementsByClassName("dropdown")[0];

        // Pega os filhos do dropdown com os itens
        var children = dropdown.children;

        // Seta o display do dropdown com os itens para block
        dropdown.removeAttribute("style");

        // Seta o display do elemento que porta o dropdown contraído para none
        contractibles[i].firstElementChild.style.display = "none";

        // Pega as posição do primeiro e último elementos
        var left = children[0].getBoundingClientRect().left;
        var right = children[children.length - 1].getBoundingClientRect().right;

        // Seta o display do dropdown com os itens para none
        dropdown.style.display = "none";

        // Pega o lugar máximo que o primeiro e último elementos deveriam estar
        var maxLeft = dropdown.getBoundingClientRect().left;
        var maxRight = dropdown.getBoundingClientRect().right;

        document.getElementById("oi").innerHTML = maxLeft;

        // Compara os valores e contrai caso preciso
        if (left <= maxLeft && right >= maxRight) {alert("oi");
            // Seta o display do elemento que porta o dropdown contraído para block
            contractibles[i].firstElementChild.style.display = "";
        } else {
            // Seta o display do dropdown com os itens para block
            dropdown.style.display = "";
            dropdown.removeAttribute("style");
        }
    }
}

// Chama a função que lida com o clique na tela
window.addEventListener("click", windowClicked);

// Chama função que lida com o resize da tela
window.addEventListener("resize", windowResized);

// Chama todas as funções necessárias uma vez ao carregar o site
window.addEventListener("load", windowResized)