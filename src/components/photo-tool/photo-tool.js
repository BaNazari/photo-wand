
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

export default PhotoTool
