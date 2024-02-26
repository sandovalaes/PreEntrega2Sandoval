import {getProducts} from "../AsyncMock"
import {getProductsByCategory} from "../AsyncMock"
import {Link, useParams} from "react-router-dom"
import { useState, useEffect} from "react";
import "bulma/css/bulma.css"


function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();
    const funcionDeConsulta = categoryId ? getProductsByCategory : getProducts;

    useEffect(()=>{
    
                    funcionDeConsulta(categoryId).then(
                    (MisProductos)=>{
                        setProductos(MisProductos);
                    }
                )
    }, [categoryIgitd])

    return  <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered mt-4 ">Mis Productos</h1>
                        <div className="columns  is-centered is-multiline">
                                { productos.length > 0 && productos.map( (item)=>{
                                    return ( 
                                        <div className="column is-one-fifth is-offset-1">
                                                <div className="card">
                                                    <div className="card-image ">
                                                        <figure className="image is-2by3 ">
                                                            <img src={item.image} alt="imagen" />    
                                                        </figure>
                                                                                                        
                                                    </div>
                                                    <div className="card-content">
                                                        <div key={item.id} className="content">
                                                            <p>{item.title}</p>
                                                            <p>${item.price}</p>
                                                        </div>
                                                    </div>
                                                    <footer className="card-footer">
                                                        <p className="card-footer-item">
                                                            <Link className="has-text-grey" to = {`/item/${item.id}`}> Ver </Link>
                                                        </p>
                                                    </footer>
                                                </div>
                                        </div>
                                            );
                                    }
                                )}
                        
                            
                        </div>
                    </div>
            </section>
}

export default ItemListContainer