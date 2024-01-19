import { Button, Card, } from 'react-bootstrap'
import { FormatCurrency } from './../../utilities/formatCurrency';
import { useShoppingCartContext } from '../context/ShoppingCartContext';
type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function StoreItems({ id, name, price, imgUrl }: StoreItemsProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCartContext()
    const quantity = getItemQuantity(id);
    return (
        <Card>
            <Card.Img variant='top' src={imgUrl} height={"300px"} style={{ objectFit: "cover" }} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between mb-4 align-items-baseline'>
                    <span className='fs-2'>{name}</span>
                    <span className='text-muted fs-2'>{FormatCurrency(price)}</span>
                </Card.Title>
                {quantity === 0 ? (<Button onClick={() => increaseCartQuantity(id)} className='fs-5'>+ Add to Cart</Button>) : (
                    <div className='d-flex flex-column align-items-center gap-1'>
                        <div className='d-flex gap-1'>
                            <Button onClick={() => decreaseCartQuantity(id)} className='fs-3'>-</Button>
                            <div>
                                <span className='fs-3'>{quantity} </span>
                                in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)} className='fs-3'>+</Button>
                        </div>
                        <Button onClick={() => removeFromCart(id)} className='fs-5' variant='danger' size='sm'>Remove</Button>
                    </div>
                )}

            </Card.Body>
        </Card>
    )
}
