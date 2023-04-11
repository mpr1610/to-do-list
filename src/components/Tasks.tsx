import React from 'react';
import styles from './Tasks.module.css';
import { Management } from './Management';
import { Itask } from '../App';
import { TbClipboardText } from 'react-icons/tb';

interface Props {
  tasks: Itask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void; // Definir a função onComplete
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span> {tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {' '}
            {completedTask} de {tasksQuantity}{' '}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Management
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete} // Passar a função onComplete
          />
        ))}


        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50}/>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e o organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
