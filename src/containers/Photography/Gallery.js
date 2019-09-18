import React, { Component } from 'react';
import classes from './Gallery.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
export class Gallery extends Component {
    
    
    render() {
        function importAll(r) {
            return r.keys().map(r);
        }
        
        const imgFood = importAll(require.context('../../assets/gallery/food', false, /\.(png|jpe?g|svg|heic|JPG)$/));
        const imgNature = importAll(require.context('../../assets/gallery/nature', false, /\.(png|jpe?g|svg|heic|JPG)$/));
        const imgDogs = importAll(require.context('../../assets/gallery/dogs', false, /\.(png|jpe?g|svg|heic|JPG)$/));

        return (
            <div className={classes.Gallery}>
                <Toolbar></Toolbar>
                <h1 className={classes.albumnTitle}>Food</h1>
                <div className={classes.albumn}> 
                {
                    imgFood.map((path, index) => {
                        return <img key={index} src={path} alt="pic" className={classes.GalleryImage}/>;
                    })}
                </div>

                <h1 className={classes.albumnTitle}>Nature</h1> 
                <div className={classes.albumn}>
                {
                    imgNature.map((path, index) => {
                        return <img key={index} src={path} alt="pic" className={classes.GalleryImage}/>;
                    })}
                </div>

                <h1 className={classes.albumnTitle}>Dogs</h1> 
                <div className={classes.albumn}>
                {
                    imgDogs.map((path, index) => {
                        return <img key={index} src={path} alt="pic" className={classes.GalleryImage}/>;
                    })}
                </div>


            </div>
        );
    }
}

export default Gallery;