let contenedor = document.getElementById("container");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");

let puntos= document.querySelector(".puntos");
let numero = document.querySelector(".numero");
let boton= document.querySelector(".inicio");
let tiempo = document.querySelector(".cronometro");
let numeroGanar = document.querySelector("#numeroGanar");

inputColorRojo = document.querySelector("#inputColorRojo");
inputColorVerde = document.querySelector("#inputColorVerde");
inputColorAzul = document.querySelector("#inputColorAzul");
inputColorAmarillo = document.querySelector("#inputColorAmarillo")


let contador=0;
// let a = 0;
let nums=[]

let verificarInput = ()=>{
    if( numeroGanar.value.indexOf(".")==-1 &&numeroGanar.value>0 ){
        valorInput=numeroGanar.value
        valorInputMenos = (Number(numeroGanar.value)-1)
    }else{
        alert("ingrese un numero entero , mayor a 0")
    }
}


const elegirColorCero=()=>{
    a.classList.remove("green","red","yellow","blue");
    if(nums[0]==0){
        a.classList.add("green"); 
       
    } else if(nums[0]==1){
        a.classList.add("red");
        
    }else if(nums[0]==2){
        a.classList.add("yellow");
        
    }else if(nums[0]==3){
        a.classList.add("blue");
       
    }    
}

const elegirColorUno=()=>{
    b.classList.remove("green","red","yellow","blue");
    if(nums[1]==0){
        b.classList.add("green");        
    } else if(nums[1]==1){
        b.classList.add("red");
    }else if(nums[1]==2){
        b.classList.add("yellow");
    }else if(nums[1]==3){
        b.classList.add("blue");
    }    
}

const elegirColorDos=()=>{
    c.classList.remove("green","red","yellow","blue");
    if(nums[2]==0){
        c.classList.add("green");        
    } else if(nums[2]==1){
        c.classList.add("red");
    }else if(nums[2]==2){
        c.classList.add("yellow");
    }else if(nums[2]==3){
        c.classList.add("blue");
    }    
}

const elegirColorTres=()=>{
    d.classList.remove("green","red","yellow","blue");
    if(nums[3]==0){
        d.classList.add("green");        
    } else if(nums[3]==1){
        d.classList.add("red");
    }else if(nums[3]==2){
        d.classList.add("yellow");
    }else if(nums[3]==3){
        d.classList.add("blue");
    }    
}
const colorBarra=()=>{
    colorFondoBarra.classList.remove("green","red","yellow","blue");
    if(0==colorGanar){
        colorFondoBarra.classList.add("green");        
    } else if(1==colorGanar){
        colorFondoBarra.classList.add("red");
    }else if(2==colorGanar){
        colorFondoBarra.classList.add("yellow");
    }else if(3==colorGanar){
        colorFondoBarra.classList.add("blue");
    }    
}

//ELIGE COLOR
clickContenedor=false 
const elegirColor = ()=>{
    if(clickContenedor===true ){
    nums=[];
    while(nums.length<4){

        h=Math.floor(Math.random()*4)+0;
    
        if(nums.includes(h)==false){
            nums.push(h);
        }
        console.log(nums)
       
    }
    elegirColorCero();
    elegirColorUno();
    elegirColorDos();
    elegirColorTres();
    colorBarra();
}
}





//INDICA EL TIEMPOoooooooooooooooooooooooooooooooooooooooooo
let tiemp = 0, intervalo = 0;
let verificador = false;

const iniciarContador = ()=>{
    if (verificador===false){
        intervalo= setInterval(() => {
            tiemp +=0.01;
            tiempo.innerHTML = tiemp.toFixed(2);
        }, 10);
        verificador=true;
        contador=0 ;         
         clickContenedor=true; 
    } else {        
        verificador=false;
        clearInterval(intervalo);
        tiemp=0.00;
        contador=0 ;
        tiempo.innerHTML=tiemp.toFixed(2);
        puntos.innerHTML= contador     
    }
}

const pararTiempo = ()=>{
    if(contador>=valorInput){            
        clearInterval(intervalo);    
       
        clickContenedor=false 
    }
}


 //DELAY

habilitarDelay=false

const delay =()=>{
    if(habilitarDelay==false){

    setTimeout(()=>{
        iniciarContador();        
        elegirColor();
        habilitarDelay=true;  
        
        funcionPrueba();
    },500)}else{

        iniciarContador();        
        elegirColor();
        habilitarDelay=false;  
        habilitarContar=false;      
    }
}


let contadorPositivo=()=>{
    if (contador<=0){
        contador=0
        }else{
            contador=contador-1
        }  
     
}
// 

habilitarContar=false
const contar = ()=>{
    if(contador<valorInput && habilitarContar===false){
    puntos.innerHTML = contador; 
    numero.innerHTML = nums; 
    cantidadFondoBarra();
    funcionPrueba();
      
    habilitarContar=false
    return puntos;
    }else if(contador >=valorInputMenos ) {
        puntos.innerHTML = `obtuviste ${valorInput} puntos en ${tiemp.toFixed(2)} segundos!`
        habilitarContar=true;
        pararTiempo();       
        cantidadFondoBarra();
        funcionPrueba();
       
       
        
        
    }
 }


 const cantidadFondoBarra = ()=>{
     if(contador<=valorInput ){
    let atr= 90
    cantidad= (Number(contador)* atr / Number(numeroGanar.value))
    }else{
        cantidad = 0
    }
 }
 const colorFondoBarra = document.querySelector(".colorBarra");
let funcionPrueba=()=>{
    colorFondoBarra.style.width = `${cantidad}%`
    }

//SELECCIONAR CO0LOOOOOOOOOOOOOOOOOOOOOOOOOOOR
colorGanar=1
 const colorAzul= ()=>{
    
        colorGanar = 3;
    
}
const colorRojo= ()=>{
   
        colorGanar = 1;   
     
}
const colorVerde= ()=>{
    
        colorGanar = 0;        
     
}
const colorAmarillo= ()=>{
    
        colorGanar = 2;      
       
}


let contadorA =()=>{
    if(nums[0]==Number(colorGanar)){
        contador+=1        
    }else{
        contadorPositivo();  
    }
    contar();
   
}


let contadorB =()=>{
    if(nums[1]==Number(colorGanar)){
        contador+=1
      
    }else{
          contadorPositivo();  
        }
        contar();
        
}

let contadorC =()=>{
    if(nums[2]==Number(colorGanar)){
        contador+=1
   
    }else{
        contadorPositivo();                
    }
    contar();
  
}

let contadorD =()=>{
    
    if(nums[3]==Number(colorGanar)){
        contador+=1
       
    }else{
        contadorPositivo();   
    }
    contar();
   
}


inputColorAzul.addEventListener("click",colorAzul);
inputColorRojo.addEventListener("click",colorRojo);
inputColorVerde.addEventListener("click",colorVerde);
inputColorAmarillo.addEventListener("click",colorAmarillo);


a.addEventListener("click",contadorA);
b.addEventListener("click",contadorB);
c.addEventListener("click",contadorC);
d.addEventListener("click",contadorD);

boton.addEventListener("click",delay);
contenedor.addEventListener("click", elegirColor);


boton.addEventListener("click",verificarInput)

