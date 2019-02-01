import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {connect} from 'react-redux'
import {editTodo,getTodos} from '../actions/DispActions'

 class EditTodo extends Component {
     state={
         myItem:''
     }
     componentDidMount(){
        this.props.getTodos();
        const {Todos}=this.props;
        const paramId=this.props.match.params.id;
        const filtData=Todos.filter(v=>v.id==paramId)
        const filtObject=filtData[0]
        const filtItem=filtObject.item;
        this.setState({
            myItem:filtItem
        })
        
      }

     change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      }
 
      UpdateForm=(e)=>{
          e.preventDefault()
          const paramId=this.props.match.params.id;
          const Todo={
              id:paramId,
              item:this.state.myItem,
              isChecked:false
          }
         this.props.editTodo(Todo);
      }

  render() { 
    console.log(this.state.myItem,'inside reneder item');
    return (
      <div className="container">
         <Form>
         <FormGroup style={{marginBottom:'20px'}}>
          <Label for="exampleQuest">Edit Todo:</Label>
          <Input type="text" name="myItem" value={this.state.myItem} onChange={e=>this.change(e)} id="exampleQuest" placeholder="Enter some text" required/>
         </FormGroup>
          <Button type="submit" onClick={this.UpdateForm}>Submit</Button>  
        </Form>
      </div>
    )
  }
}

const mapStateToProps =(state)=>({
    Todos: state.Todo.Todos
  });


export default connect(mapStateToProps, {editTodo,getTodos})(EditTodo);
