import React from 'react'

import LayerManger from './layer-manager/layer-manager';
import Merger from './photo-tool/photo-tool';
import FileManager from './file-manager/file-manager'

class App  extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return(
            <div className="whole-page container">
                <div className="help">

                </div>
                <div className="photo-tool">
                    <div className="wrap">
                        <Merger />
                        <div className="layer-manager">
                            <LayerManger />
                        </div>
                    </div>
                </div>
                <div className="file-manager">
                    <div className="wrap">
                        <FileManager />
                    </div>
                </div>
            </div>
        )
    }
}

export default App