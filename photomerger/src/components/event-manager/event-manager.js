import React from 'react'

import LayerManger from '../layer-manager/layer-manager';
import PhotoTool from '../photo-tool/photo-tool';



class EventManager extends React.Component {

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
    //e.currentTarget.style.backgroundColor = 'black';

  }

  dragEnd(e) {
    //e.currentTarget.style.backgroundColor = 'red';

  }

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

 

    var grandParentCornerX = document.getElementById("event-manager").offsetLeft
    var grandParentCornerY = document.getElementById("event-manager").offsetTop

    draggableElement.style.left = x - parentCornerX - 5 -grandParentCornerX + 'px';
    draggableElement.style.top = y - parentCornerY - 5 -grandParentCornerY + 'px';


    this.relocateCorner(draggableElement)
    console.log(this.state)

  }


  componentDidMount() {
    const test = this._test.current
    const topLeft = this._topLeft.current
    const topRight = this._topRight.current
    const botRight = this._botRight.current
    const botLeft = this._botLeft.current
    const photoEditor = this._photoEditor.current

    this.createResizerNode(test)

  }


  render() {

    return (
      <div  className=" row event-manager justify-content-center" id="event-manager">

        <div className="col-6 block--middle-row " ref={this.photoEditor} onDrop={this.drop} onDragOver={this.allowDrop} id="photo-editor">
          <div ref={this._test} className="test" id="test">
            <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-nw" id="topLeft" ref={this._topLeft}></span>
            <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-ne" id="topRight" ref={this._topRight}></span>
            <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-se" id="botRight" ref={this._botRight}></span>
            <span onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable="true" class="resize-handle-sw" id="botLeft" ref={this._botLeft}></span>
          </div>
        </div>
        <div className="col-6 photo-tool-holder">
          <PhotoTool />
        </div>
        <div>
          <LayerManger />
        </div>

      </div>
    )
  }
}

export default EventManager
