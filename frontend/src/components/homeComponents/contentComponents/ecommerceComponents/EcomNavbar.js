import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function EcomNavbar() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>eCommerce</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default EcomNavbar
