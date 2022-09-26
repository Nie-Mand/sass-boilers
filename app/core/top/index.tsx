import Menu from "./Menu";
import Nav from "./Nav";

export function Top() {
  return (
    <div>
      <Nav />

      <Menu>
        <Menu.Item to="/">Overview</Menu.Item>
        <Menu.Item to="/settings">Settings</Menu.Item>
      </Menu>
    </div>
  );
}
