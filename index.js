import ReactDOM from 'react-dom';
import React from 'react';


function Nocheckbox(){
  return <input type="checkbox" onClick={(e)=>{e.preventDefault();}}/>;

}
ReactDOM.render(<Nocheckbox/>,
document.getElementById('root')
);