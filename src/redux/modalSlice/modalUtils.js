export const añadirProductoAlCarro  = (productoDelCarrito, productsData )=> {
    
    const productoencarro = productoDelCarrito.find ((item) =>{
return item.id === productsData.id;

    })

    if(productoencarro) {
        return productoDelCarrito.map ((item)=> {
return item.id === productoencarro.id
?{...item, quantity: item.quantity + 1}
: item;

        })
    }

    return [
        ...productoDelCarrito,
        {
            ...productsData,
            quantity: 1,
        }
    ];
}

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