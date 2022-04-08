const Comment = ({comment}) => {
    const {postId, id, name, body, email} = comment;
    return (
        <div>
            {postId} -- {id} -- {name} -- {email} -- {body}
        </div>
    );
};

export default Comment;