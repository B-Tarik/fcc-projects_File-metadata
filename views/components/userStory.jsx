import React from 'react';
import AppTitle from './common/appTitle.jsx';

const UserStory = () => {
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>File Metadata Microservice</h1>} />
      
      <div className="user-story" >
        <h2>User Story</h2>
        <ol>
          
          <li>I can submit a form that includes a file upload.</li>

          <li>The form file input field has the "name" attribute set to "upfile". We rely on this in testing.</li>
    
          <li>When I submit something, I will receive the file name and size in bytes within the JSON response</li>

        </ol>
      </div>      
      
    </div>
  );
}

export default UserStory;