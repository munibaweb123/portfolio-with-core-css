import Link from "next/link";
import "../style/nav.css"
import { FaHome } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaCode} from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';


export default function Navbar(){
    return(


          <nav className="navbar">
          <ul className="nav-list">
              <li ><Link className="link" href="/"><div className="page-icon"><FaHome size={40} color="gold"/></div>About</Link></li>
              <li ><Link className="link" href="/education"><div className="page-icon"><FaGraduationCap size={40} color="gold"/></div>Education</Link></li>
              <li ><Link className="link" href="/project"><div className="page-icon"><FaCode size={40} color="gold"/></div>My Projects</Link></li>
              <li ><Link className="link" href="/contact"><div className="page-icon"><FaAddressBook size={40} color="gold"/></div>Contact me</Link></li>


          </ul>
      </nav>
    )
}