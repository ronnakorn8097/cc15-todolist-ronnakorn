import "./Header.scss";
import { FaHome } from "react-icons/fa";
import Search from "../Components/Search"; // import search สามารถตั้งชื่ออะไรก็ได้ แต่ใน tag jsx ต้องตั้งตาม แต่จะทำให้ ลำบากทำไมหวะ


function Header() {
  return (
    <header className="header">

      <div className="header__logo">
        <FaHome />
      </div>

      <div className="header__text">
        <h1>TodoList</h1>
      </div>

      <div className="header__search">
        <Search/>
      </div>

    </header>
  );
}

export default Header;
