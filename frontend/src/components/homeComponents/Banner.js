import React from 'react';
import {Col, Row, Container}from 'react-bootstrap/'

import Contact from './bannerComponents/Contact';
import Progressbar from './bannerComponents/Progressbar';
import FlipCard from './bannerComponents/Flipcard'



function Banner () {	

	const styleBody = {
		backgroundColor:"#212121", 
		color:"white",										
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		borderRadius:'0px 0px 10px 10px'
		}

	return (
		<div>	
			<div>	
			<Row style={styleBody} >
				<Col>						  
					<div>	
									    
						<Container style={{textAlign: 'right'}}>

							<Row>
								<Col  xl={3} style={{marginTop: '50px'}}>
									<div class='w3-animate-right'>
										<h1><strong>Franco</strong></h1>								
											<p>Francis June Guañezo</p>											
											<hr style={{border: "1px solid white"}}></hr>
										<div>											
											<p>A highly motivated, self taught developer who strive to learn new and exciting technology.</p>	
											<p>Only treated programming as an alternative to be busy, but now wants to go 'PRO'.</p>
										</div>
											<hr style={{border: "1px solid white"}}></hr>
									</div>
								</Col>
								<Col  xl={3}>
									<div class='w3-animate-top'>
										<div class='zoom' >
											<FlipCard 
												front = {
													<Contact />			
												}	
												back = {
													<Contact />
												}										
												/>
										</div>						
									</div>
								</Col>			
								<Col  xl>
									<div class ='w3-animate-left'>
										<Progressbar />
									</div>
								</Col>
							</Row>
								
							
						</Container>
					</div>						  
				</Col>				
				</Row>
			</div>	
		</div>		
		)
	}
export default Banner;