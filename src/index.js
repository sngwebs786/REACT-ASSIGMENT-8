import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCard from './App';
import Gate from './App'
// import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';

ReactDOM.render(
  <React.StrictMode>
    {/* q1 and q2 */}
    <MediaCard title = {<Fragment> This <b> is </b> title </Fragment>} body = "This is body" imageUrl = {logo} />

{/* q3 */}
{/* <Gate isOpen = "false" /> */}


  </React.StrictMode>,
  document.getElementById('root')
);

