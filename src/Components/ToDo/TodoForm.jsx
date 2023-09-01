import styles from './TodoForm.module.scss';
import {Button} from '../Common/Button/Button';
import { nanoid } from 'nanoid';
import { useState } from 'react';


function TodoForm(props) {
  
  const [isError , setIsError] = useState(false);
  const [taskInput,setTaskInput] = useState(props.oldTodo?.task || '');

  
  const handleChangeInput =function (event) {

    if(isError) setIsError(false);
    setTaskInput(event.target.value);
  }

  const handleSubmit= function(event){
   
    event.preventDefault();

    if(taskInput.trim()=='')
    {
      setIsError(true);
      return;
    }
   if(props.addTodo) props.addTodo(taskInput); // ถ้ามี
    else if(props.editTodo && props.oldTodo)
    {
      props.editTodo(props.oldTodo.id,{task:taskInput});
    }
    props.setIsOpenForm(false);
  }

  const handleCancel = function(){
    console.log('cancel');
   
    props.setIsOpenForm(false);
    
  }

  return (
    <form
     className={styles.todo__form__container}
     onSubmit={handleSubmit}
     >
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' value={taskInput} onChange={handleChangeInput}/>

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
       {isError ? <p className={styles.todo__error}>Title is required</p>: null}
        <div className={styles.todo__form__buttons}>

          <Button text="Cancel" active={false} type="button" onClick={handleCancel}/>
          <Button text={props.textSubmit} active={true} type="submmit"/>

         
     
          {/* <button>Cancel</button>
          <button>Add Task</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
