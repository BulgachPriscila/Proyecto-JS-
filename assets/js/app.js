console.log ("Acá inicia el programa.")
alert ("Bienvenido al Jardín, donde vamos a poder comprar unas plantas!")

let contenedor = ""
let producto = ``
let actualizar = document.getElementById ("actualizar").addEventListener("click", actualizarCarrito);
let plantaCarrito = ""
let carrito = []

const plantas = [
    {
        "id" : 1,
        "nombre" : "Lyrata",
        "altura" : 20,
        "tipo" : "Suculenta",
        "precio" : 200,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 1
    },
    {
        "id" : 2,
        "nombre" : "Crassula",
        "altura" : 15,
        "tipo" : "Suculenta",
        "precio" : 150,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 1
    },
    {
        "id" : 3,
        "nombre" : "Cactus1",
        "altura" : 25,
        "tipo" : "Cactus",
        "precio" : 200,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 1
    },
    {
        "id" : 4,
        "nombre" : "Cactus2",
        "altura" : 25,
        "tipo" : "Cactus",
        "precio" : 180,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 1
    }
]

class Planta {
    constructor (id, nombre, altura, tipo, precio, img) {
        this.id = id
        this.nombre = nombre
        this.altura = altura
        this.tipo = tipo 
        this.precio = precio
        this.img = img
    }
}

function abrirShop () {
    
    
    contenedor = document.getElementById ("container");
    
    plantas.forEach ((plantas) => {
    
        let producto = `
                        <div class="card col-md bgtiles">
                            <img src="./assets/img/maceta-suculenta.png" class="card-img-top" alt="Planta">
                            <div class="card-body">
                                <h5 class="card-title">${plantas.nombre}</h5>
                                <p class="card-text"><b> $ ${plantas.precio}</b></p>
                                <button type="submit" class="btn btn-primary" onClick="agregarProducto(${plantas.id})">Agregar</button>
                            </div>
                        </div>
                        `;
                        contenedor.innerHTML += producto
    })
}
abrirShop ()

function agregarProducto (id) {
    let producto = plantas.find (plantas => plantas.id ==id);

    let plantaCarrito = carrito.find (plantas => plantas.id ==id);

    if (plantaCarrito) {
        plantaCarrito.cantidad ++;
    } else {
        producto.cantidad = 1;
        carrito.push (producto);
    }
    carritoUpdate ()

}

function carritoUpdate () {
    let carritoCard = document.getElementById ("carrito")
    html = ""
    
    carrito.forEach ((plantas, id) => {
                
        html += `
        <div class="card col-md bgtiles">
            <img src="./assets/img/maceta-suculenta.png" class="card-img-top" alt="Planta">
            <div class="card-body">
                <h5 class="card-title">${plantas.nombre}</h5>
                <p class="card-text"><b> Precio: $${plantas.precio}</b></p>
                <p class="card-text"> Cantidad: ${plantas.cantidad}</p>
                <button type="submit" class="btn btn-danger" onClick="eliminarProducto(${plantas.id})">Eliminar</button>
            </div>
        </div>
        `
    })
    carritoCard.innerHTML = html 
}
/* function eliminarProducto(){
} */
function actualizarCarrito () { 
    alert ("Carrito actualizado")
    carritoUpdate()
}

