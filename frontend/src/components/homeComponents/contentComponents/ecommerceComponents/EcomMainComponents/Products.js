import React, { Component } from 'react'
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import Modal from 'react-modal'
import Zoom from 'react-reveal'

import { fetchProducts } from "../actions/productActions";
import { connect } from "react-redux";

class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product: null,
        }
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = () => {
        this.setState({ product: null });
    };
    render() {
        const {product} = this.state;
        return (
            <Container fluid>
            {!this.props.products ? (
                    <div>Laoding . . . </div>
            ): (
                <Row>                 
                        {this.props.products.map((product) =>(                                                
                            <Col md={4} key={product._id}>                        
                                <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <a href={"#" + product._id} onClick={() => this.openModal(product)}>        
                                            <img 
                                                src={product.image} 
                                                alt={product.title}
                                                style={{
                                                    width: '200px',
                                                    height: '200px'
                                                }}
                                            ></img>                                                                            
                                            <Card.Title>{product.title}</Card.Title>
                                        </a>
                                        <Row>
                                            <Col md="auto">
                                                {product.price}                          
                                            </Col>
                                            <Col style={{textAlign: "right"}}>    
                                                <Button onClick={() => this.props.addToCart(product)} variant="warning">Add to Cart</Button>
                                            </Col>
                                        </Row>                          
                                    </Card.Body>
                                </Card>                                                                        
                            </Col>                                          
                        ))}                                                                         
                    </Row>
                     )                    
            }            
                {product && (
                    <Container>
                        <Modal 
                            isOpen={true}
                            onRequestClose={this.closeModal}
                            style={{
                                marginTop: '100px',                                        
                            }}>
                            <Zoom>                            
                            <Row style={{
                                margin: 'auto',
                                maringTop: '300px'
                            }}>
                                <Col>
                                    <img 
                                        src={product.image} 
                                        alt={product.title}
                                        style={{                                           
                                            height: '500px',
                                            width: '500px'
                                        }}
                                    ></img>
                                </Col>
                                <Col>
                                    <br></br><br></br><br></br><br></br>
                                    <p><strong>{product.title}</strong></p>
                                    <p>{product.description}</p>
                                    <p>Available Sizes:{" "}
                                        {product.availableSizes.map((x) =>(
                                            <span>
                                                {" "}
                                                <Button variant="outline-dark">{x}</Button>
                                            </span>
                                        ))}
                                    </p>       
                                    <p>{product.price}</p>  
                                    <Button
                                        variant="warning"
                                        onClick={()=>{
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}
                                    >
                                        Add to cart
                                    </Button>{" "}     
                                    <Button variant="primary" onClick={this.closeModal}>
                                        close
                                    </Button>                                               
                                </Col>
                            </Row>                                                                                                           
                            </Zoom>                                                                                    
                        </Modal>
                    </Container>
                )}
                                       
            </Container>
        )
    }
}
export default connect((state) => ({products: state.products.items}),{fetchProducts})(Products);


