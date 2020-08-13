//ecommerce app feature
import React from 'react'
import { Container } from 'react-bootstrap'

import EcomNavbar from './ecommerceComponents/EcomNavbar'
import EcomMain from './ecommerceComponents/EcomMain'
import EcomFooter from './ecommerceComponents/EcomFooter'

export default function Ecommerce () {
	return (
		<Container style={{marginTop: '100px', backgroundColor: 'white'}}>
			<header>
				This is for NAVBAR component
			</header>
			<main>
				This is for the main content
			</main>
			<footer>
				All right is reserved.
			</footer>
		</Container>
		)
}