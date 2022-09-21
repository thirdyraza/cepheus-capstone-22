import { Outlet } from "react-router-dom";

const Backbone = () => {
    return (
        <main className="backbone-app">
            <Outlet />
        </main>
    );
}
 
export default Backbone;