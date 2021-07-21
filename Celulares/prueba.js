let divPadre = document.getElementById("diviano");
let divPadreCel = document.getElementById("divianoCel");

class celulares{
    constructor(img,modelo,peso,resCam){
    this.img=img;
    this.modelo =modelo;
    this.peso=peso;
    this.resCam=resCam;

    this.info=` Modelo: ${this.modelo}<br>
    Peso: ${this.peso} g.<br>
    Resolucion camara: ${this.resCam} Mpx <br>`       
    }
    atr(){
        let divHijo= document.createElement("DIV");
        divHijo.classList.add("divHijo");
    
        let divCel = document.createElement("DIV");
        divCel.classList.add("divCel");
        divCel.innerHTML= this.info;

        let divImgCel= document.createElement("DIV");   
        divImgCel.classList.add("divCel");                  
        divImgCel.innerHTML= this.img;
        

        divHijo.innerHTML=this.img;
        divHijo.appendChild(divCel);
        
        divPadreCel.appendChild(divHijo)

        }
}


class cel extends celulares{
    constructor(img,modelo,peso,resCam,resCam2){
        super(img,modelo,peso,resCam);
        this.resCam2=resCam2;
        this.infou=`${this.info}Resolucion Frontal: ${this.resCam2} Mpx<br>`
    }
   
    atr(){       
        let divHijo= document.createElement("DIV");
        divHijo.classList.add("divHijoCel");
    
        let divCel = document.createElement("DIV");
        divCel.classList.add("divCel");
        divCel.innerHTML=  this.infou;

        let divImgCel= document.createElement("DIV");   
        divImgCel.classList.add("divCel");                  
        divImgCel.innerHTML= this.img;
        

        divHijo.innerHTML=this.img;
        divHijo.appendChild(divCel);
        
        divPadre.appendChild(divHijo);
        }       

    }  

let a = new celulares("<img src= fotocelu.jpg><br>","b200","1200",8,7);

let b = new celulares("<img src= fotocelu.jpg><br>","Ip9","1350",7,5);

let c = new cel("<img src= fotocelu.jpg><br>","CJ70","1272",8,9);
let d = new cel("<img src= fotocelu.jpg><br>","Brem200","840",7,3);

let f = new cel("<img src= fotocelu.jpg><br>","NTS7","700",12,8);
let e = new cel("<img src= fotocelu.jpg><br>","BG23","900",7,5);


a.atr()
c.atr()
b.atr()
d.atr()
e.atr()
f.atr()