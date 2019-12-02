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
                
                <div className="wrap row  justify-content-center">
                    <div className="col-12 help">
                        <p>help</p>
                    </div>
                </div>
                <div className="wrap row  justify-content-center">
                    <div className="col-6 photo-tool">
                        <p>photo</p>
                    </div>
                    <div className="col-2 layer-manager">
                        <p>layer</p>
                    </div>
                </div>
                <div className="wrap row  justify-content-center">
                    <div className="col-10 file-manager">
                        <p>file</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

{/* <div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div> 

mr-auto for margin

<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">
        Level 2: .col-8 .col-sm-6
      </div>
      <div class="col-4 col-sm-6">
        Level 2: .col-4 .col-sm-6
      </div>
    </div>
  </div>
</div>*/}