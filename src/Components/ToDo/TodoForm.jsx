import styles from './TodoForm.module.scss';
import {Button} from '../Common/Button/Button';
import { useState } from 'react';

/*
  props = {
    textSubmit : string
  }
*/

/*
CC1 - Form Handle
  - ใช้ function ไปผูกกับ event ชื่อ onSubmit
  - function จะถูก browser เรียนกใช้ เมื่อไหร่ ? โดยส่ง parameter มา 1 ตัว (event object)
  - โดย default ทุกปุ่ม ใน <form> จะทำหน้าที่ submit (ถ้าไม่ทำทุกปุ่มจะถือว่าเป็น submit หมด)
        - วิธีแก้ ต้องกำหนด type ของ ปุ่ม
            - type="submit" <button type="button">1</button>
            - type = "button" <button type="submit">2</button>
  */

/*
  props = {
    textSubmit : string,
    setIsOpenForm : function
  }   
            
*/

function TodoForm(props) {
  
  const [isError , setIsError] = useState(false);

  const handleSubmit= function(event){
    event.preventDefault();
    console.log('Submited');
  }

  const handleCancel = function(){
    console.log('cancel');
    // correctName : setIsOpenForm(false)
    // incorrectName : undefined (false) => ระบเิดแดง แน่นวล
    props.setIsOpenForm(false);

  }

  return (
    <form
     className={styles.todo__form__container}
     onSubmit={handleSubmit}
     >
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

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
