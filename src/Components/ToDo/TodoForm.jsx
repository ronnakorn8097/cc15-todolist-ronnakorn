import styles from './TodoForm.module.scss';
import {Button} from '../Common/Button/Button';

/*
  props = {
    textSubmit : string
  }
*/

function TodoForm(props) {
  
  return (
    <form className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}>Title is required</p>
        <div className={styles.todo__form__buttons}>
          <Button text="Cancel" active={false}/>
          <Button text={props.textSubmit} active={true}/>
          {/* <button>Cancel</button>
          <button>Add Task</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
