import React, { Component } from 'react';
import uuid from 'uuid/v1'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  state = {
    items: [{ id: 1, title: 'wake up' }, { id: 2, title: 'Do Homework' }, { id: 3, title: 'feed the dog' }],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = (e) => { console.log("handleChange") }
  handleSubmit = (e) => {
    console.log("handleSubmit")
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

