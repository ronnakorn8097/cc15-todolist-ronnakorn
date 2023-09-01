import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './ToDoLists.module.scss';


function TodoLists(props) {

  return (
    <ul className={styles.todo__lists}>
      {props.data.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          id={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
        />
      ))}
    </ul>
  );


}

export default TodoLists;