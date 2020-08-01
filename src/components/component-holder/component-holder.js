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
        this.addImage = this.addImage.bind(this)
    }

    imageActivator(id) {
        //Activate id by ref
    }

    addImage() {
        
        let newImg = document.getElementById("new-selected-img")
        if (newImg) {
            let width = newImg.naturalWidth;
            let height = newImg.naturalHeight;
            let src = newImg.src;

            //Generate id, each id can be added only once.
            this.setState((prevSt) => {
                prevSt.imageSet.push({
                    width: width,
                    height: height,
                    src: src,
                    active: true,
                    id: "00"+prevSt.imageSet.length
                });

                //**Make other images active=false by setting keys for images
            })
            //**Rewrite without forceUpdate
            this.forceUpdate()
            console.log({ inholder: this.state.imageSet })
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