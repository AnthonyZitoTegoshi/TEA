/*// Modifica as primeiras propriedades CSS dos elementos
var properties = ["radius", "padding"];
for (i = 0; i < properties.length; i++) {
    var elem = window.document.getElementsByClassName(properties[i]);//alert(properties[i] + ": " + elem.length);
    for (j = 0; j < elem.length; j++) {
        var classes = elem[j].classList;//alert(properties[i] + ": " + elem.length + " e classes: " + classes);
        for (k = 0; k < classes.length - 1; k++) {
            if (classes[k] == properties[i]) {
                switch (properties[i]) {
                    case "radius":
                        elem[j].style.borderRadius = classes[k + 1] + "px";
                        break;
                    case "padding":
                        elem[j].style.padding = classes[k + 1] + "px";
                        break;
                }
                break;
            }
        }
        //elem[i].style.borderRadius = classes.substring(classes.indexOf(" ", classes.indexOf(properties[i])) + 1, indexOf(" ", classes.indexOf(" ", classes.indexOf(properties[i])) + 1)) + "px";
    }
}*/