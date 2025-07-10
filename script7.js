document.addEventListener('DOMContentLoaded', () => {
    const listaProductosElement = document.getElementById('lista-productos');
    const agregarProductoBtn = document.getElementById('agregar-producto');

    // Array de productos inicial
    let productos = [
        {
            nombre: 'Café Premium',
            precio: '$12.99',
            descripcion: 'Granos de café arábica seleccionados, tostado medio.'
        },
        {
            nombre: 'Té Verde Orgánico',
            precio: '$8.50',
            descripcion: 'Té verde puro y orgánico, ideal para cualquier momento del día.'
        },
        {
            nombre: 'Chocolate Artesanal',
            precio: '$7.25',
            descripcion: 'Chocolate oscuro con un 70% de cacao, hecho a mano.'
        }
    ];

    // Función para renderizar los productos
    function renderizarProductos() {
        listaProductosElement.innerHTML = ''; // Limpiar la lista antes de volver a renderizar
        productos.forEach(producto => {
            const li = document.createElement('li');
            li.classList.add('producto-item');
            li.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p class="precio">${producto.precio}</p>
            `;
            listaProductosElement.appendChild(li);
        });
    }

    // Renderizar productos al cargar la página
    renderizarProductos();

    // Event listener para el botón "Agregar Nuevo Producto"
    agregarProductoBtn.addEventListener('click', () => {
        const nuevoProducto = {
            nombre: `Producto Nuevosssss ${productos.length + 1}`,
            precio: `$${(Math.random() * 20 + 5).toFixed(2)}`, // Precio aleatorio entre $5 y $25
            descripcion: 'Este es un producto añadido dinámicamente para demostración.'
        };
                const elnuevoProducto = {
            nombre: `Producto Nuevo ${productos.length + 2}`,
            precio: `$${(Math.random() * 20 + 5).toFixed(2)}`, // Precio aleatorio entre $5 y $25
            descripcion: 'Este es un producto añadido dinámicamente para demostración.'
        };
        productos.push(nuevoProducto);
        productos.push(elnuevoProducto);
        renderizarProductos(); // Volver a renderizar la lista con el nuevo producto
    });
});