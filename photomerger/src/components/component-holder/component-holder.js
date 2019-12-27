import React from 'react'

import EventManager from '../event-manager/event-manager'
import FileManager from '../file-manager/file-manager'

class ComponentHolder extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="component-holder" id="component-holder">
                <div>
                    <EventManager />
                </div>
                <div className="row justify-content-center">
                    <FileManager />
                </div>
            </div>
        )
    }

}

export default ComponentHolder