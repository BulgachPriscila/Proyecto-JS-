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


const plantas = [
    {
        "id" : 1,
        "nombre" : "Lyrata",
        "altura" : 20,
        "tipo" : "Suculenta",
        "precio" : 200,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 0
    },
    {
        "id" : 2,
        "nombre" : "Crassula",
        "altura" : 15,
        "tipo" : "Suculenta",
        "precio" : 150,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 0
    },
    {
        "id" : 3,
        "nombre" : "Cactus1",
        "altura" : 25,
        "tipo" : "Cactus",
        "precio" : 200,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 0
    },
    {
        "id" : 4,
        "nombre" : "Cactus2",
        "altura" : 25,
        "tipo" : "Cactus",
        "precio" : 180,
        "img" : "./assets/img/maceta-suculenta.png",
        "cantidad" : 0
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
                                <button type="submit" class="btn btn-primary" onClick="agregarProducto(${plantas.id})">Agregar</button>
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
    agregarProducto2 ()

}


function agregarProducto2 () {
    let carritoCard = document.getElementById ("carrito")
    html = ""
    
    carrito.forEach ((plantas, id) => {
                
        html += `
        <div class="card col-md bgtiles planta">
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
function eliminarProducto (id) {
    carritoTS = JSON.parse (localStorage.getItem("carritoGuardado"));
/*     remove = document.getElementsByClassName ("planta")*/
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