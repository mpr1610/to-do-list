import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'


const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface Itask{
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
 
  const [tasks, setTasks] = useState<Itask[]>([]);

  function loadSavedTask(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
 
    if(saved){
     setTasks(JSON.parse(saved));
     }
   }

   useEffect(() => {
     loadSavedTask();
   }, [])
   
  
  function setTasksAndSave(newTasks:Itask[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks));
  }

 

  
  


  function addTask(taskTitle:string){
   
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false
      }
    ]);
  }

  function deleteTaskById(taskId:string){
    const newTasks = tasks.filter((tasks)=>tasks.id != taskId);
    setTasksAndSave(newTasks);

  }


  function toggleTaskCompletedById(taskId: string){
    const newTasks = tasks.map(task=>{
      if(task.id == taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task;
    });

    setTasksAndSave(newTasks);

    
    
  }
  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTaskById}
      onComplete={toggleTaskCompletedById}
      
      />
      
      
    </div>
  )
}

