import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {connect} from 'react-redux'
import {getTodo,updateTodo} from '../actions/DispActions'

 class EditTodo extends Component {
     state={
         myItem:''
     }

     UNSAFE_componentWillReceiveProps(nextProps, nextState){
        const {item}=nextProps.Todo;
        this.setState({
            myItem:item
        })
     }

     componentDidMount(){
        const {id}=this.props.match.params;
        this.props.getTodo(id);
        const {Todo}=this.props; 
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
         this.props.updateTodo(Todo);
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
    Todo: state.Todo.Todo
  });


export default connect(mapStateToProps, {getTodo,updateTodo})(EditTodo);
