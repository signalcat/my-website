import React, { Component } from 'react';
export class Gallery extends Component {
    
    
    render() {
        function importAll(r) {
            return r.keys().map(r);
        }
        const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

        return (
            <div>
                {
                    images.map((path, index) => {
                        return <img key={index} src={path} alt="pic"/>;
                    })
                }
            </div>
        );
    }
}

export default Gallery;