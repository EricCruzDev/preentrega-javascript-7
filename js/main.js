class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
}

const producto1 = new Producto("Pan", 1500, "Alimentos", 10);
const producto2 = new Producto("Leche", 1200, "Lácteos", 8);
const producto3 = new Producto("Arroz", 1800, "Alimentos", 15);

const productos = [producto1, producto2, producto3];

const listaProductos = document.querySelector("#listaProductos");

function mostrarProductos(lista) {
    listaProductos.innerHTML = "";

    lista.forEach((producto) => {
        listaProductos.innerHTML += `
            <article class="producto">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Stock: ${producto.stock}</p>
                <button class="btn-eliminar" data-nombre="${producto.nombre}">
                    Eliminar
                </button>
            </article>
        `;
    });
}

mostrarProductos(productos);