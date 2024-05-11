import { NavLink } from "react-router-dom";

function MenusComponent() {
    return (
    <div className="col-xxl-1 d-xxl-block d-none">
      <div className="app-main-menu-wrap shadow-sm">
        <nav className="app-main-menu main_menu">
          <ul>
            <li>
              <NavLink to={'/'}>
                <span>
                  <i className="fa-solid fa-address-card"></i>
                </span>
                &nbsp;&nbsp;About&nbsp;&nbsp;
              </NavLink>
            </li>
            <li>
              <NavLink to={'/resume'}>
                <span>
                  <i className="fa-solid fa-file"></i>
                </span>
                &nbsp;&nbsp;Resume&nbsp;&nbsp;
              </NavLink>
            </li>
            <li>
              <NavLink to={'/portfolio'}>
                <span>
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                &nbsp;&nbsp;Works&nbsp;&nbsp;
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>
                <span>
                  <i className="fa-solid fa-address-book"></i>
                </span>
                &nbsp;&nbsp;Contact&nbsp;&nbsp;
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenusComponent;