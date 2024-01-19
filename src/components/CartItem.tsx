import { Button, Stack } from 'react-bootstrap';
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import storedItems from "../data/storeItems.json";
import { FormatCurrency } from '../../utilities/formatCurrency';

type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCartContext();
    const item = storedItems.find(item => item.id === id)
    if (item == null) {
        return null
    }
    return (
        <Stack direction="horizontal" gap={2} className='d-flex align-items-center' >
            <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            <div className='me-auto'>
                <div>{item.name} {quantity > 1 && <span className='text-muted' style={{ fontSize: "0.65rem" }}>x{quantity}</span>} </div>
                <div className='text-muted' style={{ fontSize: "0.75rem" }}>{FormatCurrency(item.price)}</div>
            </div>
            <div>{FormatCurrency(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}