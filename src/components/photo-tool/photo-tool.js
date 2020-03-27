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


class PhotoTool extends React.Component {

    constructor() {
        super();
        this.state = {

        }

        //this.photo = require('../../assets/photoSample4.jpg')
        //this.photo = require(`../../assets/${this.props.imageSrc}`)
    }


    componentDidMount() {

        const canvas = this.refs.mycanvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image


        img.onload = () => {
        
            canvas.width = canvas.width //**If you dont do it, the previous img will remain. This line resets canvas.
            var photoRatio = img.width / img.height;
            var canvasRatio = canvas.width / canvas.height
            //If photow/h <= canvasw/h fit photo height to canvas height
            //Else, fit photo width to canvas width
            if (photoRatio <= canvasRatio) {
                ctx.drawImage(img, (0.0 * canvas.width), (0.0 * canvas.height), 1 * img.width * (canvas.height / img.height), 1 * canvas.height)
            }

            else {
                ctx.drawImage(img, (0.0 * canvas.width), (0.0 * canvas.height), 1 * canvas.width, 1 * img.height * (canvas.width / img.width))
            }
        }
        console.log("height : " + img.height)

    }


    //generate the spans with array nad props
    render() {
        //**Modify the way of dynamic loading of img src. It should load from local storag or directly from eventmanager component.
        return (
            <div className=" photo-tool">{this.props.imageSrc ?
                <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" src={require(`../../assets/${this.props.imageSrc.src}`)} />
                </canvas>
                :
                <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" />
                </canvas>
            }

            </div>
        )

    }

}


export default PhotoTool

/* 
var square = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}

https://www.rithmschool.com/courses/advanced-javascript-part-2/canvas-continued
*/
