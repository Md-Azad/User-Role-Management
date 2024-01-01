import { Link } from "react-router-dom";


const PostManagement = () => {
    return (
        <div>
            <button className="btn btn-active btn-accent"><Link to="/dashboard/newpost">New Post</Link></button>
        </div>
    );
};

export default PostManagement;