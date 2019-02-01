import React, { Component } from 'react'
import '../App.css';
import {connect} from 'react-redux'
import {getTodos,deleteTodo,toggleChange} from '../actions/DispActions'
import { Badge, Input,  ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom'

 class TodoList extends Component {
    componentDidMount(){
        this.props.getTodos();
      }

     toggleChange=(id)=>{
       this.props.toggleChange(id)
    }

    onDeleteClick=(id)=>{
       this.props.deleteTodo(id)
    }

  render() {
      const {Todos}=this.props;
      console.log(Todos,'to---------------');
      
    return (

      <div>
        {Todos.map((v,i)=>(
          <div>
          <ListGroup>
            <ListGroupItem style={{padding:".75rem 2.7rem"}}>
            <Input style={{marginLeft:"-1rem"}} type="checkbox" checked={v.isChecked} onChange={this.toggleChange.bind(this,v.id)}/>
            {v.item}{v.isChecked?<Badge className="mybadge" color="secondary">Complete</Badge>:null}
            <i className="fas fa-trash-alt" onClick={this.onDeleteClick.bind(this,v.id)} style={{cursor:'pointer',float:'right', marginRight:'1rem'}}></i>
            <Link to={`edit/${v.id}`}><i className="fas fa-pencil-alt" style={{cursor:'pointer',float:'right', marginRight:'1rem'}}></i></Link>
            </ListGroupItem>
           </ListGroup>
          </div>
        ))}
      </div>
    )
  }
}



const mapStateToProps =(state)=>({
    Todos: state.Todo.Todos
  });
  
  //mapDispatchtoprops ko actionsdisp file m dal dia h
  // const mapDispatchToProps=(dispatch)=>({          
  //   getContacts:()=>dispatch({type: GET_CONTACTS})
  // });
  
  export default connect(mapStateToProps,{getTodos,deleteTodo,toggleChange}) (TodoList);