console.log ("Acá inicia el programa.")
alert ("Bienvenido al Jardín, donde vamos a poder comprar unas plantas!")

function usuario() {
    
    let nombre = prompt("Ingrese su nombre: ")
    let apellido = prompt ("Ingrese su apellido: ")
    let edad = Number(prompt ("Ingrese su Edad: "))

    
    console.log ("Nombre: " + nombre)
    console.log ("Apellido: " + apellido)
    console.log ("Edad: " + edad + " años.")
}


usuario ()

class Planta {
    constructor (id, nombre, altura, tipo, precio) {
        this.id = id
        this.nombre = nombre
        this.altura = altura
        this.tipo = tipo 
        this.precio = precio
    }
}

function total () {
    let totalS = planta1T + planta2T + planta3T + planta4T ;
    console.log ("El total SIN IVA sería = $" + totalS)    

    let totalI = Number(totalS) * 1.3 ;
    console.log ("El total CON IVA sería = $" + totalI)
}
let planta1T = Number()
let planta2T = Number()
let planta3T = Number()
let planta4T = Number()


const plantas = [
    new Planta (1 , "lyrata" , 20 , "suculenta" , 200),
    new Planta (2 , "crassula" , 15 , "suculenta" , 150),
    new Planta (3 , "cactus1" , 25 , "cactus" , 200),
    new Planta (4 , "cactus2" , 25 , "cactus" , 180),
]

console.log("Te gustaría ver nuestro stock de plantas?")
let stock = prompt("Te gustaría ver nuestro stock de plantas? si/no")
while (stock == "si") {    
    for (let i = 0 ; i <= plantas.length ; i++) {
        console.log (plantas[i])
    }
    break
}


let planta1 = prompt ("Le gustaría comprar Lyrata?")
console.log ("Le gustaría comprar Lyrata? = " + planta1)

if (planta1 == "si") {
    let planta1Q = Number (prompt("Cuantas Lyrata le gustaría comprar? El precio es $200"))
    console.log ("Me gustaría comprar " +  planta1Q + " Lyrata")
    planta1T = planta1Q * 200
    console.log ("El total de Lyrata sería = $" + planta1T)
}

let planta2 = prompt ("Le gustaría comprar Crassula?")
console.log ("Le gustaría comprar Lyrata? = " + planta2)

if (planta2 == "si") {
    let planta2Q = Number (prompt("Cuantas Crassula le gustaría comprar? El precio es $150"))
    console.log ("Me gustaría comprar " +  planta2Q + " Crassula")
    planta2T = planta2Q * 150
    console.log ("El total de Crassula sería = $" + planta2T)
}


let planta3 = prompt ("Le gustaría comprar Cactus1?")
console.log ("Le gustaría comprar Lyrata? = " + planta3)

if (planta3 == "si") {
    let planta3Q = Number (prompt("Cuantos cactus1 le gustaría comprar? El precio es $200"))
    console.log ("Me gustaría comprar " + planta3Q + " cactus1")
    planta3T = planta3Q * 200
    console.log ("El total de cactus1 sería = $" + planta3T)
}


let planta4 = prompt ("Le gustaría comprar Cactus2?")
console.log ("Le gustaría comprar Lyrata? = " + planta4)

if (planta4 == "si") {
    let planta4Q = Number (prompt("Cuantas cactus2 le gustaría comprar? El precio es $180"))
    console.log ("Me gustaría comprar " +  planta4Q + " cactus2")
    planta4T = planta4Q * 180
    console.log ("El total de cactus2 sería = $" + planta4T)
}

total ()
