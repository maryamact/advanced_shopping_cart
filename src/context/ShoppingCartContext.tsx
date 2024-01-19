import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: number,
    quantity: number
}
type ShoppingCartContextProps = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}
const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCartContext() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    const cartQuantity = cartItems.reduce((quantity, item) => {
        return item.quantity + quantity;
    }, 0)
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            // if (currItems.find((item) => item.id === id)) {
            // remove item from list
            return currItems.filter(item => item.id !== id)
            // } else return currItems
        })
    }



    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}