import React, { Component } from 'react'

import { Card, Row, Col, Button, Container  } from 'react-bootstrap'

export default class Products extends Component {
    render() {
        return (
            <Container>
                <Row>                    
                        {this.props.products.map(product =>(
                                <Col md={4} key={product._id}>
                                    <Card style={{ width: '18rem' }}>
                                        <img src={product.image} alt={product.title}></img>
                                        <Card.Body>
                                            <a href={"#" + product._id}>
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
                        <br></br>                                                    
                </Row>
            </Container>
        )
    }
}