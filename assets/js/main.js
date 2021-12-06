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