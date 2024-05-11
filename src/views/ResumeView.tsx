import { FooterComponent, HeaderComponent, MenusComponent, PreloaderComponent, ProfileComponent } from "../components"

function ResumeView() {
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
                  <h2 className="page-title">Resume</h2>
                  <p>Next step.</p>
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

export default ResumeView
