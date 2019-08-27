import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AppTitle from './common/appTitle.jsx';

const CodeSolution = () => {
  
  
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>File Metadata Microservice</h1>} />
      <div className="code-solution">
        <h2>Code Solution</h2>
        <ol>
          
          <li>I can submit a form that includes a file upload.</li>
          
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q1}
          </SyntaxHighlighter>
          
          <li>The form file input field has the "name" attribute set to "upfile". We rely on this in testing.</li>
          
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q2}
          </SyntaxHighlighter>
    
          <li>When I submit something, I will receive the file name and size in bytes within the JSON response</li>
          
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {q3}
          </SyntaxHighlighter>
          
        </ol>
      </div>   
      
    </div>
  );
}


const q1 = `const handleSubmit = e => {
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

      document.getElementById('output').scrollIntoView();
      setResult(data)
      inputSubmit.disabled = false;
      
    })
    .catch(error => console.error('Error:', error));
}`
  
  const q2 = `<div className="submit-file">
  <h3>Upload a File (max size: 1MB)</h3>

  <div className="form-container">

      <form className="submit-file-form" onSubmit={handleSubmit}>
        <input className="form-file" id="inputfield" type="file" name="upfile" />
        <input className="form-submit" type="submit" value="Upload"/>
      </form>

  </div>
</div>`
  
  const q3 = `app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  
  if(req.file === undefined) next(new Error('No file chosen'))
  
  res.json({
    name : req.file.originalname,
    type : req.file.mimetype,
    size : -~(req.file.size/1024) + 'KB'
   });
})`


export default CodeSolution;