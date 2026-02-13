
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import React, { useState } from 'react';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


function Body() {
  return (
    <div>
       <section className="container">
        <div className="row my-5">
          <div className="col-lg-12">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://cdn.buymode.shop/images/1P5ZK52HXM3MMN98Z-1731910249619.jpeg" className="w-100 banner" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.buymode.shop/images/1P5ZK21STM2K1JVLM-1729577105338.jpeg" className="w-100 banner" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.buymode.shop/images/1P5ZK52HXM2LX611O-1729690673100.jpeg" className="w-100 banner" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.buymode.shop/images/1P5ZK21STM2K3R8G1-1729580807809.jpeg" className="w-100 banner" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev btn-orange" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next btn-orange" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>



      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">Brands</h4>
            </div>
            <div className="col-lg-6 text-end">
              <p className="orange">View All {'>'}</p>
            </div>
          </div>


             <div className="row py-1">
              <div className="col-lg-12 pad-y bg-primary-subtle">
              <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  pagination={{ clickable: true}}
                  navigation
                  autoplay={{ delay: 3000 }}
                  spaceBetween={10}
                  slidesPerView={8}
                  loop
              >
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1112631afd.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a110c691c61.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a110b53d44c.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1148d0b519.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1105c0a8c4.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11021744fd.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a1100dce05b.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10fc51dae8.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11579b118f.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10fa4db499.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10d9b12f9a.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10d81879d5.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10d6f25959.png"
                      alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://digitalsahuji.com/storage/app/public/brand/2023-07-02-64a10d61114e9.png"
                      alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

          </div>
      </section>



      <section className="py-4 bg-white container shadow">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="fw-bold py-4 text-center">Featured Products</h4>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img
                className="w-100 pt-3 hv pb-5"
                src={`${process.env.PUBLIC_URL}/images/3mp-wifi-camera.jpg`}  alt="3mp-wifi-camera" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-1 fw-semibold">3MP Wi-Fi PT Camera</span>
                <span className="orange">
                  <i className="bi bi-star"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i>
                </span>
                <p className="text-primary fw-bold">Rs 3,999</p>
                <a href="" className="btn btn-primary btn-sm">
                  <i className="bi bi-eye"></i> Quick view
                </a>
              </div>
            </div>
          </div>


          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv pt-3 pb-5" src={`${process.env.PUBLIC_URL}/images/3mp-wifi-camera.jpg`} alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-2 fw-semibold">Imou Cue 2 Indoor....</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 4,975</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv pt-5 pb-5" src="https://uk.gpbatteries.com/cdn/shop/products/m2-packshot-10000mah-1_600x.jpg?v=1650952057" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-2 fw-semibold">10,000mah Portable...</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 1,799</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv pt-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-04-65e58ba17e55b.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-1 fw-semibold">Acer Lite 14 | Core i3...</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 47,999</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv pt-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-09-01-64f1a7858dfa4.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-1 fw-semibold">USB 2.0 Wireless 300...</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 350</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv pt-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-28-660551a73ad9e.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-1 fw-semibold">Dell Vostro 3520 Lap...</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 59,000</p>
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
              className="w-100 hv pb-4"
              src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-05-65c0c71abf521.png"
              alt="" />
            <h4 className="py-1 fw-bold text-center">Type C to HDMI+VGA Converter(UGREEN 3084...)</h4>
            <p className="pl">
              <i className="bi bi-star"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i>
            </p>
            <p className="text-primary text-center fw-bold fw-bold">Rs 4,425</p>
            <div className="bn">
              <a href="" className="btn btn-primary px-4">
                Buy Now
              </a>
            </div>
          </div>

          
          <div className="col-lg-9 ps-5">
            <div className="row">
              <div className="row">
                <div className="col-lg-6">
                  <h4 className="fw-bold">Latest Products</h4>
                </div>
                <div className="col-lg-6 text-end">
                  <p className="orange">View All {'>'}</p>
                </div>
              </div>
              <div className="col-lg-2 wd overflow-hidden">
                <div className="box position-relative shadow">
                  <img
                    className="w-100 hv py-2 pb-5"
                    src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-30-6630b1058130e.png"
                    alt="" />
                  <div className="box-c position-absolute text-center">
                    <span className="px-3 fw-bold">Khind Multi-Blender..</span>
                    <span className="orange">
                      <i className="bi bi-star"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i> <i className="bi bi-star"></i>
                    </span>
                    <p className="text-primary fw-bold">Rs 7,799</p>
                    <a href="" className="btn btn-primary btn-sm">
                      <i className="bi bi-eye"></i> Quick view
                    </a>
                  </div>
                </div>
              </div>


              <div className="col-lg-2 wd overflow-hidden ms-1">
                <div className="box position-relative shadow">
                  <img className="w-100 hv py-2 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-30-6630ae8b4e9ac.png" alt="" />
                  <div className="box-c position-absolute text-center">
                    <span className="px-3 fw-bold">Khind 1.8L Double Boi.</span>
                    <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                    <p className="text-primary fw-bold">Rs 14,499</p>
                    <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 wd overflow-hidden ms-1">
                <div className="box position-relative shadow">
                  <img className="w-100 hv py-2 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-30-6630acbef3800.png" alt="" />
                  <div className="box-c position-absolute text-center">
                    <span className="px-3 fw-bold">Khind 4L 8 in 1 Multi...</span>
                    <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                    <p className="text-primary fw-bold">Rs 13,499</p>
                    <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 wd overflow-hidden ms-1">
                <div className="box position-relative shadow">
                  <img className="w-100 hv py-2 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-30-6630a2689942d.png" alt="" />
                  <div className="box-c position-absolute text-center">
                    <span className="px-4 fw-bold">Khind Bread Maker...</span>
                    <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                    <p className="text-primary fw-bold">Rs 15,999</p>
                    <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                  </div>
                </div>
              </div>
              <div className="row pt-5 gp1">
                <div className="col-lg-2 wd overflow-hidden">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5" src="https://cdn-s3-verbatimhk.s3.ap-east-1.amazonaws.com/wp-content/uploads/sites/2/2022/06/66668_Box_Angle.jpg" alt="" />
                    <div className="box-c position-absolute text-center">
                      <span className="px-3 fw-bold">Type-C 3.1/USB 3.0 Et..</span>
                      <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                      <p className="text-primary fw-bold">Rs 1,000</p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 wd overflow-hidden ms-1">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5" src="https://5.imimg.com/data5/SELLER/Default/2023/2/MU/YI/QY/119163441/av-to-hdmi-converter-500x500.jpeg" alt="" />
                    <div className="box-c position-absolute text-center">
                      <span className="px-3 fw-bold">AV2HDMI HD Video...</span>
                      <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                      <p className="text-primary fw-bold">Rs 745</p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 wd overflow-hidden ms-1">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5" src="https://images.tokopedia.net/img/cache/500-square/product-1/2017/11/2/23837605/23837605_c3fe45b8-4de2-48e5-bc3f-8e0ae2eead89_800_800.jpg" alt="" />
                    <div className="box-c position-absolute text-center">
                      <span className="px-3 fw-bold">USB 2.0 Ethernet Ada..</span>
                      <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                      <p className="text-primary fw-bold">Rs 13,499</p>
                      <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 wd1 pb-4 overflow-hidden ms-1">
                  <div className="box position-relative shadow">
                    <img className="w-100 hv py-2 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-02-660bb103b090f.png" alt="" />
                    <div className="box-c position-absolute text-center">
                      <span className="px-3 fw-bold">75" Interactive Panel</span>
                      <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                      <p className="text-primary fw-bold">Rs 296,500</p>
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
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-30-6630acbef3800.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="py-1 fw-semibold">khind Bread Maker pro...</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 3,999</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-30-6630a2689942d.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-2 fw-semibold">Imou Cue 2 Indoor ..</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 4,975</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-5 pb-5" src="https://uk.gpbatteries.com/cdn/shop/products/m2-packshot-10000mah-1_600x.jpg?v=1650952057" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-2 fw-semibold">10,000mah Portable...</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 1,799</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow">
              <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-04-65e58ba17e55b.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="py-1 fw-semibold">Acer Lite 14 | Core i3 8th</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 47,999</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-09-01-64f1a7858dfa4.png" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="py-1 px-1 fw-semibold">USB 2.0 Wireless 300..</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 350</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 overflow-hidden">
            <div className="box position-relative shadow ">
              <img className="w-100 hv py-3 pb-5" src="https://images.tokopedia.net/img/cache/500-square/product-1/2017/11/2/23837605/23837605_c3fe45b8-4de2-48e5-bc3f-8e0ae2eead89_800_800.jpg" alt="" />
              <div className="box-c position-absolute text-center p-2">
                <span className="px-2 fw-semibold">ype-C 3.1/USB 3.0 Et..</span>
                <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                <p className="text-primary fw-bold">Rs 1,000</p>
                <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white container">
        <div className="row">
          <div className="col-lg-6">
            <img className="wh1" src="https://digitalsahuji.com/storage/app/public/banner/2024-04-10-661651ee5ed2d.png" alt="" />
          </div>
          <div className="col-lg-6">
            <img className="wh2" src="https://digitalsahuji.com/storage/app/public/banner/2024-04-10-661652032140e.png" alt="" />
          </div>
        </div>
      </section>

      <section className="py-3">
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 py-3 pb-5 hv" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-09-04-64f5941d57ecd.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="py-1 fw-semibold">ESONIC h81 JEL Mothe..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 6,900</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-14-65cc558b0246c.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Wired Optical Mou..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 630</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496c63652fb7.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Foldable Holder for ..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 3,570</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-13-65cb3c8425337.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="py-1 fw-semibold">Wireless Mouse Profe...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,275</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-09-65c5d3cc9d889.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="py-1 fw-semibold">Keyboard-306 For ASUS</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 799</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-13-65cb145d5dd58.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Wireless Optical M...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,100</p>
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
              <h4 className="fw-bold">PHONE &amp; TABLETS <img className="im2 pb-1 px-2" src="https://digitalsahuji.com/storage/app/public/category/2024-01-28-65b6380c05255.png" alt="" /></h4>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496b14edd075.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Mobile USB-A Wall....</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 925</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-08-23-64e5ae71d716d.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Microtel MCT-1510C.</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,299</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-64957f8523abd.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Multi-Angle Phone..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,285</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-64957896a07be.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Gravity Phone Holde..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,140</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496b640a3ece.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">UGREEN Wireless Ch..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,285</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv py-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-18-648edcb8b3186.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Panasonic KX-TSC20</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,150</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1e08dafd93.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">MT-03 EAR BUDS Act.</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,299</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-20-65d45be1225d9.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">High Qulity Perform..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 299</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1dd8ebccac.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">MT-02 EARBUDS wi..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,299</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-04-02-660bab11cce8c.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Interactive LED panel</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 255,500</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1d8897a93d.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">MT-14 Earbuds For hi..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,599</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-18-65d1d2df8db9c.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Mt-32C Earbuds Tru..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,699</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093cbd38ee0.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">3MP Wi-Fi PT Camera</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 3,999</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-08-28-64ec62ed6a411.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Startups Time Atte...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 13,500</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093bb450d13.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">2MP Wi-Fi PT Camera</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 3,199</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-17-64b51613bf31b.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">ProLink DS-31012 Cam </span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 7,500</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-660940f4cd011.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Wi-Fi Door Sensor and</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 3,925</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-03-31-66093f643edbf.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Highly Stable Gas s..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 7,775</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a29b57b3655.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Combo Brother HL-T.</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 94,575</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a28d302dfa5.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Combo Brother HL...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 30,510</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a2ad3e935fe.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Brother ADS-2100 D..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 77,850</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a2967e83a04.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Brother MFC-T920DW</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 62,050</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a29dae1cc6d.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Brother HL-L3270CD </span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 58,500</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-03-64a2a44b780ef.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Brother MFC-L6900D</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 202,500</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-07-05-64a513328be46.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">USB Network Printer</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 9,285</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv  pt-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-26-64993b7d273ea.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Cat7 FTP RJ45 Modu..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 645</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497ecc2f105d.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Network Cable Test..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,855</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt pb-5" src="https://i5.walmartimages.com/asr/593746b2-8be0-44c8-af13-24929af67a10.4449493e182245b7ae954bc3eb242ac6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="" />
                <div className="box-c position-absolute text-center p-1">
                  <span className="px-1 fw-semibold">Network &amp; Telephone   </span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 5,425</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497f571b5964.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Cat6 RJ45 Unshield...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,145</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497eeab2708f.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">UGREEN RJ 45 Netwo.</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,285</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-24-6496a1b3b452b.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">3.5mm Stereo Audio..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 510</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-649523230fb03.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Mini DP to HDMI+VG.</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,855</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-05-65c0cb4ba1dc0.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">9 in1 USB-C To 3*3 US</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 10,715</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-3 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-649569df428aa.png" alt="" />
                <div className="box-d position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">VGA 4*1 Switcher U..  </span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 4,285</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497efbbdd6ef.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">3 Mtr USB-A To RJ4...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,145</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-15-65cdc7750ad12.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">DVI-D to VGA Activ...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,855</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-01-65bb633774453.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Toshiba Charger 65w</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 750</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-19-65d300ee3bacb.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-0 fw-semibold">PowerBank-30000mah</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 4,199</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-19-65d31f8dc1591.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">M27L(20000mah) Li.</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,799</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-19-65d312c48f93b.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="py-1 px-1 fw-semibold">20000mah Wireless...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 3,499</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-01-65bb585caa422.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Dell 90W big pin cha..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 1,099</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-01-65bb5904d7dd5.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">Acer Charger 65W for..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 799</p>
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
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-05-65c0a1d0909a6.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="py-1 fw-semibold">Laser Projection / for...</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,145</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-10-16-652d05594d57a.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold">Car Wash spray noz..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 5,000</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-5 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-10-16-652cfec285c8f.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-2 fw-semibold ">Joyroom Car Vaccum</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 4,500</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-12-05-656edd7c70ead.png" alt="" />
                <div className="box-d position-absolute text-center p-2">
                  <span className="px-3 fw-semibold">1W USB LED Lamp</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 100</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-18-648edf0764b8d.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-3 fw-semibold">Mini LED Flashlight</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 295</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 overflow-hidden">
              <div className="box position-relative shadow ">
                <img className="w-100 hv pt-4 pb-5" src="https://digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-23-649546bbd160a.png" alt="" />
                <div className="box-c position-absolute text-center p-2">
                  <span className="px-1 fw-semibold">UGREEN 38-IN-1 Alu..</span>
                  <span className="orange"><i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> <i className="bi bi-star" /> </span>
                  <p className="text-primary fw-bold">Rs 2,145</p>
                  <a href className="btn btn-primary btn-sm"><i className="bi bi-eye" /> Quick view</a>
                </div>
              </div>
            </div>
          </div>
        </div></section>


      <section className="py-5">
        <div className="container bg-white">
          <div className="row text-center py-4">
            <div className="col-lg-3">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/delivery.png" alt="" />
              <h6>Fast Delivery all accross the<br /> country</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/Payment.png" alt="" />
              <h6>Safe Payment</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/money.png" alt="" />
              <h6>7 Days Return Policy</h6>
            </div>
            <div className="col-lg-3">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/Genuine.png" alt="" />
              <h6>100% Authentic Products</h6>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-1">
        <div className="container-fluid grey">
          <div className="row text-center py-3">
            <div className="col-lg-4">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/about%20company.png" alt="" />
              <h6>About Company</h6>
            </div>
            <div className="col-lg-4">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/contact%20us.png" alt="" />
              <h6>Contact Us</h6>
            </div>
            <div className="col-lg-4">
              <img className="pb-3" src="https://digitalsahuji.com/public/assets/front-end/png/faq.png" alt="" />
              <h6>FAQ</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Body
