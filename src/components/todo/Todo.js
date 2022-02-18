import React, { Component } from "react";



class Todo extends Component {

    state = {
        defaultValue: "",
        tasks: []
    };  


    handleChange = (event) => {
        this.setState({
            defaultValue: event.target.value
        })
    }

    AddButton = () =>{

        const defaultValue = this.state.defaultValue.trim();

        
        if(!defaultValue){
            return
        }

        const tasks = [this.state.tasks];
        
        tasks.push(defaultValue)

        this.setState({
            tasks: tasks,
            defaultValue : ""
        })

    }


  

    render() {

        let {tasks} = this.state;
  

         
        let tasksComponent = tasks.map((item,index)=>{
            return <li key={index}>
                {item}
    
            </li>
        })




        return (
            <div>
                <input type="text" value={this.state.defaultValue} onChange={this.handleChange} />
                <button onClick={this.AddButton}>Add</button>
                <ol>
                {tasksComponent}
                </ol>
            </div>

        )


    }


}



export default Todo;