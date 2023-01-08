import BlogData from "../Components/blogData";
import "./App.css";
const Blog = () => {
  return (
    <section className="blog">
      {BlogData.map((item) => (
        <Blog id={item.id} image={item.img_url} title={item.title} />
      ))}
    </section>
  );
};

export default Blog;
