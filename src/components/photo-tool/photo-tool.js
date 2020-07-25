//In this commit, I ll implement the resizing functionality on a div element; so lines related to canvas and image are commented. I need to store the coordinations
//of the 4 corners of the div. Meanwhile I need to instantly re-render the resized div, so the best place to store the coordinations is within component's state 
//object. However there are more reasons to save the coordinates there. To avoid the performance issues and unwanted re-rendering, I do not call setState inside 
//of the componentDidMount (for the initial value of the coordinations), but call it via events (first touch of the mouse, initializes the state).
// I have bound the corners and corner spans in order of topleft, topright, bottomright and bottomleft.

import React, { useEffect } from 'react';

const PhotoTool = (props) => {

    useEffect(() => {
        const myCanvas = document.getElementById("myCanvas")
        const ctx = myCanvas.getContext("2d")
        const myImg = document.getElementById("myImg")

        myCanvas.width = myCanvas.width //**If you dont do it, the previous img will remain. This line resets canvas.
        var photoRatio = myImg.width / myImg.height;
        var canvasRatio = myCanvas.width / myCanvas.height
        //If photow/h <= canvasw/h fit photo height to canvas height
        //Else, fit photo width to canvas width
        if (photoRatio <= canvasRatio) {
            ctx.drawImage(myImg, (0.0 * myCanvas.width), (0.0 * myCanvas.height), 1 * myImg.width * (myCanvas.height / myImg.height), 1 * myCanvas.height)
        }

        else {
            ctx.drawImage(myImg, (0.0 * myCanvas.width), (0.0 * myCanvas.height), 1 * myCanvas.width, 1 * myImg.height * (myCanvas.width / myImg.width))
        }

        console.log("height : " + myImg.height)
    })

    return (
        <div className=" photo-tool">
            <canvas id="myCanvas" className="my-canvas">{props.imageSrc ?
                <img id="myImg" src={require(`../../assets/${props.imageSrc.src}`)} />

                :

                <img id="myImg" />
            }
            </canvas>
        </div>
    )


}

// class PhotoTool extends React.Component {

//     constructor() {
//         super();
//         this.state = {

//         }
//     }


//     componentDidMount() {

//         const canvas = this.refs.mycanvas
//         const ctx = canvas.getContext("2d")
//         const img = this.refs.image


//         img.onload = () => {

//             canvas.width = canvas.width //**If you dont do it, the previous img will remain. This line resets canvas.
//             var photoRatio = img.width / img.height;
//             var canvasRatio = canvas.width / canvas.height
//             //If photow/h <= canvasw/h fit photo height to canvas height
//             //Else, fit photo width to canvas width
//             if (photoRatio <= canvasRatio) {
//                 ctx.drawImage(img, (0.0 * canvas.width), (0.0 * canvas.height), 1 * img.width * (canvas.height / img.height), 1 * canvas.height)
//             }

//             else {
//                 ctx.drawImage(img, (0.0 * canvas.width), (0.0 * canvas.height), 1 * canvas.width, 1 * img.height * (canvas.width / img.width))
//             }
//         }
//         console.log("height : " + img.height)

//     }


//     //generate the spans with array nad props
//     render() {
//         //**Modify the way of dynamic loading of img src. It should load from local storag or directly from eventmanager component.
//         return (
//             <div className=" photo-tool">{this.props.imageSrc ?
//                 <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
//                     <img ref="image" src={require(`../../assets/${this.props.imageSrc.src}`)} />
//                 </canvas>
//                 :
//                 <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
//                     <img ref="image" />
//                 </canvas>
//             }

//             </div>
//         )

//     }

// }


export default PhotoTool
