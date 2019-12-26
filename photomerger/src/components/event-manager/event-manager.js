import React from 'react'

import LayerManger from '../layer-manager/layer-manager';
import PhotoTool from '../photo-tool/photo-tool';



class EventManager extends React.Component {

          constructor() {
            super();
            this.state = {

            }
          }

          render() {

            return (
              <div className="event-manager">

                <div className="row block--middle-row justify-content-center">
                  <div className="col-6">
                    <PhotoTool />
                  </div>
                    <LayerManger />
                </div>

              </div>
            )
          }
        }

export default EventManager
