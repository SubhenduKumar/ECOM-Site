import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="assets/msg.jpg" alt="msg" width="600px" />
          </div>
          <div className="col-md-6 m-3 d-flex justify-content-center">
            <form>
              <div className="form-group m-2">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="form-group m-2">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group m-2">
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <a href="https://www.instagram.com/_zinga_">
            <img src="https://img.icons8.com/office/40/000000/instagram-new.png" />
          </a>
          <a href="https://www.facebook.com/sahoosubhendu.kumar/">
            <img src="https://img.icons8.com/office/40/000000/facebook-new.png" />
          </a>
          <a href="https://wa.me/919938382204">
            <img src="https://img.icons8.com/office/40/000000/whatsapp--v2.png" />
          </a>
          <a href="https://github.com/SubhenduKumar">
            <img src="https://img.icons8.com/color/40/000000/github--v3.png" />
          </a>
          <a href="mailto:bhsubhendukumar66@gmail.com">
            <img src="https://img.icons8.com/color/40/000000/gmail-login.png" />
          </a>
          <a href="">
            <img src="https://img.icons8.com/stickers/30/000000/twitter.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
