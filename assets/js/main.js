// Função que mostra o restante de um texto longo
function displayText(id) {
    var e = document.getElementById(id);
    var children = e.parentElement.children;
    e.style.display = "none";
    for (var i = 1; i < children.length; i++) {
        children[i].style.display = "block";
    }
}

function windowLoaded() {
    // Joga a página para o topo independente de onde estiver
    document.getElementById("go-home").click();

    // Seta o tamanho mínimo das boas vindas
    var welcomeContainer = document.getElementById("welcome-container");
    welcomeContainer.style.minHeight = (welcomeContainer.getElementsByClassName("rule")[0].getBoundingClientRect().height + parseFloat(getComputedStyle(welcomeContainer).paddingTop.substring(0, getComputedStyle(welcomeContainer).paddingTop.length - 2)) + parseFloat(getComputedStyle(welcomeContainer).paddingBottom.substring(0, getComputedStyle(welcomeContainer).paddingBottom.length - 2))) + "px";
}

function windowScrolled(e) {
    var headerSticky = document.getElementById("header-sticky");
    var postWelcome = document.getElementById("begin-lift");
    var classes = headerSticky.classList;
    for (var j = 0; j < classes.length; j++) {
        if (classes[j] == "lift-4") {
            classes.remove(classes[j]);
        }
    }
    headerSticky.setAttribute("class", classes.toString());
    if (headerSticky.getBoundingClientRect().height > postWelcome.getBoundingClientRect().top) {
        headerSticky.setAttribute("class", classes.toString() + " lift-4");
    }
}

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
        var maxWidth = firstChild.getBoundingClientRect().width;
        var itemsWidth = 0;
        for (var j = 0; j < items.length; j++) {
            itemsWidth += items[j].getBoundingClientRect().width;
        }

        // Caso os filhos não caibam na navbar, seta para o modo contraído
        if (itemsWidth >= maxWidth) {
            firstChild.style.display = "none";
            lastChild.style.display = "block";
        }
    }

    // Pega o container de boas vindas e o que vem acima dele e seta para ter o resto do tamanho da tela, contando que ele vai ter o min height
    var preWelcome = document.getElementById("pre-welcome");
    var welcomeContainer = document.getElementById("welcome-container");
    var welcomeTop = welcomeContainer.getBoundingClientRect().top - preWelcome.getBoundingClientRect().top;
    welcomeContainer.style.height = (window.innerHeight - welcomeTop) + "px";

    // Pega os markers e os faz ficarem transformados em relação ao tamanho do header
    var markers = document.getElementsByClassName("marker");
    var height = document.getElementById("header-sticky").getBoundingClientRect().height;
    for (var i = 0; i < markers.length; i++) {
        markers[i].style.position = "absolute";
        markers[i].style.transform = "translateY(-" + height + "px)";
    }

    // Ajusta todos os elementos que devem ser quadrados
    var squares = document.getElementsByClassName("height-to-width");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.height = squares[i].getBoundingClientRect().width + "px";
    }

    // Ajusta as rows que mudam conforme o wrap delas
    var wrapper = document.getElementsByClassName("onwrap-row-center");
    for (var i = 0; i < wrapper.length; i++) {
        // Pega os elementos filhos do wrapper
        var children = wrapper[i].children;

        // Calcula a altura do pai e dos filhos
        var rowHeight = wrapper[i].getBoundingClientRect().height;
        var childrenHeight = 0;
        for (var j = 0; j < children.length; j++) {
            childrenHeight += children[j].getBoundingClientRect().height;
        }

        // Compara a altura dos dois para saber se está onwrap ou não
        var isWrapped = childrenHeight <= rowHeight;

        // Remove qualquer estilo de antes
        wrapper[i].removeAttribute("style");

        // Se estiver onwrap, atua
        if (isWrapped) {
            wrapper[i].style.justifyContent = "center";
        }
    }

    // Ajusta as rows que mudam conforme o wrap delas
    var wrapper = document.getElementsByClassName("onwrap-text-center");
    for (var i = 0; i < wrapper.length; i++) {
        // Pega os elementos filhos do wrapper
        var children = wrapper[i].children;

        // Pega os elementos afetados pelo wrap
        var affected = wrapper[i].getElementsByClassName("onwrap-affected");

        // Calcula a altura do pai e dos filhos
        var rowHeight = wrapper[i].getBoundingClientRect().height;
        var childrenHeight = 0;
        for (var j = 0; j < children.length; j++) {
            childrenHeight += children[j].getBoundingClientRect().height;
        }

        // Compara a altura dos dois para saber se está onwrap ou não
        var isWrapped = childrenHeight <= rowHeight;

        // Remove qualquer estilo do afetados de antes
        for (var j = 0; j < affected.length; j++) {
            affected[j].removeAttribute("style");
        }

        // Se estiver onwrap, atua
        if (isWrapped) {
            for (var j = 0; j < affected.length; j++) {
                affected[j].style.textAlign = "center";
            }
        }
    }
}

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
        if ((dropdown.left <= e.clientX && dropdown.left + dropdown.width >= e.clientX && dropdown.top <= e.clientY && dropdown.top + dropdown.height >= e.clientY || itemsRect.left <= e.clientX && itemsRect.left + itemsRect.width >= e.clientX && itemsRect.top <= e.clientY && itemsRect.top + itemsRect.height >= e.clientY) && itemsCS.display == "none") {
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
            items.removeAttribute("style");
            items.style.display = "none";
        }
    }
}

// Seta quando chamar a função de resize
window.addEventListener("resize", windowResized);

// Seta quando chamar a função de scroll
window.addEventListener("scroll", windowScrolled);

// Listen que verifica os cliques do usuário para abrir ou fechar dropdowns
window.addEventListener("click",dropdownToggle);

// Listen que verifica se o dropdown está com o mouse sobreposto
//window.addEventListener("mouseover", dropdownToggle);

// Chama a função uma vez quando estiver carregada a página
window.addEventListener("load", windowLoaded);
window.addEventListener("load", windowResized);