import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import styles from './TodoCreate.module.scss';
import TodoForm from './TodoForm';


/*
CC 1 - condition redering
 - Default : show button & text
 - Active : Show TodForm

 concept : true ? : <AddTask> : <TodoForm>
*/

/*
CC2 - Event Handling
 - เอา function มาผูกกับ UI เพื่อให้ user เป็นคนเรียกใช้งาน function นี้
 - onClick ต้อง คลิคก่อนถึง function จะรัน
    - User ทำการ คลิค
    - Browser จะเป็นคนเรียกใช้ function โดยส่ง parameter มา 1 ตัว
      handleClick(eventObject)
    
*/

/*
CC3 - JS Value ไม่สามารถทำให้ react renderได้
ต้องใช้ state เข้ามาช่วย
*/

/*
CC4-Array Destructuring
*/


/*
CC5 React State (1 ใน function ของกลุ่มที่เรียกว่า react hook)
const [state , setState] = useState(initialState : any)
// element 1 : current state
// element 2 : fn สำหรับ setState อัพเดทค่า initialState
// เมื่อ state เปลี่ยน function component จะ Rerender
// Rerender == code ทั้งหมด ใน Function จะถูกรันใหม่ 1 ครั้ง
*/

// let active = true;

// #1 function component
function TodoCreate() {
  // Hook Function
const [isOpenForm,setIsOpenForm] = useState(false);


  // #2 JS Function ทำหน้าที่พวก logic
  const handleClick = function(){
    //  console.log('Clicked');
     setIsOpenForm(!isOpenForm);
    // active = !active;
    // console.log('Click',active);
  };


  return (

    <>
    { isOpenForm ? ( <TodoForm textSubmit="Add Task" setIsOpenForm={setIsOpenForm}/>
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
