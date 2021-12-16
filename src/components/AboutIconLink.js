import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion fize={30} />
      </Link>
    </div>
  );
}
