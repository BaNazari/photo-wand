import React from 'react'

import ComponentHolder from './component-holder/component-holder'


class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div className="whole-page container">
        <ComponentHolder />

      </div>
    )
  }
}

export default App


