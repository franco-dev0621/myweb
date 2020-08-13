import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { RiShoppingBagLine } from "react-icons/ri";
import { FaDumbbell } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { Link } from 'react-router-dom'

import Contentcard from './contentComponents/Contentcard'
import MessagingApp from './contentComponents/MessagingApp'





function Content (){

	const styleBody = {
		backgroundColor:"#212121", 
		color:"white",										
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		borderRadius:'10px 10px 0px 0px',		
	}

	const styleIcon = {
		backgroundColor: '#212121',
		color: '#34acbc', 
		height: '5em', 
		width: '5em'
	}

	const styleHeader = {
		backgroundColor: '#212121', 
		fontSize: '20px',
		fontWeight: 'bold',
	}

	const styleLink = { 
		textDecoration: 'none', 
		color: 'white'
	}



	return (
		<div class="w3-animate-opacity">	
			
			<Row style={styleBody}>					
				<Col md style={{marginTop: '50px'}}>
					<Link style={styleLink} to="/ecommerce">
					<Contentcard					
						image={
							<div style={styleHeader}>
								<RiShoppingBagLine style={styleIcon}/>
								eCommerce
							</div>
						}								
						text='A semi-amazon clone using REDUX and local API with full inventory and order management'						
						/>
					</Link>
				</Col>
					
					
				<Col md style={{marginTop: '50px'}}>
				<Link style={styleLink} to="/ExerciseTracker">
						<Contentcard 
							image={
								<div style={styleHeader}>
									<FaDumbbell style={styleIcon}/> Exercise Tracker
								</div>
							}								
							text='Simple app that utilizes MERN stack'	
						/>
					</Link>
				</Col>
					
				<Col md style={{marginTop: '50px'}}s>
					<Contentcard 
						//card button on the main page 
						image={
							<div style={styleHeader}>
								<AiFillWechat style={styleIcon}/> Messaging App								
							</div>
						}	
						text='simple app that requires Name and Room name that you want to access. Made by using socket.io'

						//for the modal aft button pressed	
						modalName='Messaging App'																						
						modalContent= {
							<div>
								<MessagingApp />										
							</div>
						}
						/>
				</Col>
			</Row>
		</div>
		)
}
export default Content