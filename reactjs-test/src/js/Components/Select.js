import React from 'react';
import List from './List'

class Select extends React.Component {
    constructor() {
        super();
        const options = [{
            'value': 'Fruits',
            'option': 'Fruits',
            'itemsList': ['Banana', 'Orange', 'Apple', 'Mango']
        },{
            'value': 'Cars',
            'option': 'Cars',
            'itemsList': ['BMW', 'Audi', 'Volkswagan']
        }];
        const listItems = options.map((option, index) =>
            <option key = {index} value = {option.value}>{option.option}</option>
        );
        this.state = {
            listItems,
            selectedList: options[0].itemsList
         };
        this.options = options
    }
    changeOptions(e) {
        const selectedValue = e.target.value
        const result = this.options.filter((option) => {
            return (option.value === selectedValue)
        })
        this.setState({ selectedList: result[0].itemsList })
    }
    clickHandler(e){
        const selectedList = this.state.selectedList
        this.setState({selectedList: selectedList.sort() })
    }
    render() {
        return(
            <div class = "form-group">
                <select class = "form-control" onChange = {this.changeOptions.bind(this)}>{this.state.listItems}</select>
                <List selectedList = {this.state.selectedList} clickHandler = {this.clickHandler.bind(this)}></List>
            </div>
        );
    }
}

export default Select;