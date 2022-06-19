import "./NavBarItems.css";

const NavBarItems = (props) => {
  return (
    <div>
      <li>
        <a href="#!">{props.title}</a>
      </li>
    </div>
  );
};

export default NavBarItems;
