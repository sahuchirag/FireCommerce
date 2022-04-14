import React, { useEffect } from 'react'
import {  FaTrash } from 'react-icons/fa'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux';

function CartPage()
{
    const {cartItems} = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();
    
    useEffect(()=> {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const deleteFromCart = (product) => {
        dispatch({ type: "DELETE_FROM_CART", payload: product })
    }

    return(
        <Layout>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th> Image </th>
                        <th> Name  </th>
                        <th> Price </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    { cartItems.map(item=>{ 
                        return    <tr>
                            <td> <img src={item.imageURL} height="80" width='80'/></td>
                            <td> {item.name} </td>
                            <td> {item.price} </td>
                            <td> <FaTrash onClick={()=>deleteFromCart(item)}/> </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Layout>
    )
}

export default CartPage