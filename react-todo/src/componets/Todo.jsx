import React, { Component } from 'react';
import UpdateTodo from './UpdateTodo';

class Todo extends Component {
    constructor() {
        super()
        // first I am setting state my user input to an empty string and my list to an empty array
        this.state = {
            userInput: "",
            list: []
        }
    };
    // function that will handle the input as the user types and updates state simultaneously 
    handleUserInput = (input) => {
        this.setState({
            userInput: input
        }, () => { console.log(input) })

    };

    // function that will set list array to the state of list and push listArray with the user input to the array and clears out userInput update. 
    updateTodoList = (input) => {
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({
            list: listArray,
            userInput: ''
        })


    }
    // function where the user can select to have a certain todo deleted once they have completed the task. 
    deleteToDo = (id) => {
        console.log(id)
        let deleteFromList = this.state.list;
        deleteFromList.pop(id);
        this.setState({
            list: deleteFromList
        })


    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.userInput} onChange={(event) => {
                    this.handleUserInput(event.target.value)
                }} />
                <div>
                    <button onClick={() => this.updateTodoList(this.state.userInput)}> Add Todo list</button>
                </div>
                <div>
                    <ul>
                        {this.state.list.map((listItems, id) => {
                            return (
                                <UpdateTodo list={listItems}
                                    id={id}
                                    deleteToDo={this.deleteToDo} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todo;