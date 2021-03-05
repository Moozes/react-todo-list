import {Component} from 'react';

export default class TodoInput extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem()
    }
    render() {
        return(
            <div className="input-group">
                <h3>Todo Input</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.props.title}
                        placeholder="Add a todo item"
                        onChange={this.props.handleChange}
                    />
                    <button
                        type="submit"
                    >{this.props.editMode ? 'Edit Item' : 'Add Item'}</button>
                </form>
            </div>
        );
    }
}