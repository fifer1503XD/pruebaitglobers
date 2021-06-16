import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ContextApp } from '../hooks/ContextApp';
import dataAerolinea from '../data/dataAerolineas';
const Menu = () => {
  const [visible, setvisible] = useState(true);
  const [color] = useState('header');
  const { Aerolinea,setAerolinea} = useContext(ContextApp);
  // funcion para mostrar el menu vertical
  const handleClick =()=>{
    setvisible(!visible)
  }
  // funcion para esconder el menu vertical luego de escoger aerolinea
  const hideMenu =(name)=>{
    handleClick()
    setAerolinea(name)

  }
  useEffect(() => {
    
  }, [color]);
    return (
        <div>
            <header className={Aerolinea ? Aerolinea : 'header'} >
      <nav className="nav">
        <span className="logo nav-link">FIFERAIR</span>
        <button className="nav-toggle">
        <FontAwesomeIcon icon={faBars} onClick={handleClick}/>
        </button>
        <ul className={visible ? 'nav-menu': 'nav-menu nav-menu_visible'}>
          
            {
              dataAerolinea.map((aerolinea)=>{
                const {id, name}=aerolinea
                return(
                  <li key ={id} className="nav-menu-item">
                  <span onClick={visible ? 
                  ()=>setAerolinea(name): 
                  ()=>{hideMenu(name)
                    
                  }}className="nav-menu-link nav-link">{name}</span>
                  </li>
                )
              })
            }
        </ul>
      </nav>
    </header>
        </div>
      );
}
 
export default Menu;