import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTodos} from '../actions/DispActions'

 class TodoList2 extends Component {
    componentDidMount(){
        this.props.getTodos();
      }

  render() {
      const {Todos}=this.props;
      console.log(Todos,'to2---------------');
      
    return (
      <div>
        
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
  
  export default connect(mapStateToProps,{getTodos}) (TodoList2);