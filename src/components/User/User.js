import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            {id} -- {name} -- {email} <Link to={`${id}`} state={user}>get Details</Link>
        </div>
    );
};

export {
    User
}