import React from 'react';

const Profile = (props) => {
 
    let info = props.info;
    let repos = `${info.webAddress}?tab=repositories`;
    let followers = `${info.webAddress}/?tab=followers`;
    let following = `${info.webAddress}/?tab=following`;
    
    if (info.notFound === 'Not Found') {
        return <h3 className="userNotFound">User not found. <br>Try Again!!</h3>
    } else {
      
      return (
        
        <div className="Profile">
          <a href={info.webAddress} target="_blank">
            <img className="userImage" src={info.pic} />             
          </a>
          <h2 className="userHandle">
            <a className="userUrl" href={info.webAddress} target="_blank">{info.username}</a></h2>
          <dl>
            <dt>Name</dt>
            <dd>{info.name}</dd>

            <dt>Location</dt>
            <dd>{info.place}</dd>
          </dl>
          
          <div className="userDetails">
            <ul>
               <li>
                  <a href={followers} target="_blank"><i>{info.followers}</i><span>Followers</span></a>
               </li>

               <li>
                  <a href ={repos} target="_blank"><i>{info.repos}</i><span>Repositories</span></a>
               </li>

               <li>
                  <a href={following} target="_blank"><i>{info.following}</i><span>Following</span></a>
               </li>
            </ul>
          </div>

          <div className = "githubFollow">
            <a href = {info.webAddress}><button className ="followBtn"><i class="fa fa-github"></i> Follow</button></a>
          </div>
        </div>
      );
    }
  };
   export default Profile;
