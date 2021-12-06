function windowResized() {
    // Pega a navbar contraível
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
windowResized();

// Função para o SLIDE SHOW reduzida
function switchImg(img, imgMax) {
    document.getElementById("slideshow").src = "assets/img/slideImg/" + img + ".jpg";
    setTimeout(switchImg, 3000, (++img > imgMax) ? 1 : img, imgMax);
}

// Começa a rodar o slideshow pela primeira imagem e mostra quantas são para rodar
switchImg(1, 4);