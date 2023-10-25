import { Link } from "react-router-dom";
import Users from './Users';

const Admin = () => {
    return (
        <div>
            <h1>Administrator's Page</h1>
            <br />
            <Users />
            <br />
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Admin;
