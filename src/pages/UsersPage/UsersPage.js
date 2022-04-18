import {useEffect, useState} from "react";
import {userService} from "../../service";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setusers(data))
    },[])
    return (
        <div style={{display:"flex"}}>
            <div>{users.map(user=><User key={user.id}user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {
    UsersPage
}