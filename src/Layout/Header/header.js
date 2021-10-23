import React from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { Navbar,Nav,Container,Button } from 'react-bootstrap'
export const Header = () => {
    let history = useHistory()
    function Logout(){
        window.sessionStorage.clear()
        history.push("/sign")
    }
    return (
        <div>
              {/* <Navbar bg="primary" variant="dark"> */}
              <Navbar bg="blue" variant="blue">
              <Container>
              <Navbar.Brand href="#home">Shopify</Navbar.Brand>
              <Nav className="ml-auto">
             <Nav.Link as = {Link} to ="/home page">Home</Nav.Link>
             <Nav.Link as = {Link} to ="/contact">Contact</Nav.Link>
             <Nav.Link as = {Link} to ="/about">AboutUs</Nav.Link>
             <Nav.Link as = {Link} to ="/diffCat">Product</Nav.Link>
             <Nav.Link as = {Link} to ="/signUp">Registration</Nav.Link>
             <Nav.Link as = {Link} to ="/sign">Login</Nav.Link>
            
            
            <Button variant="dark" onClick={Logout}>Logout</Button>{' '}
             </Nav>
            </Container>
             </Navbar>
        </div>
    )
}
