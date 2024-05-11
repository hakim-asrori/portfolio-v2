import { Link } from "react-router-dom";

function HeaderComponent() {
  const toggleMenu = () => {
    $(".toggle_menu").toggleClass('active')
    $(".mobile_menu").toggleClass('active')
  }

  const darkBtn = () => {
    $("body").toggleClass("dark-theme")
  }

  return (
    <div className="app-header-area mb-30">
      <div className="container">
        <div className="app-header-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="app-header-logo">
                <Link to={"#"} className="site-logo fs-3 fw-semibold">
                  Hakim Asrori
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="app-header-menu-btn text-right">
                <div className="dark-btn dark-btn-store dark-btn-icon" onClick={darkBtn}>
                  <i className="fa-solid fa-moon"></i>
                  <i className="fa-regular fa-sun"></i>
                </div>
                <div className="menu-btn toggle_menu" onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-wrap">
          <div className="mobile-menu mobile_menu"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;