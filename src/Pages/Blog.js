import BlogData from "../Components/blogData";
import AboutBlogData from "../Components/AboutBlogData";

const Blog = () => {
  return (
    <section className="blog">
      {BlogData.map((item) => (
        <AboutBlogData id={item.id} image={item.img_url} title={item.title} />
      ))}
    </section>
  );
};

export default Blog;
