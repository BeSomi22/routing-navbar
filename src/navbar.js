import { Link, useResolvedPath, useMatch } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <CustomLink to="/." className="web-name">
        MyWebsite
      </CustomLink>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </div>
  );
}
export default NavBar;

function CustomLink({ to, children, ...props }) {
  // window.location.pathname = pathResolved.pathname
  const pathResolved = useResolvedPath(to);
  const isActive = useMatch({ path: pathResolved.pathname, end: true });
  return (
    <>
      <li className={isActive === to ? "active" : " "}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
}
