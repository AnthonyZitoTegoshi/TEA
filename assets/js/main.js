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

function slide1(){
    document.getElementById('slide').src = "assets/img/slideImg/1.jpg";
    setTimeout("slide2()", 1000);
}
function slide2(){
    document.getElementById('slide').src ="assets/img/slideImg/2.jpg";
    setTimeout("slide3()",1000);
}
function slide3(){
    document.getElementById('slide').src = "assets/img/slideImg/3.jpg";
    setTimeout("slide1()",1000);
}

// Seta quando chamar a função de resize
window.addEventListener("resize", windowResized);
windowResized();