import "./App.scss";
// import { FaHome} from "react-icons/fa";
// import { CiHome } from "react-icons/ci";
import Header from "../Components/Header";
// import "./Sidebar.scss";

import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
    
        <ul className="todo__sidebar__lists">
          <li className="todo__sidebar__inbox">
            <a href="#" target="_blank" >
              <span >
                <FaInbox />
              </span>
              Inbox
            </a>
          </li>
          <li className="todo__sidebar__calendar">
            <a href="#" target="_blank" >
              <span >
                <FaCalendar/>
              </span>
              Today
            </a>
          </li>
          <li className="todo__sidebar__calendarAlt">
            <a href="#" target="_blank" >
              <span>
                <FaCalendarAlt />
              </span>
              Next 7 days
            </a>
          </li>

          {/* //////////////////////////// */}
          <li className="todo__sidebar__project">
              <span>
                <FaChevronDown />
              </span>
              Project           
          </li>
          <li className="todo__sidebar__work">
            <a href="#" target="_blank" >
            <span >
                <FaInbox />
              </span>
              Work
            </a>
          </li>
          <li className="todo__sidebar__home">
            <a href="#" target="_blank" >
            <span >
                <FaInbox />
              </span>
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="todo__content">TodoContent</div>
      //content
    </div>
  );
}

export default App;
