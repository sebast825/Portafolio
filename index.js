//son para la somvra
const hero = document.querySelector('#arriba');
const text = document.querySelectorAll('.mover'); 
const imgYo = document.querySelector('.imgYo'); 

//son para el header
const triggers = document.querySelectorAll('header p ');
const hightlight = document.createElement('span');
const header = document.querySelector('header');


//la cantidad que se va a mover
const walk = 20;

function shadow (e){
  //offsetHeight: pasa pedidas fijas
  //offsetX: pasa medidas variables
  const {offsetWidth : width, offsetHeight : height} = hero;
  const {offsetX : x ,  offsetY:y}=e;   
  //como esta el div y el h1, al entrar dentro del h1, sucede otro evento mas, por lo que los valores de x e y se reinician, x eso se hace el if
  if (this!==e.Target){
    xs = x + e.target.offsetLeft;
    ys = y + e.target.offsetTop;

      // console.log('kc :  ',xs,ys)
    }
    //calculo choclo
  const xWalk = Math.round((xs / width * walk) - (walk / 2 ));
  const yWalk = Math.round((ys / height * walk) - (walk / 2));

    //le da los colores
	text.forEach(tex=>{
		tex.style['textShadow']= `
    ${xWalk}px ${yWalk}px 8px rgba(0,0,0,0.5)`;
	})	   
  imgYo.style['boxShadow']=`
  ${xWalk}px ${yWalk}px 8px rgba(0,0,0,0.5)`;

}
//al mover el mouse mueve la sombra 
hero.addEventListener('mousemove',shadow)

  




hightlight.classList.add('highlight');
header.append (hightlight);

//muve la posicion del span
function hightlightLink(e){
  //apenas loguias la pagina aparece el span, x eso esta oculto de entrada y con la clase se le saca
  hightlight.classList.add('hidden');
  //te da los datos de donde esta el objeto en el que sucede
  const linkCoords = e.getBoundingClientRect();
  //la cantidad en que aplica el efecto
  const coords = {
    width: linkCoords.width,
    height : linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top : linkCoords.top + window.scrollY
  }
  console.log( linkCoords.left , window.scrollY)
  hightlight.style.width = `${coords.width}px `;
  hightlight.style.height = `${coords.height}px `;
  console.log( 'high',hightlight.style.width ,hightlight.style.height)
  console.log(coords.left,coords.top)
  //para que se desplace de una palabra a otra
  hightlight.style.transform = `translate(${coords.left}px) `;
  
}




//aplica un delay a la funcion para que no se ejecute constantemente
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
  var context = this, args = arguments;
  var later = function() {
  timeout = null;
  if (!immediate) func.apply(context, args);
    };
  var callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.scroll');
const alto= document.querySelector('#arriba');
//dependiendo el valor del contador de la funcion checkside, hace que el elemento span se posicione sobre uno de los elementos del header
function clase(contador){
  if (contador==-1){
    // console.log('uno')
    return (hightlightLink(triggers[0]))
  }else if(contador==1){
    // console.log('dos')
    return (hightlightLink(triggers[1]))
  }else{
    // console.log('tres')
    return (hightlightLink(triggers[2]))
  }
}



function checkside(){
  contador =0
  sliderImages.forEach(sliderImage=>{     
  const variable = window.scrollY	 
    
  if(variable>sliderImage.offsetTop-81){
    contador+=1   
  }else{
    contador-=1
  }
  })
  console.log(contador)
  return clase(contador)
   
   
  }
//cada vez que se escrollea aplica el evento para modificar el header
window.addEventListener('scroll',debounce(checkside))