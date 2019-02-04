import React, { Component } from 'react'
import axios from 'axios'
 class Test extends Component {
   state={
       Todos:[]
   }
     componentDidMount(){
         axios.get('http://localhost:3000/Todos')
         .then(res=>{
           this.setState({
             Todos:res.data
           })
         })
         .catch(err=>console.log(err))
        
     }
  render() {

    return (
      <div>
        {this.state.Todos.map((v,i)=>(
          <div>
            <p>{v.item}</p>
          </div>
        ))}
      </div>
    )
  }
}
export default Test;