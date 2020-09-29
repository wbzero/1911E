function rem() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px";
    console.log(document.documentElement.clientWidth)
}
rem();
window.onresize = rem;


