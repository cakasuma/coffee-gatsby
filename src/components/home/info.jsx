import React from 'react';
import { Link } from 'gatsby'
import Title from '../global/title';


const Info = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <Title title='our story' />
                <div className='row'>
                    <div className='col 10 col-sm-8 mx-auto text-center'>
                        <p className='lead text-muted mb-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dignissimos hic ut natus aut cum quis. Doloremque ducimus ipsum eaque deserunt inventore aliquid soluta, iure culpa necessitatibus cum, ex maiores dolorum autem praesentium voluptatum fugit ipsa aspernatur dolore error voluptatibus facilis alias nobis tempore aliquam. Tempora sapiente eaque deleniti ducimus.
                        </p>
                        <Link to='/about'>
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Info;