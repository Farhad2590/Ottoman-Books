import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";


const Layouts = () => {
    return (
        <div className="mx-auto w-[90%]">
            <div>
                <Nav></Nav>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layouts;