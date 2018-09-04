import React from 'react';

class Modal extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div class="modal" id = {this.props.modalId} tabIndex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Counter Modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Modal Counter: {this.props.counterIndex}</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
export default Modal;