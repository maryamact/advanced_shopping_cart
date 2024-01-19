import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/storeItems.json'
import StoreItems from './../components/StoreItems';

export default function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className='gap-3 mt-3'>
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItems {...item} />
                    </Col>
                ))}
            </Row >
        </>

    )
}
