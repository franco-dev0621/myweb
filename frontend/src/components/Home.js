import React, {Component} from 'react';
import {Container} from 'react-bootstrap'

import Content from './homeComponents/Content'
import Footer from './homeComponents/Footer'
import Banner from './homeComponents/Banner';



class Home extends Component {
	render (){
		return (
		<div>
			<Container>
				<Banner />
				<br></br><br></br>
				<Content />					
			</Container>	
			<Footer />	
		</div>
		)
	}
}
export default Home;