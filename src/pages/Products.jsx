import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { Product } from '../components/Product'

export const Products = () => {
    const {items, error, loading} = useSelector((state) => state.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className='products'>
            <div className="container">
                <div className="products__inner">
                    {items.map((item) => (
                        <Product key={item.id} product={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
