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
        //img1:{src:"", active: false, corners:[tl,tr,br,bl], z: 100}
        this.addImage = this.addImage.bind(this)
        this.imageSizer = this.imageSizer.bind(this)
        // this.addFile = this.addFile.bind(this)

    }

    imageSizer(Image) {
        let width = document.getElementById(Image).width
        let height = document.getElementById(Image).height
        return [width, height]
    }

    addImage(newImg) {
        if (newImg) {
            console.log({newImg:newImg});

            let width = newImg.width;
            let height = newImg.height;
             this.setState((prevSt) => {
                 prevSt.imageSet.push(newImg);
                 this.state.imageSet[this.state.imageSet.length - 1].widthInImageHolder = width
                 this.state.imageSet[this.state.imageSet.length - 1].heightInImageHolder = height
                 this.state.imageSet[this.state.imageSet.length - 1].active = true
                 //**Make other images active=false
             })
             //**Rewrite without forceUpdate
             this.forceUpdate()
             console.log({inholder:this.state.imageSet})
        }
        else {
            //**Add a notification component
            alert("Select a photo!")
        }
    }


    render() {

        return (
            <div className="component-holder" id="component-holder">
                <div>
                    {<CanvasManager newImageSrc={this.state.imageSet[this.state.imageSet.length - 1]} /> }
                    
                </div>
                <div className="layer-manager col-2">
                    <LayerManager />
                </div>
                <div className="row justify-content-between block">
                    <FileManager imageAdder={this.addImage}/>

                    <Exporter />
                </div>
            </div>
        )
    }

}

export default ComponentHolder