import React from 'react';
import {Row, Col, Container, Media} from 'react-bootstrap/'
import './components.css';
import { DiReact, DiPython,  DiMysql} from "react-icons/di"
import { GiPalette  } from "react-icons/gi";

function Progressbar () {

	const styleBody = {
		backgroundColor:"#212121", 
		color:"white", 
		marginTop: '70px', 
		textAlign: 'left'
	}

	const styleIcon = {
		width: '5em', 
		height: '5em', 
		alignSelf: 'center', 
		color: '#34acbc',		
	}

	const progressBar = {
		width: '100%',
		height: '1px',
		backgroundColor: '#fff',
			
	}

	return (			
		<div style={styleBody} >
			
			<Container style={{alignSelf: 'center'}}>
				<Row>
					<Col>
						<Media>
							<DiReact style={styleIcon}/>							
							<Media.Body>
							<h5><strong>ReactJS</strong></h5>
							<p>
							  Axios, Hooks, REDUX							  
							</p>
								<div style={{width: '50%', height: '5px', backgroundColor: '#34acbc'}}></div>
								<div style={progressBar}></div>
							</Media.Body>
						</Media>
					</Col>					
				</Row>
				<Row>
					<Col>
						<Media>
							<DiPython style={styleIcon}/>							
							<Media.Body>
							<h5><strong>Python</strong></h5>
							<p>
							  Django, DjangoRESTframework, tkinter, flask
							</p>
							<div style={{width: '40%', height: '5px', backgroundColor: '#34acbc'}}></div>
								<div style={progressBar}></div>
							</Media.Body>
						</Media>
					</Col>					
				</Row>
				<Row>
					<Col>
						<Media>
							<DiMysql style={styleIcon}/>
							
							<Media.Body>
							<h5><strong>Database</strong></h5>
							<p>
								MySQL, sqlLite, public and local API
							</p>
							<div style={{width: '40%', height: '5px', backgroundColor: '#34acbc'}}></div>
								<div style={progressBar}></div>
							</Media.Body>
						</Media>
					</Col>					
				</Row>
				<Row>
					<Col>
						<Media>
							
							<GiPalette style={styleIcon}/>
							<Media.Body>
							<h5><strong>Design</strong></h5>
							<p>
								Bootstrap, HTML and CSS animations
							</p>
							<div style={{width: '60%', height: '5px', backgroundColor: '#34acbc'}}></div>
							<div style={progressBar}></div>
							</Media.Body>
						</Media>
					</Col>					
				</Row>
			</Container>
			<br></br>
		</div>			
	)
}
export default Progressbar;

