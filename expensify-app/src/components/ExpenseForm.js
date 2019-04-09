import React, { Component } from 'react';


export default class ExpenseForm extends Component {
    state ={
        decription:'',
        note:''
    };

    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState (()=>({description}))

    };
    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState (()=>({note}))

    } 
  render() {
    return (
      <div>
          <form>
              <input type="text" placeholder='Description' value = {this.state.description} onChange={this.onDescriptionChange} autoFocus />
              <input type="number" placeholder= "Amount"/>
              <textarea value ={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)"/>
              <button>Add Expense</button>
          </form>
        
      </div>
    )
  }
}
