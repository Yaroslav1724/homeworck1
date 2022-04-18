import {useEffect, useState} from "react";
import {postService} from "../../service";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setposts] = useState([])

    useEffect(() => {
        postService.getAll().then(({data}) => setposts(data))
    }, [])
    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post=><Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {
    PostsPage
}