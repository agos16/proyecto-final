const shopcontent = document.getElementById ("shopContent");
const verCarrito = document.getElementById ("verCarrito");
const modalContainer = document.getElementById ("modal-container");


let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = ` 
    <img src="${product.foto}">
    <h3> ${product.nombre}</h3>
    <p class="price"> ${product.precio}$</p>
    `;
    shopcontent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img : product.foto,
            precio : product.precio,
            nombre: product.nombre,
        })
        console.log(carrito);
    })
})

verCarrito.addEventListener("click", ()=> {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalheader = document.createElement ("div");
    modalheader.className = "modal-header"
    modalheader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;

    modalContainer.append(modalheader);

    const modalbutton = document.createElement ("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-hearder-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display ="none"
    })

    modalheader.append (modalbutton);

    carrito.forEach ((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src=" ${product.foto}">
        <h3> ${product.nombre}</h3>
        <p> ${product.precio} $ </p>
        `;

        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalbuying = document.createElement("div")
    totalbuying.className = "total-content"
    totalbuying.innerHTML = `total a pagar = ${total} $`;
    modalContainer.append(totalbuying);

    
})