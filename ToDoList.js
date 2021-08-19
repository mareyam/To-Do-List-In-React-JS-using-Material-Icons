import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'

const ToDoList = (props) =>
{
  return(
     <div className="div5">
        <DeleteIcon id='delete' onClick={() =>
        {
           props.onSelect(props.id);
        }} />
         <p id="li">{props.text}</p>
     </div>
  )
};
export default ToDoList;
