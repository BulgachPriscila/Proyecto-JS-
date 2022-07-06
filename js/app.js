console.log ("Acá inicia el programa.")
alert ("Bienvenido al Jardín, donde vamos a poder comprar unas plantas!")

let contenedor = ""
let producto = ``
let actualizar = document.getElementById ("actualizar").addEventListener("click", actualizarCarrito);
let vaciar = document.getElementById ("vaciar").addEventListener("click", vaciarCarrito);
let plantaCarrito = ""
let carrito = []
let planta1 = ""
let planta2 = ""
let planta3 = ""
let planta4 = ""
let carritoGuardado = ""
let carritoJSON = ""
let carritoTS = JSON.parse (localStorage.getItem("carritoGuardado"))
let agregadoAlert = ""


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
    constructor (id, nombre, altura, tipo, precio, img, cantidad) {
        this.id = id
        this.nombre = nombre
        this.altura = altura
        this.tipo = tipo 
        this.precio = precio
        this.img = img
        this.cantidad = cantidad
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
                                <button type="submit" class="btn btn-primary" onClick="agregarProducto(${plantas.id})" id="toast">Agregar</button>
                            </div>
                        </div>
                        `;
                        contenedor.innerHTML += producto
                        
    })
}
abrirShop ()
vaciarCarrito ()

function agregarProducto (id) {
    producto = plantas.find (plantas => plantas.id ==id);

    plantaCarrito = carrito.find (plantas => plantas.id ==id);
    
    if (plantaCarrito) {
        plantaCarrito.cantidad ++;
    } else {
        producto.cantidad = 1;
        carrito.push (producto);
    }
    carritoJSON = JSON.stringify(carrito)
    localStorage.setItem("carritoGuardado", carritoJSON)

    Toastify ({
        text: `Has agregado el producto al carrito`,
        duration: 3000,
        gravity: `top`,
    }).showToast()

    agregarProducto2 ()

}


function agregarProducto2 () {
    let carritoCard = document.getElementById ("carrito")
    html = ""
    
    carrito.forEach ((plantas) => {
                
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
    localStorage.setItem("carritoGuardado", carritoJSON)
}
function eliminarProducto (id) {

    carritoTS = JSON.parse (localStorage.getItem("carritoGuardado"));

    carritoCard = plantas.find (plantas => plantas.id ==id);

    remove = carrito.find (plantas => plantas.id ==id);

    if (remove.cantidad !== 0) {
        carrito.splice (id, 1)
    }

    agregarProducto2()
    localStorage.setItem("carritoGuardado", carritoJSON)

    console.log (carrito)
    console.log (carritoTS)

}

function actualizarCarrito () {
} 

function vaciarCarrito() {
    plantas[0].cantidad = 0
    plantas[1].cantidad = 0 
    plantas[2].cantidad = 0
    plantas[3].cantidad = 0 
    localStorage.clear()
}
