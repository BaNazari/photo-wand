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
//const photo = require('./heif.jpg')

class PhotoTool extends React.Component {

    constructor() {
        super();
        this.state = {
            photoCorners: []
        }


        this._photoEditor = React.createRef();
        this._test = React.createRef();
        this._hidden = React.createRef();
        this._topLeft = React.createRef();
        this._topRight = React.createRef();
        this._botLeft = React.createRef();
        this._botRight = React.createRef();
        this._cornerSpanOrder = [[3, "topLeft", 1], [0, "topRight", 2], [1, "botRight", 3], [2, "botLeft", 0]]

        //this.wrap = this.wrap.bind(this)
        this.outlineAdder = this.outlineAdder.bind(this)
        this.outlineRemover = this.outlineRemover.bind(this)
        this.calcCorners = this.calcCorners.bind(this)
        this.createResizerNode = this.createResizerNode.bind(this)
        this.setInitialCoordination = this.setInitialCoordination.bind(this)
        this.dragStart = this.dragStart.bind(this)
        this.dragEnd = this.dragEnd.bind(this)
        this.allowDrop = this.allowDrop.bind(this)
        this.drop = this.drop.bind(this)
        this.relocateCorner = this.relocateCorner.bind(this)
        
    }



    // wrap(el, wrapper) {
    //     el.parentNode.insertBefore(wrapper, el);
    //     wrapper.appendChild(el);
    // }

    outlineAdder(e) {
        e.target.classList.add("new-class")
    }

    outlineRemover(e) {
        e.target.classList.remove("new-class")
    }

    calcCorners(element) {
        var currentTopLeft = [element.offsetLeft, element.offsetTop]
        var currentTopRight = [element.offsetLeft + element.clientWidth, element.offsetTop]
        var currentBotLeft = [element.offsetLeft, element.offsetTop + element.clientHeight]
        var currentBotRight = [element.offsetLeft + element.clientWidth, element.offsetTop + element.clientHeight]
        return [currentTopLeft, currentTopRight, currentBotRight, currentBotLeft]

    }

    createResizerNode(mainElement) {
        mainElement.addEventListener("mouseenter", this.outlineAdder)
        mainElement.addEventListener("mouseleave", this.outlineRemover)
        mainElement.addEventListener("mouseover", this.setInitialCoordination)

    }

    setInitialCoordination(e) {
        if (e.target.id === "test") {
            var initialPoint = this.calcCorners(e.target)
            this.setState({
                photoCorners: initialPoint
            })
            e.target.removeEventListener(e.type, this.setInitialCoordination)
            console.log(this.state)
        }

    }

    dragStart(e) {
        e.dataTransfer.setData("Text", e.target.id);
        e.currentTarget.style.backgroundColor = 'black';

    }

    dragEnd(e) {
        e.currentTarget.style.backgroundColor = 'red';

    }

    //YOU WANT TO KEEP THE TARGET IN LAST POSITION OF THE MOUSE OR THE DRAG EVENT. YOU MIGHT DO IT BY DRAGEND.
    allowDrop(e) {
        //browsers prevent drops by default, so we need to prevent them prevent it!
        e.preventDefault()
        e.stopPropagation()

    }

    relocateCorner(element) {

        var relocatorPoint = [element.offsetLeft + 0.5 * element.clientWidth, element.offsetTop + 0.5 * element.clientHeight]

        var i;
        for (i = 0; i < this._cornerSpanOrder.length; i++) {

            if (this._cornerSpanOrder[i][1] === element.id) {
                var pointBefore = this._cornerSpanOrder[i][0]
                var pointAfter = this._cornerSpanOrder[i][2]
                this.setState(mySt => {
                    mySt.photoCorners[i] = relocatorPoint
                    mySt.photoCorners[pointBefore][0] = relocatorPoint[0]
                    mySt.photoCorners[pointAfter][1] = relocatorPoint[1]

                    return {
                        photoCorners: mySt.photoCorners
                    }

                })
                break
            }
        }

        
    }

    drop(e) {
        e.preventDefault();

        const id = e
            .dataTransfer
            .getData('text');

        const draggableElement = document.getElementById(id);
        const dropzone = e.target;
        var x = e.clientX;
        var y = e.clientY;
        var parentCornerX = document.getElementById("photo-editor").offsetLeft
        var parentCornerY = document.getElementById("photo-editor").offsetTop

        draggableElement.style.left = x - parentCornerX - 5 + 'px';
        draggableElement.style.top = y - parentCornerY - 5 + 'px';

        this.relocateCorner(draggableElement)

    }

    componentDidMount() {

        const test = this._test.current
        const topLeft = this._topLeft.current
        const topRight = this._topRight.current
        const botRight = this._botRight.current
        const botLeft = this._botLeft.current
        const photoEditor = this._photoEditor.current

        this.createResizerNode(test)

        //const canvas = this.refs.mycanvas
        //const ctx = canvas.getContext("2d")
        //const img = this.refs.image
        //var wrapper = document.createElement('div')   
        //const range = document.createRange();
        //const suround = document.createElement('div')
        //suround.classList.add("surounda")
        //range.selectNode(test);
        //range.surroundContents(suround)

        // img.onload = () => {

        //     var photoRatio = img.width / img.height;
        //     var canvasRatio = canvas.width / canvas.height
        //     //If photow/h <= canvasw/h fit photo height to canvas height
        //     //Else, fit photo width to canvas width
        //     if (photoRatio <= canvasRatio) {
        //         ctx.drawImage(img, (0.05 * canvas.width), (0.05 * canvas.height), 0.9 * img.width * (canvas.height / img.height), 0.9 * canvas.height)
        //     }

        //     else {
        //         ctx.drawImage(img, (0.05 * canvas.width), (0.05 * canvas.height), 0.9 * canvas.width, 0.9 * img.height * (canvas.width / img.width))
        //     }
        // }
        // console.log("height : "+ img.height)

        // this.wrap(img, wrapper)
        // wrapper.style.height = img.height
        // wrapper.style.width = img.width
        // console.log("height : "+ img.height)
        //wrapper.className = 'wrapper'

    }


    //generate the spans with array nad props
    render() {

        return (
            <div ref={this.photoEditor} onDrop={this.drop} onDragOver={this.allowDrop} id="photo-editor" className="col-6 photo-tool">
                {/* <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" src={photo} className="photo-sample" />
                </canvas> */}
                {/* <div  class="draggy">drag me</div> */}
                <div ref={this._test} className="test" id="test">
                    <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-nw" id="topLeft" ref={this._topLeft}
                    ></span>
                    <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-ne" id="topRight" ref={this._topRight}></span>
                    <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-se" id="botRight" ref={this._botRight}></span>
                    <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-sw" id="botLeft" ref={this._botLeft}></span>
                </div>

            </div>
        )

    }

}


export default PhotoTool

