import React, { Component } from 'react'
import { Row,Col, Container } from 'react-bootstrap'

export default class Filter extends Component {
    render() {
        return (        
            <Container fluid style={{
                    marginTop: "10px", 
                    marginBottom: "10px",
            }}>
                <Row>                    
                    <Col>
                        <div>{this.props.count} Products</div>                
                    </Col>
                    <Col>
                    <div>                    
                        Order{" "}
                        <select value={this.props.sort} onChange={this.props.sortProducts}>
                            <option>Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                        </Col>
                        <Col>
                        <div>
                            Filter{" "}
                            <select value={this.props.size} onChange={this.props.filterProducts}>
                                <option value="ALL">ALL</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                    </Col>                    
                </Row>
            </Container>
        )
    }
}
