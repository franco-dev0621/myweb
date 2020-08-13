import React from 'react'
import {Col, Row, Container}from 'react-bootstrap'
import {BsPhone, BsHouse, BsEnvelope} from 'react-icons/bs'

function Contact (){
	return (
	<Container style={{borderRadius: '0px 0px 10px 10px', backgroundColor: '#065464', 
		textAlign:'Center', fontSize: '13px', marginTop: '50px', color: 'white'}}>
		<div>
			<Row>
				<Col style={{marginTop: '100px'}}>
					<BsPhone /> Phone<br></br>
					<p>0917-793-8328</p>
				</Col>					
			</Row>
			<Row>				
				<Col>
					 <BsHouse /> Address<br></br>
					<p>#403 St. Raphael Village, Kaybagal South, Tagaytay City, Cavite</p>
				</Col>
			</Row>
			<Row>
				<Col style={{marginBottom: '100px'}}>
					 <BsEnvelope /> Email<br></br>
					<p>francis.june21@gmail.com</p>
				</Col>
			</Row>
		</div>
	</Container>
		)
}
export default Contact
					