const contenedor = document.querySelector('.contenedor')
const tateti = [['','',''],['','',''],['','','']]
let puntajeJugador =0
let puntajeMaquina = 0
let finJuego = false

const seleccionCasilla = (f,c)=>{
    if(!finJuego){
        if(jugadorJuega(f,c)){
            if(ganador('x')){
                setPuntaje(true)
                setTimeout(()=>{reiniciar()},1500) 
            }else{
                maquinaJuega()
            }

            if(ganador('o')){
                setPuntaje(false)
                setTimeout(()=>{reiniciar()},1500)
            }
        }else if(empate()){
        setTimeout(()=>{reiniciar()},1500)
        }
    }   
}

const jugadorJuega=(f,c)=>{
    const casilla = document.querySelector(`.fila-${f}-col-${c}`)
    if(tateti[f-1][c-1] === ''){
        casilla.className += ' jugador'
        tateti[f-1][c-1] = 'x'
        return true
    }
    return false
}

const maquinaJuega = () =>{
    let esc =true
    let cont = 0
    while(esc && cont <30){
        let fila = Math.floor(Math.random() * 3);
        let col = Math.floor(Math.random() * 3);
        let casillaa = document.querySelector(`.fila-${fila+1}-col-${col+1}`)
        
        if(tateti[fila][col] === ''){
            tateti[fila][col] = 'o'   
            casillaa.className += ' maquina'
            esc = false
        }
        cont++
    }
}

const ganador = (tipo) =>{
    let contFila = 0;

    for(let fila = 0;fila<3;fila++){
        for(let col = 0;col<3;col++){
            if(tateti[fila][col] === tipo){
                contFila++
            }
        }
        if(contFila === 3){
            return true
        }else{
            contFila=0
        }
    }
    
    for(let col = 0;col<3;col++){
        for(let fila = 0; fila<3; fila++){
            if(tateti[fila][col] === tipo){
                contFila++
            }
        }
        if(contFila === 3){
            return true
        }else{
            contFila=0
        }
    }


if(tateti[0][0]==tipo && tateti[1][1]==tipo && tateti[2][2]==tipo ||
   tateti[0][2]==tipo && tateti[1][1]==tipo && tateti[2][0]==tipo)
    return true

return false

}

const empate =()=>{
    for (let i= 0; i < 3; i++) {
        for (let c = 0; c < 3; c++) {
            if(tateti[i][c]===''){
                return false
            }   
        }
    }
    return true
}

const setPuntaje = (ganador) =>{
const puntJug  = document.querySelector(".puntaje-jugador") 
const puntMaq  = document.querySelector(".puntaje-maquina")

if(ganador){
    puntajeJugador++
    puntJug.textContent='Jugador '+puntajeJugador
}else{
    puntajeMaquina++
    puntMaq.textContent='Maquina '+puntajeMaquina
}


contenedor.className += ' efectoBorroso'
finJuego=true
} 

const reiniciar=()=>{
    for(let i=1;i<4;i++){
        for(let c=1;c<4;c++){
            tateti[i-1][c-1]=''

            const casilla = document.querySelector(`.fila-${i}-col-${c}`)
            try{
                casilla.classList.remove('class', 'jugador')
            }catch(error){
            }
            try{
                casilla.classList.remove('class', 'maquina')
            }catch(error){
            }
        }}
    
    contenedor.classList.remove('class','efectoBorroso')
    
    finJuego=false    
}