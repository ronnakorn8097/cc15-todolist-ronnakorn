// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from  '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { Button } from '../components/Common/Button/Button';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import dayjs  from 'dayjs';

const data = [
  { id: nanoid(), task: 'Suspendisse potenti.', status: false, due_date: '2023-04-26' },
  {
    id: nanoid(),
    task: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    status: false,
    due_date: '2023-05-08',
  },
  {
    id: nanoid(),
    task: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    status: false,
    due_date: '2023-04-30',
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(data);

  // add
  const addTodo = function (taskName)
  {
    const newTodo = {
      id:nanoid(),
      task:taskName,
      status : false,
      due_date : dayjs().format('YYYY-MM-DD'),
    };
    setAllTodos((p)=> [newTodo,...p]);
    // console.log(newTodo.id);
  }

  // Delete
  const deleteTodo = function (todoId)
  {

    // check ว่า id นั้นอยู่ ตำแหน่งไหนของ array
    // console.log(todoId); // ได้ ID จาก Array มาแล้ว ส่ง nonioId มา ได้ละ
    // วิธีที่ทำ
    const deleteTodo = allTodos.filter((obj)=> todoId != obj.id)
    setAllTodos(deleteTodo);
    console.log('delete ID', todoId);

    // Practice # 1
    // let foundIndex = allTodos.findIndex((todo)=>todo.id === todoId);
    // if(foundIndex !== -1)
    // {
    //   const newToolLists = [...allTodos];
    //   setAllTodos(newToolLists);
    // }

    // Practice # 2
    // setAllTodos((prev)=> prev.filter((todo)=> todo.id !== todoId));
  }

  // edit
  const editTodo = function (todoId,newTodoObj)
  {
      // Practice 1
      // let foundTodo = allTodos.find(todo=>todo.id === todoId) // find เมื่อไม่เจอของ จะออกเป็น undefined
      // console.log(foundTodo);
      // if(!foundTodo) return;
      // const newTodo = Object.assign({},foundTodo,newTodoObj);

      // let foundedIndex = allTodos.findIndex((todo)=>todo.id===todoId)
      // if(foundedIndex === -1) return;

      // const newTodoLists = [...allTodos];
      // newTodoLists.splice(foundedIndex,1,newTodo);
      // setAllTodos(newTodoLists);

      // Practice 2
      // const newTodoLists = allTodos.map(function(todo)
      // {
      //   if(todo.id !== todoId)
      //   {
      //     return todo;
      //   }
      //   else {
      //     return {...todo,...newTodoObj};
      //   }
      //   setAllTodos(newTodoLists);
      // })

      // Practice 3 
      const newTodoLists = allTodos.reduce((acc,todo)=>
      {
        if(todo.id !== todoId) acc.push(todo);
        else acc.push({...todo,...newTodoObj});
        return acc;
      },[]);
      setAllTodos(newTodoLists);
  }

  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate data={allTodos} 
          addTodo={addTodo}/>
          <TodoLists data={allTodos} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
