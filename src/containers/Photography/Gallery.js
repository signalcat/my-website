import React, { Component } from 'react';
import classes from './Gallery.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
export class Gallery extends Component {
    
    
    render() {
        function importAll(r) {
            return r.keys().map(r);
        }
        const images = importAll(require.context('../../assets/gallery', false, /\.(png|jpe?g|svg|heic)$/));
        return (
            <div className={classes.Gallery}>
            <Toolbar></Toolbar>
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