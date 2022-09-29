// function Mudarestado(el) {
//     var display = document.getElementById(el).style.display;
//     if(display == "none")
//         document.getElementById(el).style.display = 'block';
//     else
//         document.getElementById(el).style.display = 'none';
// }
function Mudarestado(elemento){
    visibility = document.getElementById(elemento).style.visibility;
    if(visibility == "hidden") {
        document.getElementById(elemento).style.visibility = 'visible';
    }
    else {
        document.getElementById(elemento).style.visibility = 'hidden';
    }
}