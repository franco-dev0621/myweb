import React from 'react'
import data from './data.json'
import {Row,Col} from 'react-bootstrap'
import Products from './EcomMainComponents/Products';

import Filter from './EcomMainComponents/Filter';



class EcomMain extends React.Component {
    constructor () {
        super();
        this.state = {
            products : data.products,
            size:"",
            sort:"",
        };
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
            <Row>
                <Col>
                    <Filter 
                        count={this.state.products.length}
                        size={this.state.size}
                        sort={this.state.sort}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}
                    ></Filter>
                    <Products products={this.state.products}></Products>
                </Col>
                <Col xs lg="2">
                    Cart Items
                </Col>
            </Row>
          )
    }
}

export default EcomMain