import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Quest from './Quest';


class App extends Component {
    state = {
      username: 'hardik-codes',
      webAddress: '',
      name: '',
      place: '',
      repos: '',
      followers: '',
      pic: '',
      notFound: '',
      following:''
      
    }
  
  render() {
    return (
      <div>
        
        <Profile info={this.state} />
        <Quest getUser={this.getUser.bind(this)}/>
      </div>
    );
  }
  
  
  fetchDataFromAPI(link) {  
    
    fetch(link)
      .then((response) => response.json() )
      .then((userInfo) => {
        
        
        this.setState({
          username: userInfo.login,
          webAddress: userInfo.html_url,
          name: userInfo.name,
          place: userInfo.location,
          repos: userInfo.public_repos,
          followers: userInfo.followers,
          pic: userInfo.avatar_url,
          notFound: userInfo.message,
          following:userInfo.following
         
        })
      })
      .catch((error) => console.log('There is some problem!') )
  }
  
  getUser(username) { 
    this.fetchDataFromAPI(`https://api.github.com/users/${username}`)
  }
  
  componentDidMount() {     
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchDataFromAPI(url)
  } 
}


export default App;
