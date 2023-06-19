const BlogList = ({ blogs, title, handleDelete }) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
          <button id ="delButtons" onClick={() => handleDelete(blog.id)}>Delete blog</button>
          <br></br>
          <button className="likeButtons">Like</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
