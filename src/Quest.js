import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Quest extends Component {
    render() {
      return (
        <form className = "quest" onSubmit={this.handleSubmit.bind(this)}>
          <input ref="search" className="userInput" type="text" placeholder="type github handle..."/>
          <input type="submit" className="submitBtn" value="Search GitHub User" />
        </form>
      )
    }
    
   handleSubmit(event) {
      event.preventDefault()      
      let handle = ReactDOM.findDOMNode(this.refs.search).value;
      this.props.getUser(handle);
      
    }
  }
  export default Quest;