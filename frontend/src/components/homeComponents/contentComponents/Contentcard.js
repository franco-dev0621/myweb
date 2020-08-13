import React, {useState} from 'react'
import { Card,  Container, Modal } from 'react-bootstrap'
import { AiFillCloseCircle } from "react-icons/ai";

function Contentcard (props){
  const [show, setShow] = useState(false);

  const handleClose = (props) => setShow(false);
  const handleShow = (props) => setShow(true);

	return (
		<div class='zoom'>
			<Container onClick={handleShow}>					
				<Card style={{alignContent: 'center'}}>
					{props.image}
					<Card.Body style={{backgroundColor: '#212121'}}>
						<Card.Title>{props.title}</Card.Title>
							<Card.Text >
								{props.text}
							</Card.Text>							
					</Card.Body>
				</Card>
				</Container>

				<Modal
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false}
					aria-labelledby="contained-modal-title-vcenter"
					centered					
				>
					<div style={{
								backgroundColor: '#065464',
								color: 'white'}}>
						<Modal.Header>
							<Modal.Title >{props.modalName}</Modal.Title>
							<a href="/"><AiFillCloseCircle 
								style = {{width: '2em',height: '2em',}}
								onClick={handleClose}/>
							</a>
						</Modal.Header>
					</div>
							<Modal.Body style={{backgroundColor: '#7a7d84'}}>
								{props.modalContent}
							</Modal.Body>					
					
				</Modal>
		</div>
		)
}
export default Contentcard