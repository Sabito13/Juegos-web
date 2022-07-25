const tablaJugador = document.querySelector('.tabla-jugador')
const tablaMaquina = document.querySelector('.tabla-maquina')
let puntajeHumano = 0;
let puntajeMaquina = 0;


const jugar= (elemento)=>{
    const humano = parseInt(elemento)
    const maquina = Math.floor(Math.random()*3) + 1
    const puntajeHumanoWeb = document.querySelector('.puntaje-jugador')
    const puntajeMaquinaWeb = document.querySelector('.puntaje-maquina')

    juegaJugador(humano,true)
    juegaJugador(maquina,false)

    if(humano == maquina){
        
    }else if(humano== 1 && maquina == 3){
        puntajeHumano++
    }else if(humano== 2 && maquina == 1){
        puntajeHumano++
    }else if(humano == 3 && maquina == 2){
        puntajeHumano++
    }else{
        puntajeMaquina++
    }

    puntajeHumanoWeb.textContent = 'Jugador '+ puntajeHumano
    puntajeMaquinaWeb.textContent = 'Maquina '+puntajeMaquina

}

const juegaJugador =(jugada,jugador) =>{
    if (jugador){
        tablaJugador.textContent =''
        if(1 == jugada){
            tablaJugador.appendChild(getImagen('piedra-der'))
        }else if(2 == jugada){
            tablaJugador.appendChild(getImagen('papel-der'))
        }else if( 3 == jugada){
            tablaJugador.appendChild(getImagen('tijera-der'))
        }
    }else{
        tablaMaquina.textContent =''
        if(1 == jugada){
            tablaMaquina.appendChild(getImagen('piedra-izq'))
        }else if(2 == jugada){
            tablaMaquina.appendChild(getImagen('papel-izq'))
        }else if( 3 == jugada){
            tablaMaquina.appendChild(getImagen('tijera-izq'))
        }
    }
    
}

const getImagen = (mano)=>{
    const imagen = document.createElement("img")
    imagen.setAttribute('src',`./varios/${mano}.png`)
    imagen.setAttribute('alt',`${mano}`)
    imagen.setAttribute('class',`enJuego`)
    return imagen
}

