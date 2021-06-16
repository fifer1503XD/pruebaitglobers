
import validator from "validator";
//funcion de validacion del formulario
 const IsFormValid = (name, email, celular, edad) => {
  if (name.trim().length === 0) {
    return ("Name is required");
  }

  else if (name.trim().length < 5) {
    return ('Name is not complete');
  }
  else if (email.trim().length ===0) {
    return ('Email is required');
  }
  
  else if (!validator.isEmail(email)) {
    return ("Email is not valid");
  }
  else if (celular.trim().length < 7 || celular.trim().length >13) {
    return ('its no Phone Number');
  }
  else if (!validator.isNumeric(edad)) {
    return ("Age is not valid");
  }
  else if (!validator.isNumeric(celular)) {
    return ("Celular is not valid");
  } else{
  DataUser(name, email, celular, edad)
    return('ok')
 }
  }
  
 

 export const DataUser =(name, email, celular, edad)=>{
  const data=[]
  data.push(validator.blacklist(name, '/\\[\\]!<>_?@{}#$%&"1234567890'),
  validator.blacklist(email, '/\\[\\]!<>_?{} # $ % &"'),
  validator.blacklist(celular, '/\\[\\]!<>_?@{} # $ % &"'),
  edad)
  console.log(data)
    
 }
 
  export default IsFormValid