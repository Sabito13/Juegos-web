const contenedor = document.querySelector('.contenedor')
const palabraDiv = document.querySelector('.palabra-incompleta')
const intentos = document.querySelector('.intentos')

let palabra;
let palabraOculta;
let puntoNegativo;

const palabras = ["o","altos","actores","talvez","sitios","saluda","quejas","planeando","moriremos","habrías","estarían","dejarán","castle","acostumbrado","tyler","torneo","planos","ordeno","morris","miré","kg","dirías","confirmado","vacas","quirófano","ponerlo","origen","fusión","deberá","verdaderos","serían","seguía","sabrán","pas"]

const iniciar = (tipo) =>{
    if(tipo){
        cargarPalabra(palabras[Math.floor(Math.random()*palabras.length)])
    }else{
        fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
        .then(result => result.json())
        .then(palabra => {cargarPalabra(palabra.body.Word)
        
    })
    }
    


}
const cargarPalabra=(parametro)=>{
    palabra = parametro;
    palabraOculta = ''
    puntoNegativo = 10;

    [...palabra].forEach(letra => {
        palabraOculta +='-'
    })

    palabraDiv.textContent = palabraOculta
    intentos.textContent = 'intentos restantes   '+puntoNegativo
    //console.log(palabra)
}


const ingresarLetra = (event)=>{
    event.preventDefault()
    const{value} = event.target.letra
    //console.log(value)

    verificarLetra(value.toLowerCase())
}


const verificarLetra = (letraE) =>{
    if(palabra.includes(letraE)){
        colocarLetras(letraE)
    }else{
        sumarPuntoNegativo()
    }
}


const colocarLetras =(letraE) =>{
    let aux = ''
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letraE) {
            aux += letraE
        }else{
            aux += palabraOculta[i]
        }
    }
    palabraOculta = aux
    palabraDiv.textContent = palabraOculta
    verificarGanador()
}

const sumarPuntoNegativo=()=>{
    puntoNegativo--
    
    intentos.textContent = 'intentos restantes   '+puntoNegativo

    if(puntoNegativo == 0){  
        palabraDiv.textContent = palabra
        reiniciar()
    }
}

const verificarGanador =()=>{
    if(palabraOculta == palabra){
        reiniciar()
    }
}

const reiniciar = ()=>{
    setTimeout(()=>{ 
        iniciar(true)},2000)
}
