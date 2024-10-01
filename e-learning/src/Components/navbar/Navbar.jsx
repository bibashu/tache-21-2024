import { Bell, Envelope, Search } from 'react-bootstrap-icons';
import s from './style.module.css'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  
  const Navigate = useNavigate();
  return (
    <div className={`${s.nav} bg-danger position-fixed w-100 d-flex justify-content-around p-3 `} style={{ top: 0 }}>
      <div>
        <form action="">
          <input type="text" />
          <Search />
        </form>
      </div>
      <div>
        <Bell />
        <Envelope />
      </div>
    </div>
  );
};

export default Navbar;