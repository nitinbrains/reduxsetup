import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import {Button} from 'reactstrap'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import Home from './Home';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="cont">
      <Router>
       <div>
      <Link style={{marginRight:"10px"}} to="/todolist"><Button color="info" size="lg" block>Show List</Button></Link>
       <Link style={{marginRight:"10px"}} to="/addtodo"><Button color="info" size="lg" block>Add Todo</Button></Link>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/todolist" component={TodoList} />
      <Route exact path="/addtodo" component={AddTodo} />
      <Route exact path="/edit/:id" component={EditTodo}/>
      </Switch>
       </div>
      </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
