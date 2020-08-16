import React, { Component } from 'react'
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import Modal from 'react-modal'
import Zoom from 'react-reveal'

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product: null,
        }
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
                <Row>                 
                    {this.props.products.map(product =>(                                                
                        <Col md={4} key={product._id}>                        
                            <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                    <a href={"#" + product._id} onClick={() => this.openModal(product)}>        
                                        <img src={product.image} alt={product.title}></img>                                                                            
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
                                    <img src={product.image} alt={product.title}></img>
                                </Col>
                                <Col>
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
                                    </Button>                                                    
                                </Col>
                            </Row>                                                                               
                            <Button variant="primary" onClick={this.closeModal}>
                                close
                            </Button>
                            </Zoom>                                                                                    
                        </Modal>
                    </Container>
                )}
                                       
            </Container>
        )
    }

}


