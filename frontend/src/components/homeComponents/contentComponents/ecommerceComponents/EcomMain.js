import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Products from './EcomMainComponents/Products';

import Filter from './EcomMainComponents/Filter';
import Cart from './EcomMainComponents/Cart';
import store from './store'
import { Provider } from 'react-redux';


class EcomMain extends React.Component {
    constructor () {
        super();
        this.state = {            
            //this will make the cart items remain on page even if it refreshes
            cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],

        };
    }
    createOrder = (order) => {
        alert("Need to save order for " + order.name)
    }
    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });   
        // ensure that the cartitems will be removed     
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id))); 
    }
    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if(item._id === product._id){
                item.count++;
                alreadyInCart = true;                
            }
        });
        if(!alreadyInCart){
            cartItems.push({...product, count: 1 });
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    render () {
        return (
        <Provider store={store}>
        <Container>
            <Row>
                <Col>
                    <Filter></Filter>
                    <Products 
                        addToCart={this.addToCart}>
                    </Products>
                </Col>
                <Col md lg="3">                    
                        <Cart 
                            cartItems={this.state.cartItems} 
                            removeFromCart={this.removeFromCart}
                            createOrder={this.createOrder}
                        />                    
                </Col>
            </Row>
        </Container>
        </Provider>
          )
    }
}

export default EcomMain