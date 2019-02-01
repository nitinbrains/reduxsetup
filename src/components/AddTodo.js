import React, { Component } from 'react'
import uuid from 'uuid'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {connect} from 'react-redux'
import {addTodo} from '../actions/DispActions'
 class AddTodo extends Component {
     state={
         myItem:''
     }

     change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      }
 
      submitForm=(e)=>{
          e.preventDefault()
          let new_todo=this.state.myItem;
        

          const newData=
            {  id:uuid(),
                item:new_todo, 
                isChecked:false
             }
            
          
             this.props.addTodo(newData)
             
          this.setState({
              myItem:''
          })
          console.log(newData,'newtodo---------------')
          console.log(this.state.myItem,'item---------------')
      }
     

  render() { 
    console.log(this.state.myItem,'inside reneder item');
    
    return (
      <div className="container">
         <Form>
         <FormGroup style={{marginBottom:'20px'}}>
          <Label for="exampleQuest">New Todo:</Label>
          <Input type="text" name="myItem" value={this.state.myItem} onChange={e=>this.change(e)} id="exampleQuest" placeholder="Enter some text" required/>
        </FormGroup>
     <Button type="submit" onClick={this.submitForm}>Submit</Button>  
        </Form>
      </div>
    )
  }
}
export default connect(null, {addTodo})(AddTodo);
