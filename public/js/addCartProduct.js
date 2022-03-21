window.onload = function() {
    let botonAgregar = document.querySelector('.boton-formulario-shop');
    
    function getNumbersInString(string) {
        var tmp = string.split("");
        var map = tmp.map(function(current) {
          if (!isNaN(parseInt(current))) {
            return current;
          }
        });
      
        var numbers = map.filter(function(value) {
          return value != undefined;
        });
      
        return numbers.join("");
      }

    botonAgregar.addEventListener('click', function(e){
        e.preventDefault();
        //capturamos la URL del producto
        let url = window.location.href.split("/");
        let id = url [url.length -1]
        
        let imagen = document.querySelector('.img img').getAttribute("src")
        console.log(imagen);
        let tituloProd = document.querySelector('h1').innerText
        let precioConSigno = document.querySelector('.precio').innerText
        let precio = getNumbersInString(precioConSigno)
        let inputCantidad = document.querySelector('#count').value
        let producto = {
            idProducto: id, 
            imagen:imagen,
            tituloProd:tituloProd,
            precio:precio,
            inputCantidad:inputCantidad
        }
        console.log(producto);
        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)     
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precio * producto.inputCantidad)
        } else {
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })

            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } else {
                arrayProductos[0].inputCantidad == parseInt(arrayProductos[0].inputCantidad)+1;
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }

            

            let totalCarrito = 0
            for (let i=0; i<carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad;
               totalCarrito += carro 
            }
            localStorage.setItem("totalCarrito", totalCarrito)
        }
        alert('Agregaste' + " " + tituloProd + " al carrito")
    })
}