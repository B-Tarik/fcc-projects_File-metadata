import React, {useState} from 'react';


const Upload = ({setResult}) => {
  
  const handleSubmit = e => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    const url = '/api/fileanalyse'
    
    const inputSubmit = e.target[1];
    inputSubmit.disabled = true;
    
    fetch(url, {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      
      document.getElementById('output').scrollIntoView();
      setResult(data)
      inputSubmit.disabled = false;
      
    })
    .catch(error => console.error('Error:', error));
  }
  
  return (
   <div className="submit-file">
      <h3>Upload a File (max size: 1MB)</h3>
      
      <div className="form-container">

          <form className="submit-file-form" onSubmit={handleSubmit}>
            <input className="form-file" id="inputfield" type="file" name="upfile" />
            <input className="form-submit" type="submit" value="Upload"/>
          </form>
        
      </div>
    </div>
  )
}

export default Upload;



