import React from 'react'
import './cartwidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import "./bulma.min.css"


function CartWidget() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='contenedor-cart'>
            <button onClick={handleClick}>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#3e8ed0", fontSize: "30px" }} />
                <p className="contador">{count}</p>
            </button>
        </div>
    )
}

export default CartWidget