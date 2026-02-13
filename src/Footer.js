import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';



function Footer() {
  return (
    <div>
       <footer className="pt-1 bgcolor1 font">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 py-1 px-5">
              <ul className="list-unstyled">
                <li><h5 className="pt-5">DOWNLOAD OUR APP</h5></li>
                <li><img className="img2 pb-5 ms-4" src="https://digitalsahuji.com/public/assets/front-end/png/google_app.png" alt="" /></li>
                <li><h5 className="pt-4">Start a conversation</h5></li>
                <li className="px-4"><i className="bi bi-telephone-fill" /> 9841825938</li>
              </ul>
            </div>
            <div className="col-lg-2 py-5">
              <ul className="list-unstyled space">
                <h5 className="pb-3">SPECIAL</h5>
                <li>Featured Products</li>
                <li>Latest Products</li>
                <li>Best Selling Products</li>
                <li>Top Rated Products</li>
                <li className="pb-4">Register As A Student</li>
                <li className="pt-5"><i className="bi bi-envelope-fill" /> Eshop91@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-3 py-5">
              <ul className="list-unstyled space">
                <h5 className="pb-3">ACCOUNT &amp; SHIPPING INFO</h5>
                <li>Profile Info</li>
                <li>Wish List</li>
                <li>Track Order</li>
                <li>Refund Policy</li>
                <li>Return Policy</li>
                <li className="pb-2">Cancellation Policy</li>
                <hr />
                <li><i className="bi bi-person" /> Support Ticket</li>
              </ul>
            </div>
            <div className="col-lg-4 py-5 px-5">
              <ul className="list-unstyled">
                <h5 className="pb-3">NEWS LETTER</h5>
                <li className="pb-2">Subscribe to our new channel to get latest updates</li>
                <li className="pb">
                  <form className="d-flex" role="search">
                    <input className="form-control me-3 p-3" type="search" placeholder="Your email Address" aria-label="search" />
                    <button className="btn btn-primary n" type="submit">Subscribe </button>
                  </form>
                </li>
                <hr />
                <li><h5>Address</h5></li>
                <li><i className="bi bi-geo-alt-fill" /> Chabahil, Kathmandu, Nepal</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-4 bg1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 ps-5">
                <h6>CopyRight E-shop@ 2024</h6>
              </div>
              <div className="col-lg-3 px-2 gp d-flex">
                <div><button className="sm"><a href="https://www.linkedin.com/" alt=""><i className="bi bi-linkedin ln" /></a></button></div>
                <div><button className="sm"><a href="https://www.pinterest.com/" alt=""><i className="bi bi-instagram ig" /></a></button></div>
                <div><button className="sm"><a href="https://www.facebook.com/" alt=""><i className="bi bi-facebook fb" /></a></button></div>
              </div>
              <div className="col-lg-3 ps-5 d-flex px-3 gp2">
                <h6>Terms &amp; Conditions</h6>
                <h6>Privacy Policy</h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
