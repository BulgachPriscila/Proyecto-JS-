console.log ("Acá inicia el programa.")
alert ("Bienvenido al Jardín, donde vamos a poder comprar unas plantas!")

let planta1Q = ""
let planta2Q = ""


usuario ()

function usuario() {
    
    let nombre = prompt("Ingrese su nombre: ")
    let apellido = prompt ("Ingrese su apellido: ")
    let edad = Number(prompt ("Ingrese su Edad: "))

    
    console.log ("Nombre: " + nombre)
    console.log ("Apellido: " + apellido)
    console.log ("Edad: " + edad + " años.")
}

alert ("Voy a pasar a preguntarle sobre las plantas que quiero cuáles le gustaría, recuerde que vendemos con un IVA del 1,3% que NO está contemplado en los precios")
console.log ("Voy a pasar a preguntarle sobre las plantas que quiero cuáles le gustaría, recuerde que vendemos con un IVA del 1,3% que NO está contemplado en los precios")



let planta1 = prompt("Le gustaría comprar la planta 'Árbol lira'? La macetita está $200")
console.log ("Le gustaría comprar la planta 'Árbol lira'? La macetita está $200")

if (planta1 === "si") {
    let planta1Q = Number(prompt("Cuántas le gustaría comprar? Ten en cuenta que están $200 c/u"))
    alert("Has agregado " + planta1Q + " Árbol lira al carrito." )
    console.log ("Me gustaría comprar " + planta1Q + " Arbol lira.")
} else {
    let planta1Q = 0
    console.log ("No, no me gustaría comprar Arbol lira")
}

let planta2 = prompt("Le gustaría comprar la planta 'Crassula'? La macetita está $150") 
console.log("Le gustaría comprar la planta 'Crassula'? La macetita está $150")

if (planta2 === "si") {
    let planta2Q = Number(prompt("Cuántas le gustaría comprar? Ten en cuenta que están $150 c/u"))
    alert("Has agregado " + planta2Q + " Crassula al carrito.")
    console.log ("Me gustaría comprar " + planta2Q + " Crassula.")
} else {
    let planta2Q = 0
    console.log ("No, no me gustaría comprar Crassula")
}
total ()
function total(){
    if (planta1Q !== 0 ){
        let planta1P = ( planta1Q * 200) * 1.3 ;
        console.log()
    } else {
        let planta1P = 0
    }
    if (planta2Q !== 0 ){
        let planta2P = ( planta2Q * 150) * 1.3 ;
    } else {
        let planta2P = 0
    }

    let total = planta1P + planta2P ;


    console.log ("El precio final de " + planta1Q + " Arbol lira es =" + planta1P)
    console.log ("El precio final de " + planta2Q + " Crassula es = " + planta2P)
    console.log ("El total sería= $" + total)
}
