import { Link } from "react-router-dom";
import ImagePortofolio from "../assets/images/my.jpeg"
import FileCv from "../assets/files/cv_hakim_asrori.pdf"

function ProfileComponent() {
  return (
    <div className="col-xxl-3 col-xl-3">
      <div className="app-personal-info-area shadow-sm">
        <div className="app-personal-info-wrap">
          <div className="app-personal-info-img shadow border">
            <img src={ImagePortofolio} />
          </div>

          <h4 className="app-personal-info-name">
            <Link to={'#'}>Hakim Asrori</Link>
          </h4>

          <span className="app-personal-info-bio mb-15">Web Programmer / Mobile Programmer</span>

          <ul className="app-personal-info-social-link mb-30">
            <li>
              <a target="_blank" href="https://fb.com/hakim.asrori.79" className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/hak2410" className="twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com/asrorihakim" className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com/in/hakim-asrori-2b42aa217" className="linkedin">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>

          <div className="app-personal-info-contact mb-30">
            <div className="app-personal-info-contact-item phone">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div className="text">
                <span>Phone</span>
                <a href="https://api.whatsapp.com/send?phone=6283862169726" target="_blank"><p>+62 83 862169726</p></a>
              </div>
            </div>
            <div className="app-personal-info-contact-item email">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <span>Email</span>
                <a href="mailto:hakimasrori24@gmail.com" target="_blank"><p>hakimasrori24@gmail.com</p></a>
              </div>
            </div>
            <div className="app-personal-info-contact-item location">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <span>Location</span>
                <p>Indramayu, Indonesian</p>
              </div>
            </div>
            <div className="app-personal-info-contact-item calendar">
              <div className="icon">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div className="text">
                <span>Birthday</span>
                <p>Oct 24, 2001</p>
              </div>
            </div>
          </div>

          <div className="app-personal-info-btn">
              <Link className="btn btn-outline-primary" to={"#"} data-bs-toggle="modal" data-bs-target="#loadCvModal">
                  <span className="icon">
                      <i className="fa-solid fa-eye me-2"></i>
                  </span>
                  View CV
              </Link>
          </div>
        </div>
      </div>

      <div className="modal h1-modal-box fade" id="loadCvModal" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal">
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>

                    <div className="modal-body">
                      <iframe src={FileCv} width={"100%"} height={"100%"} frameBorder={'100%'}></iframe>
                    </div>

                    <div className="modal-footer d-flex justify-content-center">
                      <a href={FileCv} target="_blank" className="btn btn-outline-primary"><i className="fa-solid fa-download me-2"></i> Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileComponent;