import React from 'react'

import ComponentHolder from './component-holder/component-holder'
import Help from './help/help';

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div className="whole-page container">
        
        <div className="block row  justify-content-center">
          <Help />
        </div>

        <ComponentHolder />

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