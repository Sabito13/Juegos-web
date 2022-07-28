const contenedor = document.querySelector('.contenedor')  
let cartas = []
let cartasPosicion = []
let cElegida= []
let puntaje = 0
let contAccesos = 0

contenedor.ondragstart = function() {
    return false;
  };
const iniciar = ()=>{
    for (let i = 0; i < 6; i++) {
        cartas[i]=[]
        for (let j = 0; j < 6; j++) {
            let casilla = document.createElement('div')
            casilla.setAttribute('class','casilla-pos-'+i+'-'+j)
            casilla.setAttribute('onclick','elegirCarta('+i+','+j+')')
            contenedor.appendChild(casilla)

            cartas[i][j]='-'
        }
}
setearPosicionCartas()
setearPosicionCartas()

dibujarCartas()

empezarTiempo()
//console.log(cartas)
}


const setearPosicionCartas =() =>{
    let run = true
    let cont = 0

    let posx;
    let posy;

    for (let i = 0; i < 18; i++) {
        run = true
        while(run){
            posx= Math.floor(Math.random()*6)
            posy= Math.floor(Math.random()*6)

            if(cartas[posx][posy] == '-' ){
                cartas[posx][posy] = i 
                cartasPosicion.push([posx,posy])
                run = false
            }
        }
    }

}


const dibujarCartas =()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(data =>data.json())
    .then(personajes => ObtenerImagenes(personajes))

    const ObtenerImagenes = (personajes)=>{

        let {results}= personajes
        let cont= 0

        cartasPosicion.forEach(posicion=>{
            if(cont == 18){
                cont = 0
            }
                let casilla = document.querySelector('.casilla-pos-'+posicion[0]+'-'+posicion[1])
                let imagenPersonaje =document.createElement('img')
                imagenPersonaje.setAttribute('src',results[cont].image)

                casilla.className+= ' tapar-carta'
                casilla.appendChild(imagenPersonaje)
                cont++
    
            })

    }

    }

const elegirCarta = (x,y) =>{
//console.log('x '+x+' y '+y+' carta '+cartas[x][y])
let casilla;

if(contAccesos == 0){
    casilla = document.querySelector('.casilla-pos-'+x+'-'+y)
    casilla.classList.remove('class','tapar-carta')
    
    cElegida.push(x,y)
    contAccesos++

}else if((contAccesos == 1) && !(cElegida[0] == x && cElegida[1] ==y)){
    contAccesos++
    casilla = document.querySelector('.casilla-pos-'+x+'-'+y)
    casilla.classList.remove('class','tapar-carta')
    
    setTimeout(()=>{     
            if( (cartas[cElegida[0]][cElegida[1]]  == cartas[x][y])){
                //console.log('acertaste')
                setPuntaje(1)
            }else{
                //console.log('fallaste')
                setPuntaje(-1)
    
                casilla.className +=' tapar-carta'
                casilla = document.querySelector('.casilla-pos-'+cElegida[0]+'-'+cElegida[1])
                casilla.className +=' tapar-carta'
            }
            cElegida = []
            contAccesos =0
    },1000)
}
    
    
    



}        

const setPuntaje= (valor) =>{
    puntaje +=valor

    let puntajeDiv = document.querySelector('.puntaje')
    puntajeDiv.textContent = 'Puntaje '+ puntaje
}

const empezarTiempo =() =>{
    let tiempo = document.querySelector('.tiempo')
    let segundos = 0
    let minutos = 0
    setInterval(()=>{
        tiempo.textContent = minutos+' : '+segundos
        segundos++
        if (segundos == 59) {
            segundos = 0
            minutos++
        }
    },1000)

}
