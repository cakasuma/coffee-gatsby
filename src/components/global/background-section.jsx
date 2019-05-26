import React, { Component } from 'react';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ img, style, title, children }) => {
    return ( 
        <BackgroundImage className={style} fluid={img}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    );
}

BackgroundSection.defaultProps = {
    title: 'default title',
    style: 'default-background'
}

export default BackgroundSection;