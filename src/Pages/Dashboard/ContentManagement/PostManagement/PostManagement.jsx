import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { MdOutlinePreview, MdEditNote, MdDeleteForever } from "react-icons/md";

const PostManagement = () => {
  const [posts, setPosts] = useState([]);
  const { accessPermission, userPosition } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard/post")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeletePost = (id) => {
    axios
      .delete(`http://localhost:5000/dashboard/post/${id}`)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          const filteredList = posts.filter((post) => post._id !== id);
          setPosts(filteredList);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full min-h-screen px-12 mt-4">
      <div className="flex flex-row-reverse">
        <button className="btn btn-active btn-accent">
          <Link to="/dashboard/newpost">New Post</Link>
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table ">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post._id}>
                <th>{index + 1}</th>
                <td>{post.title}</td>
                <td>{post.discription}</td>
                <td className="flex gap-2">
                  {userPosition ? (
                    <>
                      <span className="text-3xl">
                        <MdOutlinePreview />
                      </span>

                      <button className="btn btn-xs btn-warning text-2xl">
                        <Link
                          to="/dashboard/postedit"
                          state={{ from: post._id }}
                        >
                          <MdEditNote />
                        </Link>
                      </button>

                      <button
                        onClick={() => handleDeletePost(post._id)}
                        className="btn btn-xs btn-error text-2xl"
                      >
                        <MdDeleteForever />
                      </button>
                    </>
                  ) : (
                    <>
                      {accessPermission.includes("View Post") ? (
                        <td>
                          {accessPermission.includes("View Post") && (
                            <button className="btn btn-xs">
                              <MdOutlinePreview />
                            </button>
                          )}
                          {accessPermission.includes("Edit Post") && (
                            <button className="btn btn-xs">
                              <MdEditNote />
                            </button>
                          )}
                          {accessPermission.includes("Delete Post") && (
                            <button className="btn btn-xs">
                              <MdDeleteForever />
                            </button>
                          )}
                        </td>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostManagement;
