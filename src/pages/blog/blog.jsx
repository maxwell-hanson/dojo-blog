import { useState } from "react";
import BlogList from "../../BlogList";

const Blog = () => {
  const title = "welcome to my blog";
  const link1 = "https://weather.com/";

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Yes hello", author: "Mario", id: 1 },
    { title: "Welcome!", body: "Hi", author: "Yoshi", id: 2 },
    { title: "Web dev tips", body: "I'm awesome", author: "Wario", id: 3 },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="blogs">
      <h1>{title}</h1>

      <p>{Math.random() * 100}</p>
      <a href={link1}> Weather</a>

      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />

      {/* Stuff for MARIO'S BLOG (bottom of page) */}
      <div id="sortedBlogs">
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Mario")}
          title="Mario's Blogs"
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Blog;
