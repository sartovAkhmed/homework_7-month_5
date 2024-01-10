import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Basket = () => {
    const products = useSelector((state) => state.basket.items)

    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__inner">
                    {products.map((item, index) => (
                        <div className="product" key={index}>
                            <h2>{item.title}</h2>
                            <span>{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
