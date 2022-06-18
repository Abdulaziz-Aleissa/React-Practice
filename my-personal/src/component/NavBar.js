import "./NavBar.css";
import NavBarItems from "./NavBarItems";
const NavBar = () => {
  const NavBarItemComponents = [
    { title: "Home" },
    { title: "About Me" },
    { title: "Contact" },
    { title: "Socials" },
  ];
  return (
    <div>
      <ul class="menu">
        <NavBarItems title={NavBarItemComponents[0].title}></NavBarItems>
        <NavBarItems title={NavBarItemComponents[1].title}></NavBarItems>
        <NavBarItems title={NavBarItemComponents[2].title}></NavBarItems>
        <NavBarItems title={NavBarItemComponents[3].title}></NavBarItems>
      </ul>
    </div>
  );
};

export default NavBar;
