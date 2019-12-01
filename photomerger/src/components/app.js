import React from 'react'

import LayerManger from './layer-manager/layer-manager';
import PhotoTool from './photo-tool/photo-tool';
import FileManager from './file-manager/file-manager'

class App extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div className="whole-page container">
                <div class="w-100"></div>
                
                <div className="wrap row  justify-content-md-center">
                    <div className="col-12 help">
                        <p>help</p>
                    </div>
                </div>
                <div className="wrap row  justify-content-md-center">
                    <div className="col-6 photo-tool">
                        <p>photo</p>
                    </div>
                    <div className="col-2 layer-manager">
                        <p>layer</p>
                    </div>
                </div>
                <div className="wrap row  justify-content-md-center">
                    <div className="col-10 file-manager">
                        <p>file</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App