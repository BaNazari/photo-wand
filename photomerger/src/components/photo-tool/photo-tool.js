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
            photoInitialCorners: [],
            resizeHandlePositions: []
        }

        this.photoEditor = React.createRef();
        this.test = React.createRef();
        this.hidden = React.createRef();
        this.topLeft = React.createRef();


        this.wrap = this.wrap.bind(this)
        this.outlineAdder = this.outlineAdder.bind(this)
        this.outlineRemover = this.outlineRemover.bind(this)
        this.calcCorners = this.calcCorners.bind(this)
        this.createResizerNode = this.createResizerNode.bind(this)
        this.setInitialCoordination = this.setInitialCoordination.bind(this)

    }

    wrap(el, wrapper) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }

    outlineAdder(e) {
        e.target.classList.add("new-class")
        console.log(e)
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

    createResizerNode(mainElement, internalRef) {
        var top_left = document.createElement('span')
        top_left.classList.add("resize-handle-nw")
        top_left.setAttribute('ref', this.topLeft.name)

        var botLeft = document.createElement('span')
        botLeft.classList.add("resize-handle-sw")
        botLeft.setAttribute('ref', 'botLeft')

        var topRight = document.createElement('span')
        topRight.classList.add("resize-handle-ne")
        topRight.setAttribute('ref', 'topRight')

        var botRight = document.createElement('span')
        botRight.classList.add("resize-handle-se")
        botRight.setAttribute('ref', 'botRight')

        mainElement.addEventListener("mouseenter", this.outlineAdder)
        mainElement.addEventListener("mouseleave", this.outlineRemover)
        mainElement.addEventListener("mouseover", this.setInitialCoordination)
        mainElement.insertBefore(top_left, internalRef)
        mainElement.insertBefore(botLeft, internalRef)
        mainElement.insertBefore(topRight, internalRef)
        mainElement.insertBefore(botRight, internalRef)
            console.log(this.topLeft)

    }

    setInitialCoordination(e) {
        var initialPoint = this.calcCorners(e.target)
        this.setState({
            photoInitialCorners: initialPoint
        })
        console.log(this.state)
        e.target.removeEventListener(e.type, this.setInitialCoordination)
    }

    testRef(element) {
        element.addEventListener("dblclick", this.sayHi)
    }

    sayHi() {
        alert("hi")
    }

    componentDidMount() {

        var test = this.test.current
        var hidden = this.hidden.current
        var gholi = this.refs.gholi
        var cornerSpanOrder = [this.refs.topLeft, this.refs.topRight, this.refs.botRight, this.refs.botLeft]

        this.createResizerNode(test, hidden)
        this.testRef(test)
        console.log("width: " + test.clientHeight)
        console.log("height: " + test.clientWidth)
        console.log(test.offsetTop)
        console.log(test.offsetLeft)
        console.log(test)
        console.log(this.state)


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



    render() {

        return (
            <div ref={this.photoEditor} className="col-6 photo-tool">
                {/* <canvas id="my-canvas" ref="mycanvas" className="my-canvas">
                    <img ref="image" src={photo} className="photo-sample" />
                </canvas> */}

                <div ref={this.test} className="test">
                    <div ref={this.hidden} className="hidden"></div>
                </div>
                <div ref="gholi"></div>
            </div>
        )

    }

}


export default PhotoTool

