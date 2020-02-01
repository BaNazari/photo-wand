import React from 'react'

import EventManager from '../event-manager/event-manager'
import FileManager from '../file-manager/file-manager'
import Exporter from '../exporter/exporter'

class ComponentHolder extends React.Component {
    constructor() {
        super()
        this.state = {
            imageSet: []
        }
        //img1:{src:"", active: false, corners:[tl,tr,br,bl], z: 100}
        this.addImage = this.addImage.bind(this)
        this.imageSizer = this.imageSizer.bind(this)

    }

    imageSizer(Image) {
        let width = document.getElementById(Image).width
        let height = document.getElementById(Image).height
        return [width, height]
    }

    addImage(newImg) {
        if (newImg) {
            let dim = this.imageSizer(newImg.id)
            this.setState((prevSt) => {
                prevSt.imageSet.push(newImg);
                this.state.imageSet[this.state.imageSet.length - 1].widthInImageHolder = dim[0]
                this.state.imageSet[this.state.imageSet.length - 1].heightInImageHolder = dim[1]
                this.state.imageSet[this.state.imageSet.length - 1].active = true
            })
            //**Rewrite without forceUpdate
            this.forceUpdate()
            console.log(this.state.imageSet)
        }
        else {
            //**Add a notification component
            alert("Select a photo!")
        }
    }


    //**Add an activator which observes the active properties and outputs only one active image bvased on some criteria.

    render() {

        return (
            <div className="component-holder" id="component-holder">
                <div>
                    <EventManager newImageSrc={this.state.imageSet[this.state.imageSet.length - 1]} />
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