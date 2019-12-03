import React from 'react';
import photo from '../../assets/photoSample.jpg';
//const photo = require('./heif.jpg')

class PhotoTool extends React.Component {

    constructor() {
        super();
        this.state = {
        }

    }

    componentDidMount() {
        const canvas = this.refs.mycanvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image

        img.onload = () => {
            ctx.drawImage(img, 10, 10)
        }

    }



    render() {

        return (
            <div className="col-6 photo-tool">
                <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" src = {photo} className="photo-sample" />
                </canvas>
            </div>
        )

    }

}


export default PhotoTool