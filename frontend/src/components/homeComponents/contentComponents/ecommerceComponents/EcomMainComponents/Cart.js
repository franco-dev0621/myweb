import React, { Component } from 'react'
import { Button, Media, Container, Row, Col } from 'react-bootstrap';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (  
                 
            <Container>
                <div  style={{marginBottom: '20px', textAlign: 'center'}}>
                    {cartItems.length ===0 ? 
                    (
                        <div>
                            Cart is empty
                        </div>
                    ) : (
                        <div>
                            You have {cartItems.length} in the cart{" "}
                        </div>
                    )}
                </div>
                    <div>                    
                    {cartItems.map(item => (
                        <Media 
                            style={{marginBottom: '10px', 
                                    marginTop: '10px',  
                                    backgroundColor: '#d2faf8'
                                    }}
                            key={cartItems._id}> 
                            <img
                                style={{height: "4em", with: "4em"}} 
                                src={item.image} 
                                alt={item.title}></img>
                            <Media.Body>
                                <div style={{fontSize: '12px'}}>
                                    {item.title}
                                </div>
                                {item.price} x {item.count} {" "}
                                <Button variant="danger" onClick={()=>this.props.removeFromCart(item)}>
                                    Remove
                                </Button>
                            </Media.Body>                            
                        </Media>                        
                        ))}                                                         
                    </div> 

                {cartItems.length !== 0 && (
                    <div style={{textAlign: 'right', marginTop: '20px'}}>
                    <Row>
                        <Col style={{fontSize: '18px', textAlign: 'left'}}>
                            Total:{" "}                    
                            <strong>{Math.round(cartItems.reduce((a,c) => a + c.price * c.count, 0) * 100)/100}</strong>
                        </Col>
                        <Col>
                            <Button variant="warning">
                                Proceed
                            </Button>
                        </Col>
                    </Row>                                   
                </div>
                )}

                
            </Container>    
        )
    }
}
