import { Link } from "react-scroll";
import { navigation } from "@/constants";

/**
 * Navigation component for rendering navigation links.
 * @module components/Navigation
 * @param {Object} props - The props object.
 * @param {string} props.containerclasses - CSS classes for the container div.
 * @param {string} props.linkClasses - CSS classes for the navigation links.
 * @returns {JSX.Element} JSX element representing the navigation component.
 */
export default function Navigation(props) {
  return (
    <div className={props.containerclasses}>
      {navigation.map((item) => (
        <Link
          className={props.linkClasses}
          activeClass="active"
          to={item.to}
          spy={true}
          smooth={true}
          duration={400}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
