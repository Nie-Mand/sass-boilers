import { NavLink } from "@remix-run/react";

interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return (
    <menu className="text-sm font-normal contained border-b flex">
      {children}
    </menu>
  );
}

Menu.Item = Item;

interface MenuItemProps {
  to: string;
  children: React.ReactNode;
}
function Item({ to, children }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-4 border-b relative top-px duration-200 ${
          isActive ? "font-semibold border-blue-400" : "hover:border-gray-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
