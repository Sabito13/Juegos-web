let muestreoJuegos = []
let juegos = []


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
        const juegoCompleto =document.querySelector(".juego-completo")
        const juegoFrame = document.createElement('iframe')
        juegoFrame.setAttribute('src',this.html)
        console.log
        juegoCompleto.textContent = ''
        juegoCompleto.appendChild(juegoFrame)
    }
    }




punteroPosicion = 0;

const iniciar = ()=>{
    for (let i=1;i<5;i++) {
        muestreoJuegos.push(document.querySelector(`.muestreo-juego-pos-${i}`))
        //muestreoJuegos[i-1].textContent = juegos[punteroPosicion+(i-1)]
    }


    juegos.push(new Juego('Tateti',['ingenio','destreza'],'23/7/2022','facil','./Imagenes/01_Tateti.png'))

    for (let index = 0; index < 20; index+=2) {
            juegos.push(new Juego('Tateti',['ingenio','destreza'],'23/7/2022','facil','./Imagenes/01_Tateti.png',"./Juegos/01_Tateti/index.html"))
            juegos.push(new Juego())
    }

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

