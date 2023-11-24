import { Outlet } from "react-router-dom";
import Haeder from "../Haeder/Haeder";

const Root = () => {
    return (
        <div>
            <Haeder></Haeder>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;