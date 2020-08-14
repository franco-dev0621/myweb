import React from 'react'
import data from './data.json'
import {Row,Col, Container} from 'react-bootstrap'
import Products from './EcomMainComponents/Products';
import Filter from './EcomMainComponents/Filter';
import Cart from './EcomMainComponents/Cart';

class EcomMain extends React.Component {
    constructor () {
        super();
        this.state = {
            products : data.products,
            cartItems: [],
            size:"",
            sort:"",
        };
    }
    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });        
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
    }
    //sorting using price with asc or desc value
    sortProducts = (event) => {
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a,b) =>
                    sort === "lowest"
                        ? a.price > b.price
                            ? 1
                            :-1
                    :sort === "highest"
                    ? a.price < b.price
                        ? 1
                        :-1
                    :a._id < b._id
                    ? 1
                    :-1
                ),
        }));
    }
    //will filter product accourding to sizes =>JSON sample."product": [ "availableSize": ["S","M","L"] ]
    filterProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === "ALL") {
            this.setState({size: event.target.value , products: data.products});            
        } else {
           this.setState({
            size: event.target.value,
            products: data.products.filter(
                (product) => product.availableSizes.indexOf(event.target.value) >= 0
                ),
            }); 
        }
        
    }

    render () {
        return (
        <Container>
            <Row>
                <Col>
                    <Filter 
                        count={this.state.products.length}
                        size={this.state.size}
                        sort={this.state.sort}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}
                    ></Filter>
                    <Products 
                        products={this.state.products} 
                        addToCart={this.addToCart}>
                    </Products>
                </Col>
                <Col md lg="3">                    
                        <Cart 
                            cartItems={this.state.cartItems} 
                            removeFromCart={this.removeFromCart}/>                    
                </Col>
            </Row>
        </Container>
          )
    }
}

export default EcomMain