import FormUser from "../components/FormUser";
import Menu from "../components/Menu";

const ContainerApp = () => {
    return ( 
        <>
        <div className ="container">
              <Menu/>
              </div>
        <div>
        <FormUser/>
        </div>
        </>
      
     );
}
 
export default ContainerApp;