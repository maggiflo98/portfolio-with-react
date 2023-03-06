
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import './App.css';
import navBar from './Navbar';
import{useState} from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    setMode(mode==="light"?"dark":"light")
  };
  return (
    <div className={`App ${mode}`}>
      <div className='nav_bar'>
        <h1>developed by florence</h1>
        <ul>
          <li>Resume</li>
          <button onClick={toggleMode}><BsFillMoonStarsFill size={20} color="black" /></button>
        </ul>
        
        
        </div>  
        {/* navbar */}
        <header>
          <h2>Florence Atieno</h2>
          <h3>Software Developer</h3>
           <p>lorem ipsum </p>

           <div className='icons'>
                  <AiFillGithub/>
                  <AiFillFacebook/>
                  <AiFillLinkedin/>
               </div>
      
        </header>
        {/* header */}
        <section>

        </section>
    </div>
  );
}

export default App;
