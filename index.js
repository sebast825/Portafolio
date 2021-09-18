const hero = document.querySelector('#arriba');
  const text = document.querySelectorAll('.mover');
  
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
    ${xWalk}px ${yWalk}px 8px rgba(0,0,0,0.5)`
	})	   
  }

  hero.addEventListener('mousemove',shadow)