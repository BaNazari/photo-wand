import React from 'react'

import EventManager from '../event-manager/event-manager'
import FileManager from '../file-manager/file-manager'
import Exporter  from '../exporter/exporter'

class ComponentHolder extends React.Component {
    constructor() {
        super()
        this.state = {
            imageSet:{}
        }
        //img1:{src:"", active: false, corners:[tl,tr,br,bl], z: 100}
    this.addImage = this.addImage.bind(this)
    
    }

    addImage(x) {
        alert(x)
    }

    render() {
        return (
            <div className="component-holder" id="component-holder">
                <div>
                    <EventManager newImage=""/>
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