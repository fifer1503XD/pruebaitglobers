import FormUser from "../components/FormUser";
import Menu from "../components/Menu";
import { UserValidateModal } from "../modals/userValidateModal"
const ContainerApp = () => {

    return (
        <>
            <div className="containerapp">
                <Menu />
            </div>
            <div>
                <FormUser />
            </div>
            <UserValidateModal />
        </>

    );
}

export default ContainerApp;