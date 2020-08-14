import React from 'react'
import { Container } from 'react-bootstrap'

import EcomNavbar from './ecommerceComponents/EcomNavbar'
import EcomMain from './ecommerceComponents/EcomMain'
import EcomFooter from './ecommerceComponents/EcomFooter'

export default function Ecommerce () {
	return (
		<Container>
			<div style={{marginTop: '100px', backgroundColor: 'white'}}>
				<header>
					<EcomNavbar />
				</header>
				<main>
					<EcomMain />
				</main>
				<footer>
					<EcomFooter />
				</footer>
			</div>
		</Container>
		)
}