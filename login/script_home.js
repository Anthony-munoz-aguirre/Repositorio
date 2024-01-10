let nombre=sessionStorage.getItem("nombre");

let body=document.querySelector("body")


document.getElementById("nombre").innerText = nombre;

if (nombre=="juana"){
    body.classList.add("female")
    body.classList.remove("male")
}else if(nombre=="Anthony"){
    body.classList.add("male")
    body.classList.remove("female")
}
if(nombre == null){
    location.href="./index.html"
}

function cerrarSesion(){
    sessionStorage.clear();
    location.href="./index.html"
}
