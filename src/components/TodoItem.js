import {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        const {item} = this.props;
        let class_name = 'todo-item';
        if(this.props.editMode && this.props.id == item.id) 
            class_name += ' being-edited';
        return(
            <div className={class_name}>
                <span>{item.title}</span>
                <i 
                    className="fas fa-pen"
                    onClick={this.props.editItem}
                ></i>
                <i 
                    className="fas fa-trash"
                    onClick={this.props.deleteItem}
                ></i>
            </div>
        );
    }
}