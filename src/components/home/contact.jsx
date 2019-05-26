import React from 'react';
import Title from '../global/title';


const Contact = () => {
    return (
        <section className="contact py-5">
            <Title title='contact us' />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/amammustofa@gmail.com" method="POST" target='_blank'>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id='name' placeholder='John Doe' className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' id='email' placeholder='john@mail.com' className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" rows="5" className="form-control" placeholder='put your description here...'></textarea>
                        </div>
                        <button className="btn btn-yellow btn-block text-capitalize mt-5">submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;