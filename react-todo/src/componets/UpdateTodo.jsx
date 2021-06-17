import React, { Component } from 'react';

class UpdateTodo extends Component {
    render() {
        return (
            <div>
            <ul>
                <li key={this.props.id}>{this.props.list}</li>
            </ul>
             <button onClick={()=>this.props.deleteToDo(this.props.id)}> Completed Todo list</button>
            </div>
        );
    }
}

export default UpdateTodo;