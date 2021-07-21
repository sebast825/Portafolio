let alumnos = prompt("¿Cuantos alumnos son?");
let dias = Number(prompt("¿Cuantos dias vas a tomar asistencia?"));
let alumnosTotales = [];

for(let i=0; i<alumnos; i++){
    alumnosTotales[i]= [prompt("¿Cual es tu nombre?"+(i+1)),0]
}

const presente= (alumnos,p)=>{
    let nombre = prompt(`Ingresar "p" si:  ${alumnos} estuvo presente`);
    if(nombre=="p"){
        alumnosTotales[p][1]++;
    }
}

for(let i=0; i<dias;i++){
    for(alumno in alumnosTotales){
        presente(alumnosTotales[alumno][0],alumno)
    } 
}





for(alumno in alumnosTotales){
    let respuesta = `${alumnosTotales[alumno][0]}<br>
    ------Presente: ${alumnosTotales[alumno][1]}<br>
    ------Ausente:${dias -alumnosTotales[alumno][1]}`

    if(dias-parseInt(alumnosTotales[alumno][1]) > (dias*0.7)){
        respuesta +=`<b style="color:red"> Reprobado por inasistencias </b><br><br>`
    }
    else{
        respuesta += "<br><br>"
    }
    document.write(respuesta)
}