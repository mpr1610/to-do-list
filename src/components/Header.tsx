import styles from './Header.module.css';
import logo from  '../assets/logo.png';
import { AiOutlinePlusCircle} from 'react-icons/ai';
import { ChangeEvent, FormEvent, useState } from 'react';


interface Props{
    onAddTask:(taskTitle: string) => void;
}

export function Header({onAddTask}: Props){

    const [title, setTitle]= useState("");


    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }


    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
        
    }


    //Proibido quando a tarefa estiver vazia
    //const isNewTaskEmpty = newCommentText.length == 0;

    return(
        <header className={styles.header}>
            <img src={logo} alt="ToDoList"/> 
            
            
                <form className={styles.registerTask} onSubmit={handleSubmit}>
                    <input placeholder="Adicione uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}/>
                    <button title='Cadastrar nova tarefa'>
                        Criar
                        <AiOutlinePlusCircle size={20}/>
                    </button>
                </form>
            
            
        </header>
    )
}