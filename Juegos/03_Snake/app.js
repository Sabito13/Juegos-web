const contenedor = document.querySelector('.contenedor')  
let cabezaX; 
let cabezaY; 
let cuerpoSnake=[]
let largoSnake = 2
let comidaX;
let comidaY;
let puntaje = 0
let velocidad;

let moverSnakeUp;
let moverSnakeDown;
let moverSnakeLeft;
let moverSnakeRight; 

let ancho = 20
let alto = 20


const iniciar = ()=>{
    contenedor.textContent=''
    contenedor.style.gridTemplateRows =' repeat('+ancho+',auto)';
    contenedor.style.gridTemplateColumns =' repeat('+alto+',auto)';
    cabezaX = 4
    cabezaY = 4
    cuerpoSnake=[]
    largoSnake = 2
    velocidad = 200
    puntaje = 0


    for (let i = 0; i < ancho; i++) {
        for (let j = 0; j < alto; j++) {
            let casilla = document.createElement('div')
            casilla.setAttribute('class','casilla-pos-'+i+'-'+j)
            contenedor.appendChild(casilla)
        }
}
posicionarSnake(cabezaX,cabezaY)
posicionarComida()
}


const posicionarSnake =(x,y) =>{
    let autoColision = false
    cuerpoSnake.forEach(posicion => {
        if(posicion[0] == x && posicion[1] == y){
            autoColision = true
        }
    });

    if((x == ancho) || (y == alto) || (x == -1) || (y == -1) || autoColision){
        limpiarIntervalos()
        gameOver()
    }else{
        cuerpoSnake.push([x,y])
        let casilla = document.querySelector('.casilla-pos-'+x+'-'+y)
        casilla.style.backgroundColor = 'red'


        if(comidaX == x && comidaY ==y){
            posicionarComida()
            largoSnake++
            if(velocidad !=100){
                velocidad -= 10
            }
            
            sumarPuntaje()
        }


        if(cuerpoSnake.length - largoSnake > 1) {
            let borrar =  cuerpoSnake.shift()
            let casillaAnterior = document.querySelector('.casilla-pos-'+borrar[0]+'-'+borrar[1])
            casillaAnterior.style.backgroundColor='black'
        }
    }
}


document.addEventListener('keydown', (event) => {
    let keyValue = event.key;
    //let codeValue = event.code;

    if (keyValue =='ArrowUp') {
        limpiarIntervalos()
        
        moverSnakeUp =  setInterval(()=>{
            cabezaX--
            posicionarSnake(cabezaX,cabezaY)
            },velocidad)
    }

    if (keyValue =='ArrowDown') {
        limpiarIntervalos()

        moverSnakeDown = setInterval(()=>{
            cabezaX++
            posicionarSnake(cabezaX,cabezaY)
            },velocidad)
    }

    if (keyValue =='ArrowLeft') {
        limpiarIntervalos()
        
        moverSnakeLeft = setInterval(()=>{
            cabezaY--
            posicionarSnake(cabezaX,cabezaY)
            },velocidad)

    }

    if (keyValue =='ArrowRight') {
        limpiarIntervalos()
        
        moverSnakeRight = setInterval(()=>{
            cabezaY++
            posicionarSnake(cabezaX,cabezaY)
            },velocidad)
    }
}, false);


const posicionarComida = () =>{
    run = true
    while(run){
        comidaX = Math.floor(Math.random()*ancho)
        comidaY = Math.floor(Math.random()*alto)
        
        cuerpoSnake.forEach(posicion => {
            if(posicion[0] != comidaX && posicion[1] != comidaY){
                run = false
            }
        });
    }
    let casilla = document.querySelector('.casilla-pos-'+comidaX+'-'+comidaY)
    casilla.style.backgroundColor = 'yellow'
}


const limpiarIntervalos=()=>{
    clearInterval(moverSnakeDown)
    clearInterval(moverSnakeUp)
    clearInterval(moverSnakeLeft)
    clearInterval(moverSnakeRight)
}

const gameOver = ()=>{
    contenedor.textContent ='Game over'
    contenedor.style.color = 'red'
    contenedor.style.fontSize = '100px'

    setTimeout(()=>{iniciar()},2000)
}


const sumarPuntaje=()=>{
    puntaje++
    let punt = document.querySelector('.puntaje')
    punt.textContent = 'Puntaje  '+puntaje
}



    

