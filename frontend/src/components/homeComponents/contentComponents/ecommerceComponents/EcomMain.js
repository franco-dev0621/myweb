import React from 'react'
import data from './data.json'
import {Row,Col} from 'react-bootstrap'
import Products from './EcomMainComponents/Products';

class EcomMain extends React.Component {
    constructor () {
        super();
        this.state = {
            products : data.products,
            size:"",
            sort:"",
        };
    }

    render () {
        return (
            <Row>
                <Col>
                    <Products products={this.state.products} />
                </Col>
                <Col xs lg="2">
                    Cart Items
                </Col>
            </Row>
          )
    }
}

export default EcomMain