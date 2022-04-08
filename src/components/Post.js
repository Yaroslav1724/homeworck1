const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            {userId} -- {id} -- {title} -- {body}
        </div>
    );
};

export default Post;