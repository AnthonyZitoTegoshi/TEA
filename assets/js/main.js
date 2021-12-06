function slide1(){
    document.getElementById('slide').src = "";
    setTimeout("slide2()", 1000);
}
function slide2(){
    document.getElementById('slide').src ="";
    setTimeout("slide3()",1000);
}
function slide3(){
    document.getElementById('slide').src = "";
    setTimeout("slide1()", 1000);
}