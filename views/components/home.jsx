import React, {useState} from 'react';

import Upload from './upload.jsx';
import Output from './output.jsx';
import AppTitle from './common/appTitle.jsx';

const Home = ({history}) => {
  
  const [result, setResult] = useState('');
  
  return (
    <div className="inner-container">
      
      <AppTitle title={<h1>File Metadata Microservice</h1>} />
      <Upload setResult={setResult} />
      <Output result={result} />
      
    </div>
  );
  
}

export default Home;