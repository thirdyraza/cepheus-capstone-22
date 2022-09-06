import { Outlet } from "react-router";

const Backbone = () => {
    return (
        <main className="backbone-app">
            <Outlet />
        </main>
    );
}
 
export default Backbone;