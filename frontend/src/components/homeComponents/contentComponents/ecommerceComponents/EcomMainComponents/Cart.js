import React, { Component } from 'react'
import { Fade, Zoom } from "react-reveal"
import { Button, Media, Container, Row, Col, Form, Badge } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Modal } from "react-modal";
import { connect } from 'react-redux'
import { createOrder, clearOrder } from '../actions/orderActions';
import { removeFromCart } from '../actions/cartActions';


class Cart extends Component {
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
            total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
        };
        console.log(order)                
      this.props.createOrder(order);
      };
      closeModal = () => {
        this.props.clearOrder();
      };
    render() {
        const styleCart = {
            marginTop: '10px',
            height: '2rem', 
            width: '2rem'
        }
        const { cartItems, order } = this.props;
        return (  
            <Container>
                <div  style={{marginBottom: '20px', textAlign: 'right'}}>
                    {cartItems.length ===0 ? 
                    (
                        <div>                            
                            <AiOutlineShoppingCart 
                                style={styleCart}/> 
                            <Badge variant="danger">0</Badge>
                        </div>
                    ) : (
                        <div>
                            <AiOutlineShoppingCart 
                                style={styleCart}/> 
                            <Badge variant="danger">{cartItems.length}</Badge>
                        </div>
                    )}
                </div>
                {order && (
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                      <Zoom>
                        <button className="close-modal" onClick={this.closeModal}>
                          x
                        </button>
                        <div className="order-details">
                          <h3 className="success-message">Your order has been placed.</h3>
                          <h2>Order {order._id}</h2>
                          <ul>
                            <li>
                              <div>Name:</div>
                              <div>{order.name}</div>
                            </li>
                            <li>
                              <div>Email:</div>
                              <div>{order.email}</div>
                            </li>
                            <li>
                              <div>Address:</div>
                              <div>{order.address}</div>
                            </li>
                            
                            <li>
                              <div>Total:</div>
                              <div>(order.total)</div>
                            </li>
                            <li>
                              <div>Cart Items:</div>
                              <div>
                                {order.cartItems.map((x)=>(
                                    <div key={x._id}>
                                        {x.count}{x.title}
                                    </div>
                                ))}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Zoom>
                    </Modal>
                )}
                
                    <Fade left cascade>
                        <div>                    
                        {cartItems.map((item) => (
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
                                    <Button variant="danger" 
                                    onClick={() => this.props.removeFromCart(item)}>
                                        Remove
                                    </Button>
                                </Media.Body>                            
                            </Media>                        
                        ))}
                        </div> 
                    </Fade>
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
                    <Fade clear>
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
                    </Fade>                  
                )}
                </div>
                )}                              
            </Container>    
        )
    }
}
export default connect(
    (state) => ({
      order: state.order.order,
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart, createOrder, clearOrder }
  )(Cart);