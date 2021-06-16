import { useForm } from "../hooks/useForm";
import { useState, useEffect, useContext } from "react";
import { ContextApp } from "../hooks/ContextApp";
import IsFormValid from "../actions/validateForm";
const FormUser = () => {
  //context que almacenará la opción escogida por el usuario
  const { Aerolinea, error, seterror, setNotificacion } = useContext(ContextApp);
  //importación de funciones en use form
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    celular: "",
    edad: "30"
  });
  //funcion de mostrar la notificacion usuario aceptado
  const showNotification = () => {
    reset()
    setNotificacion(true)
    setTimeout(() => { setNotificacion(false) }, 5000);
    seterror('')

  }
  const { email, celular, name, edad } = formValues;
  //estado para manejar la edad en el input range
  const [age, setage] = useState(edad);
  useEffect(() => {
    setage(edad)
    error === "ok" && showNotification()
  }, [edad, Aerolinea, error]);

  //funcion para manejar el envío de los datos
  const handleSubmit = (event) => {
    event.preventDefault();
    seterror(IsFormValid(name, email, celular, edad))
  };

  return (
    <div className="formUser">
      <h3 className="form__title">
        {Aerolinea === "" ?
          `Hola bienvenido a FIFERAIR, selecciona una aerolinea`
          : (<div>Hola, bienvenido, sabemos que quieres viajar en <span className={`text${Aerolinea}`}>{Aerolinea}</span>, por favor diligencia el siguiente formulario:</div>)
        } </h3>
      <form onSubmit={handleSubmit}>

        <input
          type="name"
          placeholder="Escribe tu nombre completo"
          name="name"
          className="form__input"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="form__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <label className="labelAge"> Selecciona tu edad {age} años</label>
        <input
          type="range" min="18" max="100"
          name="edad"
          className="form__input"
          value={edad}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Número de telefono o celular"
          name="celular"
          className="form__input"
          value={celular}
          onChange={handleInputChange}
        />


        <button type="submit" className={`btn btn-primary btn-block ${Aerolinea}`}>
          Enviar datos
        </button>

        <div className="footer-form">
          {error !== "" && <div className="alert-error">{error}</div>}
          <p>Gracias por usar nuestros servicios</p>

        </div>
      </form>
    </div>
  );
}

export default FormUser;