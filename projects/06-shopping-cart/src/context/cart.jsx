import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CartContext = createContext()

function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return {state, addToCart, removeFromCart, clearCart}
}


export function CartProvider ({children}) {
    //const [cart, setCart] = useState([])

    /*const addToCart = product => {
        //setCart([...cart, product])
        const productInCartIndex = cart.findIndex(item => item.id == product.id)

        if (productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }*/

    /*const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }*/

    /*const clearCart = () => {
        setCart([])
    }*/

    /*const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })*/
    const {state, addToCart,removeFromCart, clearCart} = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}