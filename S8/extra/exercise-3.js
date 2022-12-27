const getUrl = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const sortPedidos = (arrayPedidos) => {
  arrayPedidos.sort(function (a, b) {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
  return arrayPedidos;
};

const showPedido = (pedido) => {
  // console.log("pedido",pedido);
  const miDiv$$ = document.querySelector("body");
  const pedido$$ = document.createElement("div");
  pedido$$.className='pedido';
  pedido$$.textContent = `Pedido Nº: ${pedido.id} Fecha: ${pedido.date} Productos:`;
  miDiv$$.appendChild(pedido$$);
  return pedido$$;
};

const showPedidos = (arrayPedidos, arrayProductos) => {
    // RECORRE EL ARRAY DE PEDIDOS
  for (let index = 0; index < arrayPedidos.length; index++) {
    const pedido = arrayPedidos[index];
    // muestra un pedido y retorna el nodo del DOM donde lo ha pintado.
    let pedido$$ = showPedido(pedido);
    // carga un array con todos los productos del pedido
    let arrayProductosPedido = pedido.products;

    // crea la tabla de productos
    let producto$$ = document.createElement("table");

    producto$$.innerHTML='<tr><td>Descipción</td><td>Quantity</td>'

    // muestra los productos de un pedido. recorre el array
    for (let i = 0; i < arrayProductosPedido.length; i++) {
      const productoPedido = arrayProductosPedido[i];
      const id = productoPedido.productId;
      const quantity = productoPedido.quantity;
      // busca con find en el array de productos y asigna .name a la variable
      const product = arrayProductos.find((item) => item.id === id);
      const productName = product.name;

      producto$$.innerHTML += `<td>${productName}</td><td>${quantity}</td>`;

    //   let producto$$ = document.createElement("table");
    //   producto$$.textContent = `-----------------name: ${productName}  quaNtity: ${quantity}`;
    //   pedido$$.appendChild(producto$$);
      // console.log("producto",productName," cantidad",quantity);
    }
    producto$$.innerHTML +='</tr>'
    pedido$$.appendChild(producto$$)
  }
};

const main = async (urlPedidos, urlProductos) => {
  let arrayPedidos = await getUrl(urlPedidos);
  const arrayProductos = await getUrl(urlProductos);
  arrayPedidos = sortPedidos(arrayPedidos);
  showPedidos(arrayPedidos, arrayProductos);
};

main("http://localhost:3000/orders", "http://localhost:3000/products");
