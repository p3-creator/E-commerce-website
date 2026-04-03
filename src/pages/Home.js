
import Form from '../Form'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import React, { useState } from 'react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Home() {
  const [item, setItem] = useState(null);
  const handleBackClick = () => { setItem(null); };
  return (
    <div>
      <section className="container pt-2 pt-md-5">
        <div className="row mb-4">
          <div className="col-12">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://cdn.buymode.shop/images/1P5ZK52HXM3MMN98Z-1731910249619.jpeg" className="w-100 d-block img-fluid banner" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src={`${process.env.PUBLIC_URL}/images/banner2.jpg`} className="w-100 banner d-block img-fluid" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="https://i.pinimg.com/1200x/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg" className="w-100 banner d-block img-fluid" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src="https://hukut.com/_next/image?url=https%3A%2F%2Fcdn.hukut.com%2Ffall-back-banner-for-website-web%2520view.png1733735526759&w=1920&q=75" className="w-100 banner d-block img-fluid" alt="..." />
                </div>


              </div>
              <button className="carousel-control-prev btn-orange" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next btn-orange" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon right" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* swipwer slider section */}
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">Brands</h4>
            </div>
            <div className="col-lg-6 text-end">
              <p className="orange">View all {'>'}</p>
            </div>
          </div>


          <div className="row my-1 mb-5 grey">
            <div className="col-lg-12 pad-y">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 2000 }}
                spaceBetween={12}
                slidesPerView={2}
                loop
                breakpoints={{
                  480: { slidesPerView: 3, spaceBetween: 15 },
                  768: { slidesPerView: 4, spaceBetween: 20 },
                  992: { slidesPerView: 5, spaceBetween: 25 },
                  1200: { slidesPerView: 6, spaceBetween: 30 },
                }}
              >
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_apple.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/logo_samsung.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_hp.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_lenovo.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/brand_ugreen.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_asus.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_huawei.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_lenovo.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_microsoft.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_vivo.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_tcl.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/brand_anker.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_logitech.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_oppo.jpg" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://m.media-amazon.com/images/G/40/Electronics/Store/kamja/L2/Electronics/Logo/brand_huawei.jpg" className="img-fluid" alt="" /></SwiperSlide>
              </Swiper>
            </div>
          </div>

        </div>
      </section>



      <section className="py-4 bg-white container shadow rounded">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="fw-bold py-4 text-center">Featured Products</h4>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pb-5">

          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img
                className="pt-3 hv pb-5 prod"
                src={`${process.env.PUBLIC_URL}/images/3mp-wifi-camera.jpg`}
                alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">3MP Wi-Fi PT Camera</span>
                <p className="text-primary fw-semibold">Rs 3,999</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href="" className="btn btn-primary btn-sm"><i className="bi bi-eye"></i> Quick view</a>
              </div>
            </div>
          </div>


          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv pt-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/2mp-wifi-camera.jfif`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">Imou Cue 2 Indoor....</span>
                <p className="text-primary fw-semibold">Rs 4,975</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv pt-3 pb-5 prod" src="https://hardwarepasal.com/src/img/product/2025-06-03-16-41-29_rN8OnYnfuwproduct.jpg" alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">10,000mah Portable...</span>
                <p className="text-primary fw-semibold">Rs 1,799</p>
                <p className="orange"><i className='orange'>⭐⭐⭐</i> <i className="bi bi-star"></i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>

          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv pt-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/acer-aspire-14.jpg`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className=" fw-semibold">Acer Lite 14 | Core i3...</span>
                <p className="text-primary fw-semibold">Rs 47,999</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐⭐</i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv pt-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/wireless-mouse.jpg`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">USB 2.0 Wireless 300...</span>
                <p className="text-primary fw-semibold">Rs 1350</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv pt-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/dell-g-15.jpg`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">Dell Vostro 3520 Lap...</span>
                <p className="text-primary fw-semibold">Rs 59,000</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="py-5 bg-white container">
        <div className="row">
          <div className="col-lg-3 bg-primary-subtle">
            <h3 className="fw-bold py-3 text-center">RECOMMENDED PRODUCT</h3>
            <img
              className="w-100 img-fluid rounded hv pb-4"
              src={`${process.env.PUBLIC_URL}/images/9in1-usb-hub.jfif`}
              alt="" />
            <h4 className="py-1 fw-semibold text-center">9 in1 USB-C To 3*3 US</h4>
            <p className="text-primary fw-semibold text-center">Rs 4,425</p>
            <p className="orange text-center"><i className='orange'>⭐⭐⭐⭐ <i className="bi bi-star"></i></i></p>
            <div className="bn"><a href="" className="btn btn-primary px-4">Buy Now</a>
            </div>
          </div>


          <div className="col-lg-9 ps-5">
            <div className="row">
              <div className="row">
                <div className="col-lg-6">
                  <h4 className="fw-bold">Latest Products</h4>
                </div>
                <div className="col-lg-6 text-end">
                  <p className="orange">View All &gt;</p>
                </div>
              </div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div className="col">
                  <div className="box position-relative shadow">
                    <img
                      className="w-100 hv py-2 pb-5 prod2"
                      src="https://img.drz.lazcdn.com/static/np/p/adf9e74d18b0342334c6ad03a8104772.jpg_720x720q80.jpg" alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semisemibold">philips Multi-Blender</span>
                      <p className="text-primary fw-semibold">Rs 7,799</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                      <a href="" className="btn btn-primary btn-sm"><i className="bi bi-eye"></i> Quick view</a>
                    </div>
                  </div>
                </div>


                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv px-3 py-2 pb-5 prod2" src="https://images-cdn.ubuy.qa/63c87277e0b17d46ad3ade57-220v-panasonic-ac-mx-ac555-550-watt.jpg" alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">Panasonic 4-in-1 mixture</span>
                      <p className="text-primary fw-semibold">Rs 14,499</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5 prod2" src="https://img.drz.lazcdn.com/static/np/p/017bfc4a588af5d72d30d57c5424f531.png_720x720q80.png" alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">Glen Bread Maker(auto) </span>
                      <p className="text-primary fw-semibold">Rs 16,299</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv px-3 py-2 pb-5 prod2" src={`${process.env.PUBLIC_URL}/images/faber.jpg`} alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">Faber Kitchen Chimney</span>
                      <p className="text-primary fw-semibold">Rs 35,999</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐⭐</i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5 prod2" src={`${process.env.PUBLIC_URL}/images/3meter-usba-rj45.jpg`} alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">Type-C 3.1/USB 3.0 Et..</span>
                      <p className="text-primary fw-semibold">Rs 1,000</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5 prod2" src="https://5.imimg.com/data5/SELLER/Default/2023/2/MU/YI/QY/119163441/av-to-hdmi-converter-500x500.jpeg" alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">AV2HDMI HD Video...</span>
                      <p className="text-primary fw-semibold">Rs 745</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐</i> <i className="bi bi-star"></i> <i className="bi bi-star"></i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5 prod2" src="https://images.tokopedia.net/img/cache/500-square/product-1/2017/11/2/23837605/23837605_c3fe45b8-4de2-48e5-bc3f-8e0ae2eead89_800_800.jpg" alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">USB 2.0 Ethernet Ada..</span>
                      <p className="text-primary fw-semibold">Rs 13,499</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5 prod2" src={`${process.env.PUBLIC_URL}/images/interactive-led-panel.jpg`} alt="" />
                    <div className="box-d position-absolute text-center">
                      <span className="fw-semibold">75" Interactive Panel</span>
                      <p className="text-primary fw-semibold">Rs 296,500</p>
                      <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img className="wh" src="https://cdn.buymode.shop/images/1P5ZK52HXM3MNIMUN-1731911713583.gif" alt="" />
            </div>
          </div>
        </div>
      </section>



      <section className="py-1 bg-white container shadow ">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="fw-bold py-4 text-center">NEW ARRIVALS</h3>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-2 pb-4 prod" src="https://img.drz.lazcdn.com/static/np/p/017bfc4a588af5d72d30d57c5424f531.png_720x720q80.png" alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">Glen Bread Maker(auto)</span>
                <p className="text-primary fw-semibold">Rs 13,999</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/2mp-wifi-camera.jfif`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">Imou Cue 2 Indoor</span>
                <p className="text-primary fw-semibold">Rs 4,975</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className=" box position-relative shadow">
              <img className="w-100 hv py-4 pb-3 prod" src="https://hardwarepasal.com/src/img/product/2025-06-03-16-41-29_rN8OnYnfuwproduct.jpg" alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">10,000mah Portable...</span>
                <p className="text-primary fw-semibold">Rs 1,799</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/acer-aspire-14.jpg`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">Acer Lite 14 | Core i3</span>
                <p className="text-primary fw-semibold">Rs 47,999</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/3meter-usba-rj45.jpg`} alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">USB 2.0 to type-C</span>
                <p className="text-primary fw-semibold">Rs 350</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv py-3 pb-5 prod" src="https://images.tokopedia.net/img/cache/500-square/product-1/2017/11/2/23837605/23837605_c3fe45b8-4de2-48e5-bc3f-8e0ae2eead89_800_800.jpg" alt="" />
              <div className="box-c position-absolute text-center p-1">
                <span className="fw-semibold">type-C 3.1/USB 3.0 Et</span>
                <p className="text-primary fw-semibold">Rs 1,000</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">COMPUTER &amp; LAPTOPS<img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b63823da07a.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 py-3 pb-5 hv prod" src={`${process.env.PUBLIC_URL}/images/esonic-h81.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">ESONIC h81 JEL Mothe..</span>
                  <p className="text-primary fw-semibold">Rs 6,900</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐</i> <i className="bi bi-star"></i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src="https://crdms.images.consumerreports.org/prod/products/cr/models/412421-15-to-16-inch-laptops-apple-macbook-pro-16-12-core-m3-pro-512-gb-10037832.png" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Macbook pro-m3 16"</span>
                  <p className="text-primary fw-semibold">Rs 3,05,000</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/acer-nitro-5.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Acer Nitro 5 Gaming</span>
                  <p className="text-primary fw-semibold">Rs 130,000</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/wireless-mouse.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Prolink Wireless Mouse</span>
                  <p className="text-primary fw-semibold">Rs 1,275</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv px-3 py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/dell-g-15.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Dell Inspiro-16 Gaming</span>
                  <p className="text-primary fw-semibold">Rs 1,08,799</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv px-3 py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/hp-omen-15.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">HP-Omen 15 Laptop</span>
                  <p className="text-primary fw-semibold">Rs 1,55,100</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="py-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">PHONE &amp; TABLETS <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b6380c05255.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 pb-5 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src="https://sabkophone.com/wp-content/uploads/2024/01/iphone-13-pro-max-black-1.jpg" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Iphone 13 pro max</span>
                  <p className="text-primary fw-semibold">Rs 1,05,000</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/microtel-mct.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Microtel MCT-1510C.</span>
                  <p className="text-primary fw-semibold">Rs 2,299</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/redmi-note-15.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Redmi note 14 pro</span>
                  <p className="text-primary fw-semibold">Rs 25,285</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/nothing-phone-pro.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Nothing Phone-2 pro</span>
                  <p className="text-primary fw-semibold">Rs 38,140</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv py-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/mobile-wallmount.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">UGREEN 1-3 Charger</span>
                  <p className="text-primary fw-semibold">Rs 2,285</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv py-3 pb-5 prod" src="https://images.samsung.com/is/image/samsung/assets/us/tablets/01072026/MeetTablets-FT12-FeatureColumn-TabS11Series-Ultra-M.jpg?$720_N_JPG$" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Samsung galaxy Tab</span>
                  <p className="text-primary fw-semibold">Rs 51,150</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>



      <section className="py-5 bg-white container">
        <div className="row">
          <div className="col-lg-6">
            <img className="wh1" src="https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg" alt="" />
          </div>
          <div className="col-lg-6">
            <img className="wh2" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shopping-sale-flyer-design-template-51efcde8ff5aaab4dcfc08a2af1d944f_screen.jpg?ts=1611426039" alt="" />
          </div>
        </div>
      </section>




      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">TV &amp; AUDIO <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b6383885a62.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/samsung-led-tv.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Samsung 32" Led Tv</span>
                  <p className="text-primary fw-semibold">Rs 80,299</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐⭐</i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/3.5-mm-stereo-audio.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">High Qulity Aux Cable</span>
                  <p className="text-primary fw-semibold">Rs 299</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src="https://www.mypower.com.np/_next/image?url=https%3A%2F%2Fmpapi.mypowerworld.com%2Fstorage%2Fproducts%2Fimages%2F1738730878-MT-128%20ALL%20PNG-02-01.png&w=1920&q=75" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">MT-02 EARBUDS wi..</span>
                  <p className="text-primary fw-semibold">Rs 2,2990</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/interactive-led-panel.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Interactive LED panel</span>
                  <p className="text-primary fw-semibold">Rs 255,500</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/anker-headphone.webp`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Anker-A3 Headphone.</span>
                  <p className="text-primary fw-semibold">Rs 16,599</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐⭐</i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/boat-neckband.png`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Boat Neckband-c3</span>
                  <p className="text-primary fw-semibold">Rs 2,699</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">CCTV &amp; BIOMETRIC <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b637f6a22a2.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/3mp-wifi-camera.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">3MP Wi-Fi PT Camera</span>
                  <p className="text-primary fw-semibold">Rs 3,999</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/office-biometric-scanner.webp`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Startups Time Atte...</span>
                  <p className="text-primary fw-semibold">Rs 13,500</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/2mp-wifi-camera.jfif`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">2MP Wi-Fi PT Camera</span>
                  <p className="text-primary fw-semibold">Rs 3,199</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/prolink-ds.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">ProLink DS-31012 Cam </span>
                  <p className="text-primary fw-semibold">Rs 7,500</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/wifi-door-sensor.webp`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Wi-Fi Door Sensor and</span>
                  <p className="text-primary fw-semibold">Rs 3,925</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐</i> <i className="bi bi-star"></i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/ezviz-cctv-camera.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Ezviz cctv Camera</span>
                  <p className="text-primary fw-semibold">Rs 7,775</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">PRINTERS &amp; PROJECTORS <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b637b2b8ee8.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/combo-brother-hlt-printer.png`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="px-1 fw-semibold">Combo Brother HL-T.</span>
                  <p className="text-primary fw-semibold">Rs 94,575</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/combo-brother-hl.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Combo Brother HL...</span>
                  <p className="text-primary fw-semibold">Rs 30,510</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/brother-ads-2100d.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Brother ADS-2100 D..</span>
                  <p className="text-primary fw-semibold">Rs 77,850</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/brother-mfc-t920-dw.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Brother MFC-T920DW</span>
                  <p className="text-primary fw-semibold">Rs 62,050</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/brother-hl-l3270cdw.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="px-1 fw-semibold">Brother HL-L3270CD </span>
                  <p className="text-primary fw-semibold">Rs 58,500</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/brother-mfc-l6900d.webp`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Brother MFC-L6900D</span>
                  <p className="text-primary fw-semibold">Rs 202,500</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">NETWORKING &amp; CONNECTIVITY <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b637a42c429.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/usb-network-printer.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">USB Network Printer</span>
                  <p className="text-primary fw-semibold">Rs 9,285</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv  pt-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/cat-7-ftp-rj45-module.webp`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Cat7 FTP RJ45 Modu..</span>
                  <p className="text-primary fw-semibold">Rs 645</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/network-test-cable.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold prod">Network Cable Test..</span>
                  <p className="text-primary fw-semibold">Rs 1,855</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐</i> <i className="bi bi-star"></i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt pb-5 prod" src="https://i5.walmartimages.com/asr/593746b2-8be0-44c8-af13-24929af67a10.4449493e182245b7ae954bc3eb242ac6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Network &amp; Telephone   </span>
                  <p className="text-primary fw-semibold">Rs 5,425</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/cat6-rj45-unshield.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Cat6 RJ45 Unshield...</span>
                  <p className="text-primary fw-semibold">Rs 1,145</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5 prod" src={`${process.env.PUBLIC_URL}/images/ugreen-rj45-network.jfif`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">UGREEN RJ 45 Netwo.</span>
                  <p className="text-primary fw-semibold">Rs 2,285</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐⭐</i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">CABLES &amp; CONNECTORS <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b63772f1f22.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white container shadow py-5 ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/3.5-mm-stereo-audio.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">3.5mm Stereo Audio..</span>
                  <p className="text-primary fw-semibold">Rs 510</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/mini-dp-to-hdmi.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Mini DP to HDMI+VG.</span>
                  <p className="text-primary fw-semibold">Rs 2,855</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/9in1-usb-hub.jfif`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">9 in1 USB-C To 3*3 US</span>
                  <p className="text-primary fw-semibold">Rs 10,715</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-3 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/vga-switch.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">VGA 4*1 Switcher U..  </span>
                  <p className="text-primary fw-semibold">Rs 4,285</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/3meter-usba-rj45.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">3 Mtr USB-A To RJ4...</span>
                  <p className="text-primary fw-semibold">Rs 2,145</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/dvi-d-to-vga.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">DVI-D to VGA Activ...</span>
                  <p className="text-primary fw-semibold">Rs 1,855</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">POWER SOLUTION <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b63762bbc5e.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 pb-5 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/Toshiba-charger-65w.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Toshiba Charger 65w</span>
                  <p className="text-primary fw-semibold">Rs 750</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/powerbank-30000mah.png`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">PowerBank-30000mah</span>
                  <p className="text-primary fw-semibold">Rs 4,199</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/M2LL(20000mah)-li.png`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">M27L(20000mah) Li.</span>
                  <p className="text-primary fw-semibold">Rs 2,799</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/Toshiba-charger-65w.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Laptop Charger 90w..</span>
                  <p className="text-primary fw-semibold">Rs 3,499</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/dell-90w-big-pin-charger.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Dell 90W big pin cha..</span>
                  <p className="text-primary fw-semibold">Rs 1,099</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5 prod" src={`${process.env.PUBLIC_URL}/images/acer-charger-65w.jpg`} alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Acer Charger 65W for..</span>
                  <p className="text-primary fw-semibold">Rs 799</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">GADGETS <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b6374b5148d.png" alt="" /></h4>
            </div>
            <div className="col-lg-6 text-end">
              <h6 className="orange">View All &gt;</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 pb-5 bg-white container shadow ">
        <div className="row">
          <div className="row pb-5">
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src="https://s.alicdn.com/@sc04/kf/Hb1f111e98dd9445fa864296362709653p/JMGO-N5-Ultra-Max-Triple-Laser-Projector-4K-UHD-Smart-Home-Theater-6000-ISO-Lumens-With-Gimbal-240Hz-Refresh-Rate.jpg" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Laser Projector for hom</span>
                  <p className="text-primary fw-semibold">Rs 22,145</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>

                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src="https://i.ebayimg.com/images/g/c88AAOSwHEdmhmRA/s-l400.jpg" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Car Wash spray noz..</span>
                  <p className="text-primary fw-semibold">Rs 5,000</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐</i> <i className="bi bi-star"></i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-5 pb-5 prod" src="https://www.carbikeindia.com/wp-content/uploads/2021/08/RNG-Eko-Green-RNG-2001-Car-Vacuum-Cleaner.webp" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold ">Joyroom Car Vaccum</span>
                  <p className="text-primary fw-semibold">Rs 4,500</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5 prod" src="https://5.imimg.com/data5/SELLER/Default/2022/9/SY/GC/BF/13634421/mini-usb-led-bulb.jpg" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">1W USB LED Lamp</span>
                  <p className="text-primary fw-semibold">Rs 100</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5 prod" src="https://ph-test-11.slatic.net/p/862de6f29e3165752e38db6b75383fca.jpg" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">Mini LED Flashlight</span>
                  <p className="text-primary fw-semibold">Rs 295</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5 prod" src="https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/9/5/950050.jpg" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="fw-semibold">UGREEN 38-IN-1 Alu..</span>
                  <p className="text-primary fw-semibold">Rs 2,145</p>
                  <p className="orange"><i className='orange'>⭐⭐⭐⭐⭐</i></p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="mt-4 foot">
        <div className="container grey py-4">
          <div className="row text-center py-4">
            <div className="col-lg-3">
              <img className="pb-3 img-fluid prod1 ps-2" src="https://www.nicepng.com/png/full/572-5725423_delivery-truck-logo-clipart-car-van-delivery-car.png" alt="" />
              <h6>Fast Delivery all accross the<br /> country</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-3 img-fluid prod1" src="https://png.pngtree.com/png-vector/20231211/ourmid/pngtree-payment-icon-income-png-image_10858293.png" alt="" />
              <h6>Safe Payment</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-3 img-fluid prod1" src="https://static.vecteezy.com/system/resources/previews/012/255/042/non_2x/simple-easy-return-policy-icon-badge-sign-symbol-isolated-on-white-background-with-arrow-design-vector.jpg" alt="" />
              <h6>7 Days Return Policy</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-3 img-fluid prod1" src="https://cdn-icons-png.freepik.com/512/10645/10645776.png" alt="" />
              <h6>100% Authentic Products</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="mb-1">
        <div className="container grey">
          <div className="row text-center py-3 pb-5">
            <div className="col-lg-3">
              <img className="pb-2 prod1" src={`${process.env.PUBLIC_URL}/images/logo2.jpg`} alt="" />
              <h6>About Company</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-4 prod1" src="https://cdn-icons-png.flaticon.com/512/8644/8644324.png" alt="" />
              <h6>Contact Us</h6>
            </div>

            <div className="col-lg-3">
              <img className="pb-4 prod1" src="https://static.vecteezy.com/system/resources/previews/005/747/712/non_2x/24-hours-customer-service-icon-24-7-support-icon-sign-button-customer-service-icon-vector.jpg" alt="" />
              <h6>24 hour Support</h6>
            </div>

            <div className="col-lg-3">
              <img className="pb-3 prod1" src="https://media.istockphoto.com/id/1435177364/vector/online-messaging-icon-design.jpg?s=612x612&w=0&k=20&c=4n_5qaGNclHPl5clmf-BLO_EiZajIFx4_D5S--tD95M=" alt="" />
              <h6>FAQ</h6>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
