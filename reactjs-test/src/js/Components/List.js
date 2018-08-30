import React from 'react';

class List extends React.Component {
    constructor() {
        super();
    }
    render() {
        let listItem = ''
        if (this.props.selectedList) {
            listItem = this.props.selectedList.map((list, index) =>
                <li class = "list-group-item" key = {'list' + index}>{ list }</li>
            )
        }
        return(
            <div>
                <a class = "badge badge-primary" href = "javascript:void(0)" id = "sort-list" onClick = {this.props.clickHandler}>Sort List</a>
                <ul class = "list-group">{listItem}</ul>
            </div>
        );
    }
}

export default List;