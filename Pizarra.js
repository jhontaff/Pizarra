var cuadro = document.getElementById("plano");
var papel= cuadro.getContext("2d");
var clr = document.getElementById("col");
var x ;
var y ;

//selector de color
clr.onchange = function () 
{ clr = this.value;

  //para retomar cursor al asignar nuevamente color
  papel.globalCompositeOperation="source-over";  
}
// selector de ancho de línea
papel.lineWidth = 2;
const ancholinea = value => papel.lineWidth = value;


// Borrador
const erase =() => papel.globalCompositeOperation = "destination-out";

drawline("black", 1, 1, 499, 1, papel);
drawline("black", 1, 1, 1, 499, papel);
drawline("black", 499, 499, 1, 499, papel); 
drawline("black", 499, 499, 499, 1, papel);
window.addEventListener("mouseup", soltar);
cuadro.addEventListener("mousedown", oprimir);
cuadro.addEventListener("mousemove", mover);

function oprimir (event)
{   // 0 bton izquierdo, 1 bton medio, 2 bton derecho
    if ( event.button == 0) 
    {   estado = 1;
        x = event.pageX;
        y = event.pageY ;
    } else
    {   estado == 0;
    }
}
function mover(event)
{   if (estado == 1)
    {   drawline(clr, x, y, event.pageX, event.pageY, papel);
        x = event.pageX;
        y = event.pageY;
    } else 
    { estado = 0;
    }
}
function soltar(evento)
{   estado = 0;
}

function drawline(color, xin, yin, xfin, yfin, lienzo)
{ 
      lienzo.beginPath();
      lienzo.strokeStyle = color;
      lienzo.moveTo(xin, yin);
      lienzo.lineTo(xfin, yfin);
      lienzo.stroke();
      lienzo.closePath();
}
  