const Button = (props) => {
  return (
    <Link to={`/blog/${props.id}`}>
      <button className="btn">Read more</button>
    </Link>
  );
};

export default Button;
