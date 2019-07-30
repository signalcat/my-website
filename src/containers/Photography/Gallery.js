import React, { Component } from 'react';
import classes from './Gallery.module.css';
export class Gallery extends Component {
    
    
    render() {
        function importAll(r) {
            return r.keys().map(r);
        }
        const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));
        return (
            <div className={classes.Gallery}>
                {
                    images.map((path, index) => {
                        return <img key={index} src={path} alt="pic" className={classes.GalleryImage}/>;
                    })
                }
            </div>
        );
    }
}

export default Gallery;