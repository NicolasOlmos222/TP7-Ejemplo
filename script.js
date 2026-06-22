let nombre = "";
let edad = 0;

function guardarDatos(){
    console.log("FUNCION GUARDAR DATOS");

    nombre = document.getElementById("nombre").value;
    edad = parseInt(document.getElementById("edad").value);

    if(nombre == ""){
        console.log("El nombre esta vacio");
    }else{
        console.log("Nombre: " + nombre);
    }

    console.log("Edad: " + edad);

    document.getElementById("resultado").style.display = "block";

    document.getElementById("resultado").innerHTML += "<h2>Nombre: " + nombre + "</h2>";
    document.getElementById("resultado").innerHTML += "<h2>Edad: " + edad + "</h2>";
    document.getElementById("resultado").innerHTML += "<button onclick='borrar()'>Borrar</button>";
}

function borrar(){
    document.getElementById("resultado").innerHTML = "";
}

function cambiarPag(pagina){
    if(pagina == 1){
        window.location.href = "index.html";
    }else if(pagina == 2){
        window.location.href = "otraPagina.html";
    }
}