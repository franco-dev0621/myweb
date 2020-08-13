import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Alert } from 'react-bootstrap'

import './TextContainer.css'



const TextContainer = ({ users }) => (
  <div className="textContainer">
    
    {
      users
        ? (
          <div>            
            <div>
              <h3><FaUsers style={{width: '2em', height: '2em'}}/> USERS:</h3>
              <h5 className='scroll' 
              style={{                        
                        overflowY: 'scroll', 
                        height: '250px',
                        display: 'flex',
                        flexDirection: 'column-reverse',                        
                      }}>
                {users.map(({name}) => (
                    <Alert key={name} variant='info'>
                      {name} 
                    </Alert>
                    ))}
              </h5>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;