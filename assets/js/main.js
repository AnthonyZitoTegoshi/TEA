function windowResized() {
    // Pega a navbar e os seus filhos
    var navbarContract = document.getElementById("navbar-contract");
    var navbarItems = navbarContract.children;

    // Seta o display da navbar e do contraído
    document.getElementById("navbar-contract").style.display = "block";
    document.getElementById("navbar-contracted").style.display = "none";

    // Pega o tamanho da navbar e dos filhos
    var navbarWidth = navbarContract.clientWidth;
    var itemsWidth = 0;
    for (i = 0; i < navbarItems.length; i++) {
        itemsWidth += navbarItems[i].clientWidth;
    }

    // Seta o contraído caso os filhos não caibam na navbar
    if (itemsWidth > navbarWidth) {
        navbarContract.style.display = "none";
        document.getElementById("navbar-contracted").style.display = "block";
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