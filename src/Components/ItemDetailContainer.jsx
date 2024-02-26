import {Link, useParams} from "react-router-dom"
import { useState, useEffect}  from "react"
import {getProductById} from "../AsyncMock"
import "bulma/css/bulma.css"
import "./itemdetailcontainer.css"

function ItemDetailContainer(){

    const {id} = useParams();
    const [encontrado, setEncontrado] = useState([]);
    
    useEffect(
        ()=>{
            getProductById(id).then(
                (MisProductos)=>{
                    setEncontrado(MisProductos);
                    console.log(MisProductos);
                }
            )
        }
    ,[])
    
    return  <div className="section">
                <div className="contenedor">
                    <div className="ImageContent">
                        <figure >
                            <img className="imagen" src={encontrado.image} alt="imagen" />    
                        </figure>
                    </div>
                
                    <div className="descripcion">
                        <div>
                            <h1 className="mt-4">{encontrado.title}</h1>
                        </div>
                        <div>
                            <p>{encontrado.description}</p>
                            <p>${encontrado.price}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link className="button is-info" to="/">Volver</Link>
                </div>
                    
            </div> 
            
}

export default ItemDetailContainer