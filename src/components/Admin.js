import { Link } from "react-router-dom";

const Admin = () => {
    <div>
        <h1>Administrator's Page</h1>
        <br/>
        <p>You must have an admin role to be here.</p>
        <div>
            <Link to="/">Home</Link>
        </div>
    </div>
}

export default Admin;
