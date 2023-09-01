import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import styles from './TodoCreate.module.scss';
import TodoForm from './TodoForm';



function TodoCreate(props) {
const [isOpenForm,setIsOpenForm] = useState(false);


 
  const handleClick = function(){
   
     setIsOpenForm(!isOpenForm);
   
  };


  return (

    <>
    { isOpenForm ? ( <TodoForm textSubmit="Add Task" 
    setIsOpenForm={setIsOpenForm} 
    data={props.data}
    // setTodo={props.setTodo}
    addTodo = {props.addTodo}
    />
    ) : <div className={styles.todo__create} onClick={handleClick}>
    <div className={styles.todo__create__button}>
      <HiPlus />
    </div>
    <h3 className={styles.todo__create__text}>Add Task</h3>
  </div> }
    </>
  );
}

export default TodoCreate;
