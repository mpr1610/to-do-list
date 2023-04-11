import styles from './Management.module.css';
import { TbTrash} from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Itask } from '../App';

interface Props{
    task:Itask;
    onDelete: (tasksId:string)=> void;
    onComplete: (taskId: string)=>void;
    
    
}

export function Management({task, onDelete, onComplete} : Props){


    return(
        <div className={styles.managementTask}>
            
            <button className={styles.checkContainer}
                    onClick={()=> onComplete(task.id)}
            >
               
               {task.isCompleted ? <BsFillCheckCircleFill/> : <div />}
                
            </button>
            <p className={task.isCompleted ? styles.textCompleted : "" }> {task.title}</p>
            <button  className={styles.deleteButton} onClick={()=> onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>

    )
}

function onDeleteTask(task: Itask) {
    throw new Error('Function not implemented.');
}
