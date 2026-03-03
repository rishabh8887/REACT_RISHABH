import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <>
      <div className="card post-card" style={{ width: "30 rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag, index) => {
            return (
              <span className="badge text-bg-primary post-tags" key={index}>
                {tag}
              </span>
            );
          })}
          <div className="alert alert-success reactions" role="alert">
            This post is reacted by {post.reaction} people
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
