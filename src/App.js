import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import TodoList from './components/TodoList'
import TodoList2 from './components/TodoList2'
import AddTodo from './components/AddTodo'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="cont">
      <h3>Hello</h3>
      <Router>
       <div>
       <Link to="/todolist">TodoList1</Link>
      <Link to="/todolist2">TodoList2</Link>
      <Link to="/addtodo">AddTodo</Link>
      <Switch>
      <Route exact path="/todolist" component={TodoList} />
      <Route exact path="/todolist2" component={TodoList2} />
      <Route exact path="/addtodo" component={AddTodo} />
      </Switch>
       </div>
      
      </Router>
      {/* <Link to="/todolist">TodoList</Link> */}
      </div>
      </Provider>
    );
  }
}

export default App;
