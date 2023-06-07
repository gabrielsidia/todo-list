import React, { useState } from 'react'
import styles from './Task.module.css'
import { Check, Trash } from 'phosphor-react'

const Task = ({ content, onDeleteTask }) => {

  const isCompleted = true; 

const [taskComplete, setTaskComplete] = useState(true);

  function handleDelete() {
    console.log('Deletando tarefa');
    onDeleteTask(content)
  }

  function handleTaskComplete() {

  }

  return (
    <div className={styles.tasks}>
      <div className={styles.task}>
        <button className={styles.checkButton} onClick={styles.textCompleted}>
          </button> {/**Botao de check */}
        <p {...taskComplete ? styles.textCompleted : ""}>{content}</p>
        <button className={styles.deleteButton} title='Deletar tarefa' onClick={handleDelete}>
          <Trash size={24}/>
        </button>
      </div>
    </div>
  )
}

export default Task
