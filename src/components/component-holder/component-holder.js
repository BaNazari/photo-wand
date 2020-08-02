import React from 'react'

import CanvasManager from '../canvas/canvas-manager'
import FileManager from '../file-manager/file-manager'
import Exporter from '../exporter/exporter'
import LayerManager from '../layer-manager/layer-manager';

class ComponentHolder extends React.Component {
    constructor() {
        super()
        this.state = {
            imageSet: [],
        }
        this.addImage = this.addImage.bind(this);
        this.imageActivator = this.imageActivator.bind(this)
    }

    imageActivator(id) {
        
        this.setState((prevSt) => {
            prevSt.imageSet.forEach( element => {
                if (element.id===id) {
                    element.active = true
                } else {
                    element.active = false
                }
            })
        })

    }

    addImage() {
        
        let newImg = document.getElementById("new-selected-img")
        if (newImg) {
            let width = newImg.naturalWidth;
            let height = newImg.naturalHeight;
            let src = newImg.src;

            this.setState((prevSt) => {
                prevSt.imageSet.push({
                    width: width,
                    height: height,
                    src: src,
                    active: false,
                    id: "00"+prevSt.imageSet.length
                });
                //Pass down the active one.
            })

            //**Rewrite without forceUpdate
            this.forceUpdate()
            newImg.remove()
            console.log({ inholder: this.state.imageSet })
        }

        else {
            //**Add a notification component
            alert("Select a photo!")
        }
    }

    componentDidUpdate() {
        this.imageActivator(this.state.imageSet[this.state.imageSet.length-1].id)   
    }
    
    
    render() {

        return (
            <div className="component-holder" id="component-holder">
                <div>
                    {<CanvasManager newImageSrc={this.state.imageSet[this.state.imageSet.length - 1]} />}

                </div>
                <div className="layer-manager col-2">
                    <LayerManager />
                </div>
                <div className="row justify-content-between block">
                    <FileManager imageAdder={this.addImage} />

                    <Exporter />
                </div>
            </div>
        )
    }

}

export default ComponentHolder