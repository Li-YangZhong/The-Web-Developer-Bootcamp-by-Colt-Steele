// 以下代码可以把百度主页的图标逐渐变宽
// an infinite loop

var logo = document.querySelector(".index-logo-srcnew");

setInterval(function () {logo.width+=5;},100)
