import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Modal,Row,Col } from 'react-bootstrap'

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import './Chat.css'


let socket;

const Chat = ({ location }) => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);



  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  const styleModal = {
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          borderRadius:'0px 0px 10px 10px'
        }

  const styleInfoBardiv ={
          backgroundColor: '#065464',
          color: 'white',
          borderBottom: 'none'
        }

  const styleModalBody = {
          backgroundColor: '#212121',
          color: 'white',                
        }

  const styleMessagesScroll = {                        
          overflowY: 'scroll', 
          height: '250px',
          display: 'flex',
          flexDirection: 'column-reverse',                        
        }

  return (
    
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
        centered
        size="lg"
        style = {styleModal}
      >
        
        <div style={styleInfoBardiv}>
            <InfoBar room={room} />
        </div>
        <Modal.Body style={styleModalBody}>
          <Row>
            <Col md>
            
            <TextContainer users={users}/>
            </Col>            
            <Col md>            
            <div className='scroll' 
                  style={styleMessagesScroll}>
            <Messages 
                    messages={messages} 
                    name={name} 
                    />  
            </div>              
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

          </Col>

          </Row>
        </Modal.Body>
      </Modal>
  );
}

export default Chat;