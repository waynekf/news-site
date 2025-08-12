import { Link } from "react-router";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/home">Home</Link>|<Link to="/articles">Articles</Link>|
      <Link to="/comments">Comments</Link>|<Link to="/topics">Topics</Link>|
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
