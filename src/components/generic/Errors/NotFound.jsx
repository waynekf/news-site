import { Link } from "react-router";
import Detail from "../Detail/Detail";

const NotFound = () => {
  const url = `/articles`;

  return (
    <Detail>
      Page not found. Go back to <Link to={url}>list of articles</Link>.
    </Detail>
  );
};

export default NotFound;
