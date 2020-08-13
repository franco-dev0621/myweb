import React from 'react';
import {  Row, Col } from 'react-bootstrap'

function Aboutme () {

	const styleBody = {
	backgroundColor:"#212121", color:"white",										
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
	borderRadius:'10px 10px 10px 10px',
	marginTop: '100px',
	marginLeft: '50px',
	marginRight: '50px',
	textAlign: 'center',
			}

	return (
			<div class="w3-animate-opacity" style={styleBody}>				
					<Row md>
						<Col>
							<h1>Hobbies</h1>
						</Col>
						<Col>
							<h1>Education</h1>
						</Col>
					</Row>
					<Row md>
						<Col>
							<h1>Work experience</h1>
						</Col>
						<Col>
							<h1>etc.</h1>
						</Col>
					</Row>				
			</div>
		)
	
}
export default Aboutme;