

const Post = ({post}) => {
    // console.log(post);
    return (
        <div className="my-12">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;