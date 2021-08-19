import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add'
import ToDoList from './ToDoList';

const App = () => 
{
  const [currentTask, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  
  const newTask = (event) =>
  {
    setTask(event.target.value);
  }
  const existingTasks = () =>
  {
    setTaskArray ((preValuee) =>
    {
      return ([
        ...preValuee, currentTask 
      ]);
    })
    setTask("");
  }
  const deleteTask = (id) =>
  {
    setTaskArray((preValuee) =>
    {
        return preValuee.filter((taskArray, index) =>
        {
            return index !== id;
        });
    });
  }


  return(
    <div className="div1">
     <br/>
         <div className="div2">
             <h1 id="h1">ToDoList</h1>
         </div>
      <div className="div3">
      <br/>
      <input id="text" type="text" onChange={newTask}placeholder="Add a task"  value={currentTask}></input>
      <button type="button" onClick={existingTasks}><AddIcon/></button>
      
      <ol>
      {
        taskArray.map((preValue, index) =>
        {
            return (<div className="div4">
              
              <ToDoList
              key={index}
              id={index}
              text={preValue}
              onSelect={deleteTask}
              />
              </div>
            )
        })
      }
      </ol>
      </div>
    </div> 

  );
}
export default App;
