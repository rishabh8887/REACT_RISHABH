import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {};

  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserID
          </label>
          <input
            type="text"
            name="userId"
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
            name="postTitle"
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
            name="postBody"
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
            name="reactions"
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
            name="tags"
            className="form-control"
            id="tags"
            placeholder="pls entre your tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default CreatePost;
