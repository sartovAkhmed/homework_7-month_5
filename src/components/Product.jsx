import React from 'react'
import { useDispatch } from 'react-redux'
import { bayProducts } from '../store/counterSlice'
import { addProduct } from '../store/basketSlice'

export const Product = ({product}) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addProduct(product))
        dispatch(bayProducts())
    }

    return (
        <div className='product'>
            <h2>{product.title}</h2>
            <span>{product.price}</span>
            <button onClick={handleAddToCart}>BAY</button>
        </div>
    )
}
