import React, { Component } from 'react';
import Title from '../global/title';
import Img from 'gatsby-image';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories: this.getCategories(props.items.edges),
        }
    }

    getCategories = (items) => {
        const tempItems = items.map(item => item.node.category);
        return ['all', ...Array.from(new Set(tempItems))];
    }

    handleItems = (category) => {
        const tempItems = [...this.state.items];
        if (category === 'all') {
            this.setState({
                coffeeItems: tempItems
            })
        } else {
            let items = tempItems.filter(({ node }) => node.category === category);
            this.setState({
                coffeeItems: items
            })
        }
    }

    render() {
        return (
            <section className="menu py-5">
                <div className="container">
                    <Title title='best of our menu' />
                    {  !this.state.items.length ?
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>there are no items to display</h1>
                            </div>
                        </div>
                        :
                        <>
                            <div className="row mb-5">
                                <div className="col-10 mx-auto text-center">
                                    { this.state.categories.map((category, index) => (
                                        <button className='btn btn-yellow text-capitalize m-3' type='button' key={index} onClick={() => this.handleItems(category)}>
                                            {category}
                                        </button>
                                    ))
                                    }
                                </div>
                            </div>
                            <div className="row">
                                { this.state.coffeeItems.map(({ node }) => (
                                    <div className='col-11 col-md-6 my-3 d-flex mx-auto' key={node.id}>
                                        <div>
                                            <Img fixed={node.image.fixed} />
                                        </div>
                                        <div className='flex-grow-1  px-3'>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0"><small>{node.title}</small></h6>
                                                <h6 className="mb-0 text-yellow"><small>${node.price}</small></h6>
                                            </div>
                                            <p className='text-muted'>
                                                <small>{node.description.description}</small>
                                            </p>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </>
                    }
                </div>
            </section>
        )
    }
}

export default Menu;