window.onload = function () {
  if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
  ) {
    let div = document.getElementById("vacio");
    div.innerHTML += "<h2>No hay productos agregados </h2>";
  } else {
    let carrito = JSON.parse(localStorage.carrito);
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
      let div = document.querySelector(".vacio");
      let contenido = `
      <article class="product">
      <div class="image">
          <a href="/products/${producto.idProducto}">
          <img src=${producto.imagen} alt="product">
          </a>
      </div>
      <div class="description">
          <p class="product-name">${producto.tituloProd}</p>
          <div class="price">
              <p>$${producto.precio}</p>
              <p>Cantidad:${producto.inputCantidad}</p>
          </div>
      </div>
      <button class="remove-product" onclick=borrarItem(${producto.idProducto})><i class="fa-solid fa-trash-can"></i><button/> 
      </article> 
      `;
      
      div.innerHTML += contenido;
    }
  }

  let h3 = document.querySelector("#precioTotal")
  let totalCarrito = localStorage.totalCarrito
  if(typeof localStorage.totalCarrito == 'undefined'){
    let contenido2 = `0`
    h3.innerHTML += contenido2
  } else {
    let contenido2 =totalCarrito
    h3.innerHTML += contenido2
  }
};

function borrarItem(id) {
  let carrito = JSON.parse(localStorage.carrito);
  let arrayBorrar=carrito.filter((producto, i) => {
    return producto.idProducto == id;
  });
  let elementoBorrar=arrayBorrar.pop()
  console.log(elementoBorrar);
  carrito = carrito.filter((producto, i) => {
    return producto.idProducto != id;
  });
  
  let total=localStorage.getItem("totalCarrito")
 
  total-=elementoBorrar.precio*elementoBorrar.inputCantidad
  localStorage.setItem("totalCarrito", JSON.stringify(total));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let verificar=JSON.parse(localStorage.getItem("carrito"))
  if(verificar.length==0){
    localStorage.clear();
  }
  location.reload();
}



let botonBorrar = document.querySelector("#botonBorrar");
botonBorrar.addEventListener('click', function(e) {
  e.preventDefault();
  localStorage.clear();
  alert('Has vaciado el carrito');
  location.reload();
})

