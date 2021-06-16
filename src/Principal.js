import ContainerApp from "./container/ContainerApp";
import { useState } from "react";
import { ContextApp } from "./hooks/ContextApp";
export const Principal = () => {
    //estados del ContextApp
    // 1. Aerolina para almacenar la eleccion en el menu
    // 2. User para la informacion del menu

    const [Aerolinea, setAerolinea] = useState('');
    const [error, seterror] = useState('');
    const [Notificacion, setNotificacion] = useState();
    const [User, setUser] = useState();
    return (
      <ContextApp.Provider value={{Aerolinea, setAerolinea,User, setUser,error, seterror,Notificacion, setNotificacion}}>
        <ContainerApp />
      </ContextApp.Provider>
    );
  };