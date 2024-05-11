import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { FooterComponent, HeaderComponent, MenusComponent, PreloaderComponent, ProfileComponent } from "../components"

function ContactView() {
  const [validated, setValidated] = useState(false);
  const [done, setDone] = useState(false)

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    emailjs.sendForm('service_zyjvhe1', 'template_y5rjn4g', form, 'TZUByHQUJ3UYClSN9')
    .then(() => {
      setDone(true)
      setValidated(false);
        form.reset()
      }, () => {
      });
  };

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
                  <h2 className="page-title">Contact</h2>
                </div>
              </div>

              <div className="section-wrapper pl-60 pr-60 mb-60">
                <div className="contact-area bg-light-white-2">
                  <h5 className="contact-title">I'm always open to discussing product</h5>
                  <h5 className="contact-title-b">design work or partnerships.</h5>
                  {done && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      Thanks for contacting me!
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  )}
                  <form action="" method="post" className={`contact-form ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                    <div className="form-input-item mb-20">
                      <label htmlFor="name" className="input-label-name">Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" required id="name" name="name" autoFocus />
                    </div>
                    <div className="form-input-item mb-20">
                      <label htmlFor="email" className="input-label-name">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" required id="email" name="email" />
                    </div>
                    <div className="form-input-item mb-20">
                      <label htmlFor="email" className="input-label-name">Message <span className="text-danger">*</span></label>
                      <textarea name="message" id="message" className="form-control" required></textarea>
                    </div>
                    <div className="form-btn-wrap">
                      <button type="submit" className="btn btn-outline-secondary"><i className="me-2 fa-solid fa-paper-plane"></i> Submit</button>
                    </div>
                  </form>
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

export default ContactView
