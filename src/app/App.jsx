import "./App.scss";
// import { FaHome} from "react-icons/fa";
// import { CiHome } from "react-icons/ci";
import Header from "../Components/Header";
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';


function App() {
  return (
    <div className="todo">

      <div className="todo__header">
        <Header/>
      </div>

      <div className="todo__sidebar">
     
        <aside className="sidebar">
          <section className="sidebar__category">
          <ul className="list">
              <li className="list__item">
                <FaInbox className="list__item__icon" />
                <p className="list__item__text">Inbox</p>
              </li>
              <li className="list__item">
                <FaCalendar className="list__item__icon" />
                <p className="list__item__text">Today</p>
              </li>
              <li className="list__item">
                <FaCalendarAlt className="list__item__icon" />
                <p className="list__item__text">Next 7 Days</p>
              </li>
            </ul>
          </section>
          <section className="sidebar__category">2</section>
        </aside>
      </div>
     
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
