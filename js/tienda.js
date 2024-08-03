document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos');

    const productos = await getProductos();

    let body = "";

    for (let { image, title, price, category } of productos) {
        body += `
        <article class="col-md-3 mb-4">
            <div class="card h-100 shadow-sm border-0">
                <img class="card-img-top" src="${image}" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title.length > 20 ? title.substring(0, 20) + "..." : title}</h5>
                    <p class="card-text">${category}</p>
                    <p class="card-text"><strong>L${price}</strong></p>
                </div>
                <div class="card-footer bg-white">
                    <button class="btn btn-primary btn-block">Más información</button>
                </div>
            </div>
        </article>
       `;
    }

    listaProductos.innerHTML = body;

});

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products');

    const productos = await response.json();

    return productos;

}
