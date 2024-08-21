// Array de productos (hamburguesas y papas fritas)
const productos = [
    { nombre: 'Hamburguesa Clásica', precio: 3000, imagen: 'img/clasica.jpeg' },
    { nombre: 'Hamburguesa con Queso', precio: 3500, imagen: 'img/queso.jpeg' },
    { nombre: 'Hamburguesa BBQ', precio: 4000, imagen: 'img/bbq.jpeg' },
    { nombre: 'Hamburguesa Vegetariana', precio: 4000, imagen: 'img/vegetariana.jpeg' },
    { nombre: 'Hamburguesa Picante', precio: 3800, imagen: 'img/picante.jpeg' },
    { nombre: 'Papas Chicas', precio: 2000, imagen: 'img/papasChicas.jpeg' },
    { nombre: 'Papas Medianas', precio: 3250, imagen: 'img/papasMedianas.jpeg' },
    { nombre: 'Papas Grandes', precio: 4100, imagen: 'img/papasGrandes.jpeg' }
];

const carrito = [];

// Función para mostrar productos en la página
function mostrarProductos() {
    const hamburguesasDiv = document.getElementById('hamburguesas');
    const papasDiv = document.getElementById('papas');
    
    productos.forEach((producto, index) => {
        const img = `<img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px;">`;
        const btn = `<button onclick="agregarAlCarrito(${index})">Agregar</button>`;
        const productoHTML = `<div>${img}<p>${producto.nombre} - $${producto.precio}</p>${btn}</div>`;
        
        if (producto.nombre.includes('Hamburguesa')) {
            hamburguesasDiv.innerHTML += productoHTML;
        } else {
            papasDiv.innerHTML += productoHTML;
        }
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(index) {
    carrito.push(productos[index]);
    mostrarCarrito();
    calcularTotal();
}

// Función para mostrar el carrito en la página
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    
    carrito.forEach((producto, index) => {
        carritoDiv.innerHTML += `<p>${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>`;
    });
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    document.getElementById('total').innerText = total;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
    calcularTotal();
}

// Inicializar la página mostrando los productos
mostrarProductos();

// Función para mostrar productos en la página
function mostrarProductos() {
    const hamburguesasDiv = document.getElementById('hamburguesas');
    const papasDiv = document.getElementById('papas');
    
    productos.forEach((producto, index) => {
        const img = `<img src="${producto.imagen}" alt="${producto.nombre}">`;
        const btn = `<button onclick="agregarAlCarrito(${index})">Agregar</button>`;
        const productoHTML = `<div class="producto">${img}<p>${producto.nombre} - $${producto.precio}</p>${btn}</div>`;
        
        if (producto.nombre.includes('Hamburguesa')) {
            hamburguesasDiv.innerHTML += productoHTML;
        } else {
            papasDiv.innerHTML += productoHTML;
        }
    });
}