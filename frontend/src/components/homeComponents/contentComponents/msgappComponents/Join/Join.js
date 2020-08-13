import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container,Button } from 'react-bootstrap'


export default function SignIn() {



  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
  <Container>

    <div>
      <input placeholder="Enter Room ..." style={{width: '100%', marginBottom: '10px'}} type="text" onChange={(event) => setRoom(event.target.value)} />
    </div>
    <div>
      <input placeholder="Name ..." style={{width: '100%', marginBottom: '10px'}} type="text" onChange={(event) => setName(event.target.value)} />
    </div>
    
    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
      <Button style={{width: '100%'}} variant='dark' type="submit">Sign In</Button>
    </Link>
  </Container>
  );
  }