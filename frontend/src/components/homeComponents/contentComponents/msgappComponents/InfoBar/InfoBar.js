import React from 'react';
import { Modal } from 'react-bootstrap'
import { AiFillWechat,AiFillCloseCircle } from "react-icons/ai";



const InfoBar = ({ room }) => (


	<div>
		<Modal.Header>

			<Modal.Title ><AiFillWechat style = {{width: '2em',height: '2em',}}/>{room}</Modal.Title>
			<a href="/">
				<AiFillCloseCircle style = {{width: '2em',height: '2em',}}/>
			</a>
		</Modal.Header>
	</div>
);

export default InfoBar;