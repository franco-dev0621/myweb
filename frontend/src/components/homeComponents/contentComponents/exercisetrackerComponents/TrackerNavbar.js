import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'




const TrackerNavbar = () => (    
    <Container style={{marginTop: '100px', backgroundColor: 'white'}} >
        <Navbar>
            <Navbar.Brand href='/ExerciseTracker'>Tracker</Navbar.Brand>            
            <Nav.Link href='/delete'>Remove Users</Nav.Link>            
        </Navbar>
    </Container>
)
export default TrackerNavbar
