import { BellFill, PersonFill } from 'react-bootstrap-icons'
import SearchBar from 'Components/searchBar/SearchBar'
import s from './style.module.css'

const Navbar = () => {
  return (
    <div className={`container-fluid col-9 shadow  position-absolute z-n1 d-flex gap-4 justify-content-end align-items-center ${s.nav}`}>
     
      <SearchBar  />
      <BellFill className={`${s.icon}`} />
      <PersonFill className={`${s.icon}`} />
    </div>
  )
}

export default Navbar
