
const productosArray = [
    {
        id: "Vans old skool",
        titulo: "Vans old skool",
        imagen: "./img/vans1.jpg",
        categoria: {
            nombre: "zapatillas",
            id: "zapatillas"
        },
        precio: 30000
        },
        {
            id: "Vans Filmore",
            titulo: "Vans Filmore",
            imagen: "./img/vans2.jpg",
            categoria: {
                nombre: "zapatillas",
                id: "zapatillas"
            },
            precio: 30000
        },
        {
            id: "Vans old skool girs",
            titulo: "Vans old skool girs",
            imagen: "./img/vans3.jpg",
            categoria: {
                nombre: "zapatillas",
                id: "zapatillas"
            },
            precio: 30000
        },
        {
            id: "Vans u ultrarange exo",
            titulo: "Vans u ultrarange exo",
            imagen: "./img/vans4.jpg",
            categoria: {
                nombre: "zapatillas",
                id: "zapatillas"
            },
            precio: 30000
        },
        {
            id: "Vans u sk8-hi",
            titulo: "Vans u sk8-hi",
            imagen: "./img/vans5.jpeg",
            categoria: {
                nombre: "zapatillas",
                id: "zapatillas"
            },
            precio: 30000
        }
];

const contenedorProductos = document.querySelector("#contenedor-prodcutos");
let botonesAgregar = document.querySelectorAll("#producto-agregar");
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${preducto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();
    console.log(botonesAgregar);
};

cargarProductos(productos);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll("#producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlcarrito);
    });
}

const productosEncarrito = [];

function agregarAlcarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = producto.find(prodcuto => producto.id === idBoton); 

    if (productosEncarrito.some(producto => producto.id === idBoton)) {
        const index = productosEncarrito.findIndex(producto => prodcuto.id === idBoton);
        productosEncarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEncarrito.push(prodcutoAgregado);
    }

    actualizarNumerito();
}

function actualizarNumerito() {
    let nuevoNumerito = productosEncarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerTex = nuevoNumerito;

}


