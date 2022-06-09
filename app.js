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



alert ("Voy a pasar a preguntarle sobre las plantas que quiero cuáles le gustaría, recuerde que vendemos con un IVA del 1,3% que NO está contemplado en los precios")
console.log ("Voy a pasar a preguntarle sobre las plantas que quiero cuáles le gustaría, recuerde que vendemos con un IVA del 1,3% que NO está contemplado en los precios")



let planta1 = prompt("Le gustaría comprar la planta 'Árbol lira'? La macetita está $200")
console.log ("Le gustaría comprar la planta 'Árbol lira'? La macetita está $200")

if (planta1 === "si") {
    
    let planta1Q = Number(prompt("Cuántas le gustaría comprar? Ten en cuenta que están $200 c/u"))
    alert("Has agregado " + planta1Q + " Árbol lira al carrito." )
    console.log ("Me gustaría comprar " + planta1Q + " Arbol lira.")
    
    } else {
    let planta1T = 0
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
    let planta2T = 0
    let planta2Q = 0
    console.log ("No, no me gustaría comprar Crassula")
}
calc1 ()
calc2 ()
total ()

function calc1 () {
    if (planta1Q !== 0) {
        let planta1Total = Number(planta1Q * 200)
        console.log ("El total sería = $" + planta1Total)
    } else {
        let planta1Total = 0
        console.log ("No hay Arbol lira en el carrito")
    }
}
function calc2 () {
    if (planta2Q !== 0) {
        let planta2Total = Number(planta2Q * 150) 
        console.log ("El total sería = $" + planta2Total)
    } else {
        planta2Total = 0
        console.log ("No hay Crassula en el carrito")
    }
}

    function total () {
    let total = planta1Total + planta2Total ;
    console.log ("El total SIN IVA sería = $" + total)    

    let totalI = Number(total) * 1.3 ;
    console.log ("El total CON IVA sería = $" + totalI)

}