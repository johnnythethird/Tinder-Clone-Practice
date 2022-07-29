import "./Header.css"
import tl from "./Pictures/Logos/tinderlogo.png"

// We're going to import some icons from MUI. Very helpful!
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
      {/* Utilizing IconButton will allow us to make a cool button with just the object! */}
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header_icon" />
      </IconButton>


      <img 
        className="header_logo"
        src={tl}
        alt="Logo"
      />

      
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon"/>
      </IconButton>
    </div>
  )
}

export default Header