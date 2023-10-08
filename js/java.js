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

        const repeat = carrito.some((repeatPorduct) => repeatPorduct.id === product.id);
        console.log(repeat);

        if (repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++                }
            })
        }
        carrito.push({
            id : product.id,
            img : product.foto,
            precio : product.precio,
            nombre: product.nombre,
            cantidad : product.cantidad,
        })
        console.log(carrito);
    })
})

