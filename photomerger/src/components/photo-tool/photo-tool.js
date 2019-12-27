//In this commit, I ll implement the resizing functionality on a div element; so lines related to canvas and image are commented. I need to store the coordinations
//of the 4 corners of the div. Meanwhile I need to instantly re-render the resized div, so the best place to store the coordinations is within component's state 
//object. However there are more reasons to save the coordinates there. To avoid the performance issues and unwanted re-rendering, I do not call setState inside 
//of the componentDidMount (for the initial value of the coordinations), but call it via events (first touch of the mouse, initializes the state).
// I have bound the corners and corner spans in order of topleft, topright, bottomright and bottomleft.

import React from 'react';
//import photo from '../../assets/photoSample.jpg';
//import photo from '../../assets/photoSample2.jpg';
//import photo from '../../assets/photoSample3.jpg';
//import photo from '../../assets/photoSample4.jpg';
// import photo from '../../assets/photoSample5.jpg';
const photo = require('./photoSample4.jpg')

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
             //If photow/h <= canvasw/h fit photo height to canvas height
             //Else, fit photo width to canvas width
             if (photoRatio <= canvasRatio) {
                 ctx.drawImage(img, (0.05 * canvas.width), (0.05 * canvas.height), 0.9 * img.width * (canvas.height / img.height), 0.9 * canvas.height)
             }

             else {
                 ctx.drawImage(img, (0.05 * canvas.width), (0.05 * canvas.height), 0.9 * canvas.width, 0.9 * img.height * (canvas.width / img.width))
             }
         }
         console.log("height : "+ img.height)

    }


    //generate the spans with array nad props
    render() {

        return (
            <div className=" photo-tool">
                <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" src={photo}/>
                </canvas>

            </div>
        )

    }

}


export default PhotoTool

