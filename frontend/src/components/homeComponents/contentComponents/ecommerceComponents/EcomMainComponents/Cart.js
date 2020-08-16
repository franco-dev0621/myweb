import React, { Component } from 'react'
import { Button, Media, Container, Row, Col, Form } from 'react-bootstrap';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={ 
            name: "",
            email: "",
            address: "",
            showCheckout: false 
            };
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    };
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
                    <div>
                    <div style={{textAlign: 'right', marginTop: '20px'}}>
                    <Row>
                        <Col style={{fontSize: '18px', textAlign: 'left'}}>
                            Total:{" "}                    
                            <strong>{Math.round(cartItems.reduce((a,c) => a + c.price * c.count, 0) * 100)/100}</strong>
                        </Col>
                        <Col>
                            <Button 
                                onClick={()=>{this.setState({
                                    showCheckout: true
                                });}}
                                variant="warning">
                                Proceed
                            </Button>
                        </Col>
                    </Row>                                   
                </div>
                {this.state.showCheckout &&(
                    <Container style={{
                        borderStyle: 'ridge', 
                        marginTop: '10px'
                    }}>
                    <Form onSubmit={this.createOrder}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                name="email"
                                type="email"
                                required
                                onChange={this.handleInput}
                            />
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                name="name"
                                type="text"
                                required
                                onChange={this.handleInput}
                            />
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                name="address"
                                type="text"
                                required
                                onChange={this.handleInput}
                            />
                        </Form.Group>
                        <div style={{
                            marginBottom: '10px',
                            textAlign: 'right'
                        }}>
                        <Button                            
                            variant="warning" 
                            type="submit">
                            Checkout
                        </Button>
                        </div>
                    </Form>                    
                    </Container>                    
                )}
                </div>
                )}              
            </Container>    
        )
    }
}
