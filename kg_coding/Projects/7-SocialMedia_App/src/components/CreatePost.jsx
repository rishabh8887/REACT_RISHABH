const CreatePost = () => {
  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder=" Your UserID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today ?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it !"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to your post "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="pls entre your tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </form>
    </>
  );
};
export default CreatePost;
