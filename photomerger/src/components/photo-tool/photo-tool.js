import React from 'react';
// import photo from '../../assets/photoSample.jpg';
import photo from '../../assets/photoSample2.jpg';
//import photo from '../../assets/photoSample3.jpg';
//import photo from '../../assets/photoSample4.jpg';
// import photo from '../../assets/photoSample5.jpg';
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
            
            var photoRatio = img.width / img.height;
            var canvasRatio = canvas.width / canvas.height
            if (photoRatio <= canvasRatio) {
                ctx.drawImage(img, 0, 0, img.width*(canvas.height/img.height), canvas.height)
            }
            //if photow/h <= canvasw/h fit photo height to canvas height
            //else fit photo width to canvas width
            else {
                ctx.drawImage(img, 0, 0, canvas.width, img.height*(canvas.width/img.width))
            }



        }

    }



    render() {

        return (
            <div className="col-6 photo-tool">
                <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" src={photo} className="photo-sample" />
                </canvas>
            </div>
        )

    }

}


export default PhotoTool