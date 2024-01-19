import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
export default function Navbar() {
    const { cartQuantity, openCart } = useShoppingCartContext()
    return (
        <NavbarBS className='bg-bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to={"/"} as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to={"/about"} as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 &&
                    <Button onClick={openCart} className='rounded-circle' style={{ position: "relative", width: "3rem", height: "3rem" }} variant='outline-primary'>
                        <svg style={{ transform: "rotateY(180deg)" }} id="SvgjsSvg1001" fill="currentColor" width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                            <defs id="SvgjsDefs1002"></defs><g id="SvgjsG1008">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-name="Layer 2" viewBox="0 0 35 35" width="1.5rem" height="1.5rem">
                                    <path d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z" className="color000 svgShape">
                                    </path>
                                    <path d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z" className="color000 svgShape">
                                    </path>
                                    <path d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z" className="color000 svgShape"></path>
                                </svg>
                            </g>
                        </svg>
                        <div
                            style={{ width: "1.7rem", height: "1.7rem", color: "white", position: "absolute", right: "0", bottom: "0", transform: "translate(30%, 30%)" }}
                            className='bg-danger rounded-circle justify-content-center d-flex align-align-items-center'>{cartQuantity}</div>
                    </Button>
                }
            </Container>
        </NavbarBS>
    )
}
