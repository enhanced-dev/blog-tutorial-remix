import { NavItem } from "./NavItem";

export const NavDropdown = ({}) => {
  return (
    <details className="dropdown">
      <summary className="btn-ghost btn-circle btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          data-testid="navMenu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </summary>
      <ul className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow">
        <NavItem path="/" label="Home" end={true} />
        <NavItem path="/about" label="About" />
        <NavItem path="/posts" label="Posts" />
        <NavItem path="/contact" label="Contact" />
      </ul>
    </details>
  );
};
