import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import CartItem from "./CartItem"
import { FormatCurrency } from "../../utilities/formatCurrency"
import storedItems from "../data/storeItems.json";
type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCartContext();
    const total = cartItems.reduce((total, cartItem) => {
        const item = storedItems.find(item => item.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton >
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => <CartItem key={item.id} {...item} />)}

                    <div className="ms-auto fw-bold fs-5"> Total: {FormatCurrency(total)}</div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}