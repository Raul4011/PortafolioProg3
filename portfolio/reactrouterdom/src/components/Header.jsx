import { Container, Navbar, Nav } from "react-bootstrap"

const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    
                </Container>
            </Navbar>
        </div>
    )
}

export default Header