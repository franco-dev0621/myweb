import React, { Component } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { filterProducts, sortProducts } from '../actions/productActions'
import { connect } from "react-redux";

class Filter extends Component {
    render() {
        return (  
            !this.props.filteredProducts ? (
            <div>Loading . . .</div> 
        ):(
            <Container fluid style={{
                    marginTop: "10px", 
                    marginBottom: "10px",
            }}>
                <Row>                    
                    <Col>
                        <div>{this.props.filteredProducts.length} Products</div>                
                    </Col>
                    <Col>
                    <div>                    
                        Order{" "}
                        <select 
                            value={this.props.sort} 
                            onChange={(e) => this.props.sortProducts(this.props.products, e.target.value)}>
                            <option value="latest">Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                        </Col>
                        <Col>
                        <div>
                            Filter{" "}
                            <select 
                                value={this.props.size} 
                                onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
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
        )        
    }
}
export default connect(
    (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}),
    {
        filterProducts,
        sortProducts,
    }
)(Filter)