import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import Products from './EcomMainComponents/Products';
import Filter from './EcomMainComponents/Filter';
import Cart from './EcomMainComponents/Cart';
import store from './store'
import { Provider } from 'react-redux';


class EcomMain extends React.Component {   
    render () {
        return (
        <Provider store={store}>
        <Container>
            <Row>
                <Col>
                    <Filter></Filter>
                    <Products></Products>
                </Col>
                <Col md lg="3">                    
                    <Cart></Cart>
                </Col>
            </Row>
        </Container>
        </Provider>
          )
    }
}

export default EcomMain