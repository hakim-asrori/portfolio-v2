import { FooterComponent, HeaderComponent, MenusComponent, PreloaderComponent, ProfileComponent } from "../components"

function HomeView() {
  return (
    <div className="page-wrapper home-1">
      <PreloaderComponent />
      <HeaderComponent />
      <div className="container z-index-3">
        <div className="row">
          <ProfileComponent />
          <div className="col-xxl-8 col-xl-9">
            <div className="app-page-content-wrap shadow-sm">
              <div className="section-wrapper pl-60 pr-60 pt-60">
                <div className="app-page-title-wrap mb-35">
                  <h2 className="page-title">About</h2>
                  <p>I'm full-stack web developer with expertise in both frontend and backend development.</p>
                  <p>Experience in working with popular web development frameworks such as React, React Native, Vue Js, Nest Js, Laravel, and CodeIgniter.</p>
                </div>
              </div>

              <div className="section-wrapper pl-60 pr-60">
                <div className="app-page-title-wrap mb-30">
                  <h3 className="section-title">What I do!</h3>
                </div>
                <div className="app-what-do-wrap mb-30">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="app-what-do-item bg-prink">
                        <div className="icon">
                          <i className="fa-solid fa-desktop"></i>
                        </div>
                        <div className="text">
                          <h4>Web Programmer</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio voluptates libero. Ipsam, repudiandae aliquid eveniet exercitationem aspernatur dolor ab.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="app-what-do-item bg-catkrill">
                        <div className="icon">
                          <i className="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <div className="text">
                          <h4>Mobile Programmer</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio voluptates libero. Ipsam, repudiandae aliquid eveniet exercitationem aspernatur dolor ab.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="app-what-do-item bg-catkrill">
                        <div className="icon">
                          <i className="fa-solid fa-code"></i>
                        </div>
                        <div className="text">
                          <h4>App Development</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio voluptates libero. Ipsam, repudiandae aliquid eveniet exercitationem aspernatur dolor ab.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="app-what-do-item bg-prink">
                        <div className="icon">
                          <i className="fa-solid fa-swatchbook"></i>
                        </div>
                        <div className="text">
                          <h4>Ui / Ux Designer</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio voluptates libero. Ipsam, repudiandae aliquid eveniet exercitationem aspernatur dolor ab.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <FooterComponent />
            </div>
          </div>
          <MenusComponent />
        </div>
      </div>
    </div>
  )
}

export default HomeView
