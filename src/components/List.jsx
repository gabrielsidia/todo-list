import { Notebook, NumberCircleZero, PlusCircle } from 'phosphor-react'
import styles from './List.module.css'
import React, { useState } from 'react'
import Task from './Task'

const Form = () => {
  const [tasks, setTasks] = useState([
    'Estudar Inglês de manhã por 2 horas'
  ])
  const[newTasks, setNewTasks] = useState('');

  function handleCreateTask(e) {
    e.preventDefault('');

    const taskDone = e.target.task.value

    setTasks([...tasks, newTasks]);
    setNewTasks('');
    e.target.task.value=''
  }
  function handleNewTasksChange(e) {
    setNewTasks(e.target.value)
  }

  function handleInsertEmptyTask(e) {
    e.target.setCustomValidity('Campo obrigatório!')
  }

  function deleteTask(taskToDelete) {
    const taskToDeletedOne = tasks.filter (task => {
      return task !== taskToDelete
    })
    setTasks(taskToDeletedOne)
  }

  return (
    <div>
      <form onSubmit={handleCreateTask} className={styles.forms}>
        <input 
            className={styles.inputForm} 
            name='task'
            placeholder='Adicione uma nova tarefa'
            required
            onChange={handleNewTasksChange}
        />
        <button disabled={handleInsertEmptyTask} className={styles.button}>Criar<PlusCircle size={18}/></button>
      </form>
        <article className={styles.tasks}>
            <div className={styles.taskToDo}> {/**<NumberCircleZero className={styles.icon} size={20}/> */}
              <h3>Tarefas Criadas <span>{tasks.length}</span> </h3>
              {/* <h3>Concluídas <NumberCircleZero className={styles.icon} size={20}/></h3> */}
            </div>
            <hr className={styles.horizontalLine} color='#333333'></hr>
            
            <div className={styles.noTasks}>
              <div className={styles.bookIcon}>
                <Notebook color='white' size={55}/>
              </div>
              <div className={styles.paragraphs}>
                <h3 className={styles.firstParagraph}>Crie seus itens e organize seus itens a fazer abaixo:</h3>
                {/* <h3 className={styles.secondParagraph}>Crie seus itens e organize seus itens a fazer</h3> */}
              </div>
            </div>
              <div className={styles.taksList}>
                {tasks.map(task => {
                  return <Task
                    key={task}
                    content={task}
                    onDeleteTask={deleteTask}
                  />
                })}
              </div>
        </article>
    </div>
  )
}

export default Form
