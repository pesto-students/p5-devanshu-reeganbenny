import React, { Component } from 'react';
import "./TodoApp.css"

export default class TodoApp extends Component {
    state = {
        newList : "",
        allTodoList : [],
        allCompletedList : [],
    }

    componentDidMount(){
        if(localStorage.getItem('todoListApp') === null){
            this.setState({
                allTodoList : [],
            });
        }else{
            this.setState({
                allTodoList : JSON.parse(localStorage.getItem('todoListApp')),
            });
        }

        if(localStorage.getItem('listCompleted') === null){
            this.setState({
                allCompletedList : [],
            });
        }else{
            this.setState({
                allCompletedList : JSON.parse(localStorage.getItem('listCompleted')),
            });
        }
    }
    
    shouldComponentUpdate(nextProps, nextState){
        localStorage.setItem('todoListApp',JSON.stringify(nextState.allTodoList));
        localStorage.setItem('listCompleted',JSON.stringify(nextState.allCompletedList));
        return true;
    }

    handleComplete = key => {
        console.log(key);
        this.setState({
            allCompletedList : [...this.state.allCompletedList, this.state.allTodoList[key]],
            allTodoList : this.state.allTodoList.filter((data,index) => index !== key),
        });
    }

    handleDelete = key => {
        console.log(key);
        this.setState({
            allTodoList : this.state.allTodoList.filter((data,index)  => index !== key),
        });
    }

    handleDeleteCompleted = key => {
        console.log(key);
        this.setState({
            allCompletedList : this.state.allCompletedList.filter((data,index)  => index !== key),
        });
    }

    handleChange = (event) =>{
        this.setState({
            newList : event.target.value,
        });
    }  
  
    addNewList = (event) => {
        event.preventDefault();
        if(this.state.newList === "" || this.state.newList === null){
            alert("Invalid Input "+this.state.allTodoList);
        }else{
            this.setState({
                allTodoList : [...this.state.allTodoList, this.state.newList],
                newList : "",
            });
        }
    }

    render() {
        const {newList , allTodoList, allCompletedList} = {...this.state}
        return (
        <div className = "todo-container">
            <form className = "input-section" onSubmit={this.addNewList}>
                <h1>Todo App</h1>
                <input 
                    type = "text" 
                    value = {newList}
                    onChange={this.handleChange} 
                    placeholder="Enter item..." />
                <button><i className="fa-solid fa-plus"></i></button>
            </form>
            <ul>
                {allTodoList.map((list, index) => {
                    return(
                        <li key={index}>
                            <i 
                                className="fa-sharp fa-solid fa-circle-check" 
                                onClick={() => this.handleComplete(index)} >
                            </i> 
                            <p>{list}</p>
                            <i 
                                className="fa-solid fa-trash-can" 
                                onClick={() => this.handleDelete(index)}>
                            </i>
                        </li>
                    )
                })}
                {allCompletedList.map((list,index) =>{
                    return(
                        <li key={index} className="completed">
                            <i className="fa-sharp fa-solid fa-circle-check"></i> 
                            <p>{list}</p>
                            <i 
                                className="fa-solid fa-trash-can" 
                                onClick={() => this.handleDeleteCompleted(index)}>
                            </i>
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}
