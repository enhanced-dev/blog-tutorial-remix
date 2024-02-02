import { NavLink } from "react-router-dom";

interface NavItemProps {
  /**
   * Relative path to the page
   */
  path: string;
  /**
   * Label
   */
  label: string;
  /**
   * Is this the end route?
   */
  end?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const NavItem = ({
  path = "/",
  label = "",
  end = false,
  onClick,
  ...props
}: NavItemProps) => {
  return (
    <NavLink
      to={`${path}`}
      end={end}
      className={(props) => {
        return `${
          props.isActive
            ? "bg-gray-900 text-white "
            : "text-gray-600 hover:text-gray-300 "
        }rounded-md px-3 py-2 text-sm font-medium`;
      }}
      {...props}
    >
      {label}
    </NavLink>
  );
};
