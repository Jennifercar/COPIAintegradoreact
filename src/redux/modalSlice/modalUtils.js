export const añadirProductoAlCarro  = (productoDelCarrito, producto )=> {
    
    const productoencarro = productoDelCarrito.find ((item) =>{
return item.id === producto.id;

    });

    if(productoencarro) {
        return productoDelCarrito.map ((item)=> {
return item.id === productoencarro.id
?{...item, quantity: item.quantity + 1}
: item;

        });
    }

    return [
        ...productoDelCarrito,
        {
            ...producto,
            quantity: 1,
        },
    ];
};

export const sacarProductoDelCart = (productoDelCarrito, id)=> {

    const productoASacar = productoDelCarrito.find ((item) => {
        return item.id === id
    });

    if (productoASacar.quantity > 1 ){

return productoDelCarrito.map((item)=>{
    return item.id === productoASacar.id
    ?{...item, quantity: item.quantity -1}
    :item;
})

}

return productoDelCarrito.filter ((item) => {
    return item.id !== productoASacar.id
})

};

export const SacarTodosLosProductos = (productoDelCarrito,id) => {
    return productoDelCarrito.filter ((item) =>  item.id !== id);
};