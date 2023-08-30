// Dependencies
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaCalendarAlt,FaChevronDown } from 'react-icons/fa';
import Header from '../Components/Header';
import ListItem from '../Components/ListItem';
import Lists from '../Components/Lists';
import TodoHeader from '../Components/ToDo/ToDoHeader';
import ToDoCreate from '../Components/ToDo/ToDoCreate';

function App() {

  const generalLists = [
    {id:1,text:"Inbox",icon: <FaInbox/>,active:true},
    {id:2,text:"Today",icon: <FaCalendar/>,active:false},
    {id:3,text:"Next 7 Days",icon: <FaCalendarAlt/>,active:false},
  ];

  const projectLists = [
    {id:4,text:"Project-A",icon:<FaInbox/>, active:true},
    {id:5,text:"Project-B",icon:<FaInbox/>, active:false},
    
  ];

  // ObjectDetail => <
    return (
        <div className='todo'>
            <div className='todo__header'>
                <Header />
            </div>
            <div className='todo__sidebar'>
                <aside className='sidebar'>
                    <section className='sidebar__category'>

                        <Lists data={generalLists}/>
                     

                    </section>
                    <section className='sidebar__category'>
                    <div className='accordion'>
                      {/* Toggle */}

                        <div className='accordion__toggle'>
                          <li className='accordion__item'>
                            <FaChevronDown className='accordion__item__icon accordion__item__active'/>
                            <p className='list__item__text'>Projects</p>
                          </li>
                        </div>

                            <Lists data={projectLists}/>
                   
                    </div>

                    </section>
                </aside>
            </div>
            <div className='todo__content'>
              <main className='todo__container'>
                {/* Header */}
                <TodoHeader/>
                {/* CreateToDo */}
                <ToDoCreate/>
                {/* ToDoLists */}

              </main>
            </div>
        </div>
    );
}

export default App;

// Challenge : Refactor
/*
 - ให้ 2 section render UI ที่ . . .
    - Option A ความยาก (2/5): render ต่างกัน <Lists/>  กับ <Accordion/>
    - Option B ควมายาก(4/5): render UI เดียวกัน เช่น <List/>
    - Option C ความยาก (5/5) : render <List/> ภายใต้ <Accordion> <List/> <Accordion/>
*/


// เขียนไว้ในบรรทัดที่ 72  เขียนย่อ
{/* <Lists data={projectLists}/> */}

// เขียนเต็ม
     {/* Lists */}
                    {/* <ul className="list"> */}
                      {/* <ListItem text="Project-A" icon={<FaInbox />} active={true} />
                      <ListItem text="Project-B" icon={<FaInbox />} active={false} /> */}

                      {/* {projectLists.map((obj)=>(
                        <ListItem key={obj.id} {...obj}/>
                      ))}
                    </ul> */}


// เขียนไว้ใน บรรทัดที่ 32 แบบย่อ
                    // <Lists data={generalLists}/>

// แบบเต็ม
                    {/* <ul className='list'>
                   
                   {generalLists.map((obj)=>(<ListItem 
                   key={obj.id}
                   text={obj.text} 
                   icon={obj.icon} 
                   active={obj.active}
                   />))} */}
                        {/* <ListItem
                            text='Inbox'
                            icon={<FaInbox/>}
                            active={true}
                        />
                      
                        <ListItem
                            text='Today'
                            icon={<FaCalendar/>}
                            active={false}
                        />
                       
                        <ListItem
                            text='Next 7 Days'
                            icon={<FaCalendarAlt/>}
                            active={false}
                        /> */}
                    {/* </ul> */}