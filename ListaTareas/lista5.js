const formulario = document.querySelector("form");
const nombre = document.querySelector(".nombre");
const descripcion = document.querySelector("textarea");
const table = document.querySelector("table");
const tareas = [];

formulario.onsubmit = function (asd){   
    asd.preventDefault();    
    
    let boton = document.createElement("button");
    boton.classList.add("button");
    let td = document.createElement("TD");
    let tdd = document.createElement("TD");
    let tr = document.createElement("TR");

    td.classList.add("td");
    tdd.classList.add("td")
    boton.innerText= "Borrar";
    tdd.innerText = descripcion.value;
    td.innerText = nombre.value;

    
    tr.appendChild(td);
    tr.appendChild(tdd)   
    tr.appendChild(boton); 
    table.appendChild(tr);

    nombre.value="";
    descripcion.value="";

    tr.addEventListener("click",function(){
        table.removeChild(tr);
    })
}


