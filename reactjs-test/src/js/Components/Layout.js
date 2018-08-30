import React from 'react';
import Select from './Select';
import Modal from './Modal'

class Layout extends React.Component {
    constructor() {
        super();
        this.state = { countIndex: 0,
        modalId: 'counter-modal' }
    }
    componentDidMount() {
        let scrollPos = 0
        document.addEventListener('scroll', (e) => {
            let element = document.getElementById('scroll-jacking');
            let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
            let fontSize = parseFloat(style);
            if ((document.body.getBoundingClientRect()).top > scrollPos) {
                element.style.fontSize = (fontSize + 1) + 'px';
            } else {
                element.style.fontSize = (fontSize - 0.5) + 'px';
            }
            scrollPos = (document.body.getBoundingClientRect()).top;
        })
    }
    componentWillUnmount() {
        document.removeEventListener('scroll')
    }
    clickHandler(e) {
        this.setState((prevstate) => {
            return { countIndex: (prevstate.countIndex + 1) }
        })
        $('#' + this.state.modalId).modal('show')
    }
    resetHandler(e) {
        this.setState((prevstate) => {
            return { countIndex: 0 }
        })
    }
    render() {
        return(
            <div class = "container">
                <div class = "col-lg-3"></div>
                <div class = "col-lg-10">
                    <h1>React Screening</h1>
                    <div class = "card mb-5">
                        <div class = "card-header">Button Click Counter: {this.state.countIndex}</div>
                        <div class = "card-body">
                            <button type="button" class="btn btn-primary" onClick = {this.clickHandler.bind(this)}>Open</button>
                            <button type="button" class="btn btn-link" onClick = {this.resetHandler.bind(this)}>Reset</button>
                        </div>
                    </div>
                    <div class = "card mb-5">
                        <div class = "card-header">Scroll text</div>
                        <div class = "card-body">
                            <p id = "scroll-jacking">Size of text will increase or decrease with scroll</p>
                        </div>
                    </div>
                    <div class = "card mb-5">
                        <div class = "card-header">Sort List of Friuits and Cars</div>
                        <div class = "card-body">
                            <form>
                                <Select />
                            </form>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-3"></div>
                <Modal modalId = {this.state.modalId} counterIndex = {this.state.countIndex}></Modal>
            </div>
        );
    }
}

export default Layout;