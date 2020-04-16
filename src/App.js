import React, { Component } from 'react';
import uuid from 'uuid/v1'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }
  //when we type an item it will be updated in the state 
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  }
  clearList = () => {
    console.log("clearList")
  }
  handleDelete = (id) => {
    console.log(`handleDelete ${id}`)
  }
  handleEdit = (id) => {
    console.log(`handleEdit ${id}`)
  }

  render() {
    //console.log(this.state)
    return (
      <div>
        <div className="container" >
          <div className="row" >
            <div class="col-10 mx-auto col-md-8 mt-4">
              <h3 className='text-capitalize text-center'>
                todo input
              </h3>
              <TodoInput item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem} />
              <TodoList item={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.state.handleEdit} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

