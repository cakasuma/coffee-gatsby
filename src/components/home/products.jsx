import React from 'react';
import Product from './product';
import Title from '../global/title';
import { StaticQuery, graphql } from 'gatsby';

const Products = () => {

    const getProducts = graphql`
        {
            product: allContentfulCoffeeProduct {
                edges {
                    node {
                        id
                        title
                        price
                        image {
                            fluid(maxHeight: 426) {
                                src
                                ...GatsbyContentfulFluid_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `

    return (
        <StaticQuery query={getProducts} render={(data) => (
            <section className='py-5'>
                <div className="container">
                    <Title title='our products' />                
                    <div className="row">
                        {data.product.edges.map(({node:product}) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        )} />
    );
}

export default Products;