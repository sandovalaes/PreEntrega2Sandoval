import MisProductos from "./data"

export const getProducts = ()=>{
    return new Promise(
        (resolve)=> {
                    setTimeout( ()=>{resolve(MisProductos)},500)
                    }
    )
}

export const getProductsByCategory = (categoryId)=>{
    return new Promise(
        (resolve)=> {
                    setTimeout(()=>{resolve(MisProductos.filter((producto)=>producto.category === categoryId))},500)
                    }
    )
}

export const getProductById = (id)=>{
    return new Promise(
        (resolve)=> {
                    setTimeout(()=>{resolve(MisProductos.find((producto)=>producto.id == id))},500)
                    }
    )
}