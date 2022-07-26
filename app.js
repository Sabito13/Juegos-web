let muestreoJuegos = []
let juegos = []
let overflow = true


class Juego {
    constructor(
        nombre = 'juego-dafualt',
        categorias = '-',
        fecha = '-',
        dificultad = '-',
        imagen = '-',
        html 
    ) {
        this.id = juegos.length+1
        this.nombre = nombre
        this.categorias = categorias
        this.fecha = fecha
        this.dificultad = dificultad
        this.imagen = imagen
        this.html = html
    }
    setCarta(pos){
        const nombreJuego = document.createElement('div')
        const imagenJuego = document.createElement('img')

        nombreJuego.textContent = this.id +' '+this.nombre
        imagenJuego.setAttribute('src', this.imagen)

        muestreoJuegos[pos].textContent = ''
        muestreoJuegos[pos].appendChild(nombreJuego)
        muestreoJuegos[pos].appendChild(imagenJuego)
        }

    setJugable(){
        const juegoElegido =document.querySelector(".juego-elegido")
        const juegoFrame = document.createElement('iframe')
        juegoFrame.setAttribute('src',this.html)
    
        juegoElegido.textContent = ''
        juegoElegido.appendChild(juegoFrame)
    }
    }




punteroPosicion = 0;

const iniciar = ()=>{
    for (let i=1;i<5;i++) {
        muestreoJuegos.push(document.querySelector(`.muestreo-juego-pos-${i}`))
        //muestreoJuegos[i-1].textContent = juegos[punteroPosicion+(i-1)]
    }


    guardarJuegosCreados()
    trasladarJuegos(0)
}



const trasladarJuegos = (direccion) =>{

    if (direccion == -1) {
        punteroPosicion--   
    }else if(direccion == 1){
        punteroPosicion++
    }

    if(punteroPosicion == -1){
        punteroPosicion = juegos.length -1
    }

    juegos[punteroPosicion%(juegos.length)].setCarta(0)
    juegos[(punteroPosicion+1)%(juegos.length)].setCarta(1)
    juegos[(punteroPosicion+2)%(juegos.length)].setCarta(2)
    juegos[(punteroPosicion+3)%(juegos.length)].setCarta(3)
}

const elegirJuego = (posicion) =>{
    if (posicion == 1) {
        juegos[(punteroPosicion)%(juegos.length)].setJugable()
    }else if(posicion ==2){
        juegos[(punteroPosicion+1)%(juegos.length)].setJugable()
    }else if(posicion ==3){
        juegos[(punteroPosicion+2)%(juegos.length)].setJugable()
    }else if(posicion ==4){
        juegos[(punteroPosicion+3)%(juegos.length)].setJugable()
    }

}



const guardarJuegosCreados =() =>{
    juegos.push(new Juego('Tres en raya',['ingenio','destreza'],'23/7/2022','facil','./Imagenes/01_Tateti.png',"./Juegos/01_Tateti/index.html"))
    juegos.push(new Juego('Piedra Papel Tijera',['ingenio','destreza'],'24/7/2022','facil','./Imagenes/02_Piedra_papel.png',"./Juegos/02_Piedra_Papel/index.html"))
    juegos.push(new Juego('Snake',['ingenio','destreza'],'23/7/2022','facil','./Imagenes/03_Snake.png',"./Juegos/03_Snake/index.html"))


    for (let index = 0; index < 20; index+=2) {
        juegos.push(new Juego('Tres en raya',['ingenio','destreza'],'23/7/2022','facil','./Imagenes/01_Tateti.png',"./Juegos/01_Tateti/index.html"))
        juegos.push(new Juego('Piedra Papel Tijera',['ingenio','destreza'],'24/7/2022','facil','./Imagenes/02_Piedra_papel.png',"./Juegos/02_Piedra_Papel/index.html"))
        juegos.push(new Juego('Snake',['ingenio','destreza'],'23/7/2022','facil','./Imagenes/03_Snake.png',"./Juegos/03_Snake/index.html"))
            juegos.push(new Juego())
    }

}


const pantallaEstatica=()=>{
    const body = document.querySelector('body')
    const bloquear = document.querySelector('.juego-completo-bloquear')
    if(overflow){
        bloquear.textContent='Desbloquear pantalla'
        body.style.overflow = 'hidden'
        overflow = false
    }else{
        bloquear.textContent='Bloquear pantalla'
        body.style.overflow = 'auto'
        overflow = true
    }
    


}



const buscarJuego = (event)=>{
    event.preventDefault()
    const{value} = event.target.juegoBuscado
    console.log(value)
}