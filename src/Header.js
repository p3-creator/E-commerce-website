import React, { useState, useEffect, useContext } from 'react';
import { useCart } from './CartContext';

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import Form from "./Form";

function Home() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [qty, setQty] = useState(1);
  // State for toggling dropdown visibility (if needed)
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);  // Toggle the state value between true/false
  };



  const [items, setItems] = useState([]); // State to store items for the selected category
  const [item, setItem] = useState(null); // State to store single item
  const [apiItems, setApiItems] = useState([]);//store api products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = {
    computerLaptops: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/esonic-h81.jpg`, description: "ESONIC h81 JEL Mothe", price: "$1200", rating: "4.5" },
      { id: 2, image: "https://static-01.daraz.com.np/p/a9fcd2884147487d6ec929cb4900bb94.jpg", description: "Wired Optical Mouse", price: "$1400", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/acer-aspire-14.jpg`, description: "Acer Aspire 5", price: "$800", rating: "4.3" },
      { id: 4, image: "https://www.laptopsdirect.co.uk/Images/UX433FAC-A5175R_6_supersize.jpg?v=1", description: "Asus zenbook 14", price: "$950", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/acer-nitro-5.jpg`, description: "Acer Nitro 5", price: "$1200", rating: "4.5" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/wireless-mouse.jpg`, description: "Wireless Mouse", price: "$1400", rating: "4.7" },
      { id: 7, image: `${process.env.PUBLIC_URL}/images/dell-g-15.jpg`, description: "dell inspiron 15", price: "$800", rating: "4.3" },
      { id: 8, image: "https://www.laptopsdirect.co.uk/Images/UX433FAC-A5175R_6_supersize.jpg?v=1", description: "Asus zenbook 14", price: "$950", rating: "4.6" },
      { id: 9, image: `${process.env.PUBLIC_URL}/images/esonic-h81.jpg`, description: "ESONIC h81 JEL Mothe", price: "$1200", rating: "4.5" },
      { id: 2, image: "https://infotechsnepal.com.np/wp-content/uploads/2025/11/dell-optical-mouse-in-nepal.jpg", description: "Wired Optical Mouse", price: "$1400", rating: "4.7" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/wireless-mouse.jpg`, description: "Wireless Mouse", price: "$1400", rating: "4.7" },
      { id: 10, image: "https://static-01.daraz.com.np/p/a9fcd2884147487d6ec929cb4900bb94.jpg", description: "Wired Optical Mouse", price: "$1400", rating: "4.7" },
      { id: 11, image: `${process.env.PUBLIC_URL}/images/hp-omen-15.jpg`, description: "HP omen 15", price: "$800", rating: "4.3" },
      { id: 12, image: `${process.env.PUBLIC_URL}/images/desktop-pc.jfif`, description: "Desktop pc", price: "$950", rating: "4.6" },
    ],
    phonetablets: [
      { id: 1, image: "https://down-my.img.susercontent.com/file/my-11134207-7rask-m0nvdu9csw1w27", description: "Redmi note 14", price: " 40,000", rating: "4.4" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/fast-charger.webp`, description: "Fast Charger", price: " 1500", rating: "4.6" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/microtel-mct.jpg`, description: "Microtel MCT-1510C", price: "1250", rating: "4.6" },
      { id: 4, image: `${process.env.PUBLIC_URL}/images/redmi-note-15.jpg`, description: "Redmi note 14 pro", price: " 35000", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/mobile-wallmount.jpg`, description: "Mobile USB-A Wall Mount", price: " 1700", rating: "4.6" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/nothing-phone-pro.jpg`, description: "Nothing Phone", price: " 30,000", rating: "4.4" },
      { id: 7, image: `${process.env.PUBLIC_URL}/images/fast-charger.webp`, description: "Fast Charger", price: " 1500", rating: "4.6" },
      { id: 8, image: `${process.env.PUBLIC_URL}/images/microtel-mct.jpg`, description: "Microtel MCT-1510C", price: "1250", rating: "4.6" },
      { id: 9, image: `${process.env.PUBLIC_URL}/images/redmi-note-15.jpg`, description: "Redmi note 15", price: " 35000", rating: "4.6" },
      { id: 10, image: `${process.env.PUBLIC_URL}/images/nothing-phone-pro.jpg`, description: "Nothing Phone-2 Pro", price: " 37000", rating: "4.6" },
    ],

    tvaudio: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/mt-03-earbuds.webp`, description: "MT-03 EAR BUDS Act", price: " 4000", rating: "4.5" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/mi-earphone.webp`, description: "Mi earphone", price: " 250", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/mt-02-earbuds.webp`, description: "MT-02 EARBUDS wi", price: " 3500", rating: "4.3" },
      { id: 4, image: `${process.env.PUBLIC_URL}/images/interactive-led-panel.jpg`, description: "Interactive LED panel", price: " 150,000", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/anker-headphone.webp`, description: "Anker Headphone", price: " 2500", rating: "4.6" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/skull-candy-headphone.jpg`, description: "Skullcandy Headphone", price: " 1699", rating: "4.6" },
      { id: 7, image: `${process.env.PUBLIC_URL}/images/mt-03-earbuds.webp`, description: "MT-03 EAR BUDS Act", price: " 4000", rating: "4.5" },
      { id: 8, image: `${process.env.PUBLIC_URL}/images/mi-earphone.webp`, description: "Mi earphone", price: " 250", rating: "4.7" },
      { id: 9, image: `${process.env.PUBLIC_URL}/images/boat-neckband.png`, description: "Boat Neckband", price: "Rs 3500", rating: "4.3" },
      { id: 10, image: `${process.env.PUBLIC_URL}/images/interactive-led-panel.jpg`, description: "Interactive LED panel", price: " 150,000", rating: "4.6" },
      { id: 11, image: `${process.env.PUBLIC_URL}/images/anker-headphone.webp`, description: "Anker Headphone 2", price: " 2500", rating: "4.6" },
      { id: 12, image: `${process.env.PUBLIC_URL}/images/samsung-led-tv.jpg`, description: "Samsung 32inch led tv", price: " 80,000", rating: "4.6" },
    ],
    cctv: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/3mp-wifi-camera.jpg`, description: "3MP Wi-Fi PT Camera", price: "$1200", rating: "4.5" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/office-biometric-scanner.webp`, description: "Startups Time Atte", price: "$1400", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/2mp-wifi-camera.jfif`, description: "2MP Wi-Fi PT Camera", price: "$800", rating: "4.3" },
      { id: 4, image: `${process.env.PUBLIC_URL}/images/prolink-ds.jpg`, description: "ProLink DS-31012 Cam ", price: "$1000", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/wifi-door-sensor.webp`, description: "Wi-Fi Door Sensor and", price: "$1200", rating: "4.5" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/hikvision-indoor-cctv.webp`, description: "Hikvision indoor cctv", price: "$1200", rating: "4.5" },
      { id: 7, image: `${process.env.PUBLIC_URL}/images/ezviz-cctv-camera.jpg`, description: "Ezviz cctv Camera", price: "$1400", rating: "4.7" },
      { id: 8, image: `${process.env.PUBLIC_URL}/images/2mp-wifi-camera.jfif`, description: "2MP Wi-Fi PT Camera", price: "$800", rating: "4.3" },
      { id: 9, image: `${process.env.PUBLIC_URL}/images/office-biometric-scanner.webp`, description: "Office Biometric Scanner", price: "$1000", rating: "4.6" },
    ],
    cables: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/3.5-mm-stereo-audio.jpg`, description: "3.5mm Stereo Audio.", price: "510", rating: "4.5" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/mini-dp-to-hdmi.jpg`, description: "Mini DP to HDMI+VG", price: " 2,855", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/9in1-usb-hub.jfif`, description: "9 in1 USB-C To 3*3 US", price: " 10,715", rating: "4.3" },
      { id: 4, image: `${process.env.PUBLIC_URL}/images/vga-switch.jpg`, description: "VGA 4*1 Switcher U", price: " 4,285", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/3meter-usba-rj45.jpg`, description: "3 Mtr USB-A To RJ4", price: " 2,145", rating: "4.3" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/dvi-d-to-vga.jpg`, description: "DVI-D to VGA Activ", price: " 1,855", rating: "4.6" },
    ],
    power: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/Toshiba-charger-65w.jpg`, description: "Toshiba Charger 65w", price: " 750", rating: "4.5" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/powerbank-30000mah.png`, description: "PowerBank-30000mah", price: " 4,199", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/M2LL(20000mah)-li.png`, description: "M27L(20000mah) Li", price: " 2,799", rating: "4.3" },
      { id: 4, image: `${process.env.PUBLIC_URL}/images/Toshiba-charger-65w.jpg`, description: "Laptop Charger", price: " 3,499", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/dell-90w-big-pin-charger.jpg`, description: "Dell 90W big pin cha", price: " 1,099", rating: "4.3" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/acer-charger-65w.jpg`, description: "Acer Charger 65W for", price: " 799", rating: "4.6" },
    ],
    printer: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/combo-brother-hlt-printer.png`, description: "Combo Brother HL-T", price: " 94,575", rating: "4.5" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/combo-brother-hl.jpg`, description: "Combo Brother HL", price: " 30,510", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/brother-ads-2100d.jpg`, description: "Brother ADS-2100 D", price: " 77,850", rating: "4.3" },
      { id: 4, image: `${process.env.PUBLIC_URL}/images/brother-mfc-t920-dw.jpg`, description: "Brother MFC-T920DW", price: " 62,050", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/brother-hl-l3270cdw.jpg`, description: "Brother HL-L3270CD", price: " 58,500", rating: "4.3" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/brother-mfc-l6900d.webp`, description: "Brother MFC-L6900D", price: " 202,500", rating: "4.6" },
    ],
    networking: [
      { id: 1, image: `${process.env.PUBLIC_URL}/images/usb-network-printer.jpg`, description: "USB Network Printer", price: " 9,285", rating: "4.5" },
      { id: 2, image: `${process.env.PUBLIC_URL}/images/cat-7-ftp-rj45-module.webp`, description: "Cat7 FTP RJ45 Module", price: " 645", rating: "4.7" },
      { id: 3, image: `${process.env.PUBLIC_URL}/images/network-test-cable.jpg`, description: "Network Cable Test", price: " 1,855", rating: "4.3" },
      { id: 4, image: "https://i5.walmartimages.com/asr/593746b2-8be0-44c8-af13-24929af67a10.4449493e182245b7ae954bc3eb242ac6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", description: "Network Telephone ", price: " 5,425", rating: "4.6" },
      { id: 5, image: `${process.env.PUBLIC_URL}/images/cat6-rj45-unshield.jpg`, description: "Cat6 RJ45 Unshield", price: " 1,145", rating: "3.7" },
      { id: 6, image: `${process.env.PUBLIC_URL}/images/ugreen-rj45-network.jfif`, description: "UGREEN RJ 45 Network", price: " 2,285", rating: "3.5" },
    ],

  };


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setApiItems(data); // store all api products
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load items");
        setLoading(false);
      });
  }, []);




  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setItem(null); // Reset single item view

    let filteredItems = []; //declaration


    // Local categories
    if (
      category === "computerLaptops" ||
      category === "phonetablets" ||
      category === "tvaudio" ||
      category === "cctv" ||
      category === "cables" ||
      category === "power" ||
      category === "printer" ||
      category === "networking"
    ) {
      filteredItems = data[category] || [];
    }

    // API categories
    else if (category === "electronics") {
      filteredItems = apiItems.filter(item => item.category === "electronics");
    }
    else if (category === "jewelery") {
      filteredItems = apiItems.filter(item => item.category === "jewelery");
    }
    else if (category === "mensClothing") {
      filteredItems = apiItems.filter(item => item.category === "men's clothing");
    }
    else if (category === "womensClothing") {
      filteredItems = apiItems.filter(item => item.category === "women's clothing");
    }



    const mappedItems = filteredItems.map(item => ({
      id: item.id,
      image: item.image,
      description: item.title || item.description,
      price: item.price ? `Rs ${item.price}` : item.price,
      rating: item.rating?.rate || item.rating || "4.0"
    }));
    setItems(mappedItems);
    console.log("Category Selected:", category);
  };  // Check if the function is invoked
  /*setItems(data[category] || []); // Update the state with items from the selected category*/

  const handleItemClick = (item) => {
    setItem(item); // Set the clicked single item's details
    setQty(1); // Reset quantity
  };

  const handleBackClick = () => {
    setItem(null); // Go back to the category's items list
  };

  return (
    <div>

      <section className="py-2 body bgcolor1">
        <div className="container">
          <div className='row align-items-center text-center text-lg-start'>
            <div className="col-12 col-sm-6 col-lg-6">
              <i className="bi bi-telephone-fill px-1"></i> Contact Us : 9841825938
            </div>

            <div className="col-12 col-sm-6 col-lg-6 text-sm-end">
              <i className="bi-envelope-fill px-1"></i> Eshop91@gmail.com
            </div>
          </div>
        </div>
      </section>

      <header className="bg-white py-1">
        <div className="container">
          <div className="row align-items-center gx-2">
            <div className="col-3 col-md-2 col-lg-2">
              <Link to="/Home"><img className="logo img-fluid" style={{ maxWidth: "100%", maxHeight: "75px" }} src={`${process.env.PUBLIC_URL}/images/logo2.jpg`} alt="logo" /></Link>
            </div>

            <div className="col-7 col-md-5 col-lg-5 mx-auto">
              <form className="input-group" role="search">
                <input className="form-control border-end-0" type="search" placeholder="Search" aria-label="search" style={{ backgroundColor: 'white', borderColor: '#e0d6d6ff' }} />
                <button className="btn border border-start-0" type="submit" style={{ backgroundColor: 'white', borderColor: '#6f6a6aff' }}>
                  <i className="bi bi-search text-dark"></i>
                </button>
              </form>
            </div>


            <div className="d-none d-md-flex col-md-5 col-lg-5 justify-content-end align-items-center gap-3">
              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative"><i className="bi bi-heart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative"><i className="bi bi-person-fill"></i>
              </button>

              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative"><i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <span className="dropdown">
                <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">My Cart</button>
                <ul className="dropdown-menu p-2" style={{ minWidth: '250px', zIndex: 1050 }}>
                  {cartItems.length === 0 ? (
                    <li><h6 className="text-danger text-center m-0"><i className="bi bi-cart-plus"></i> Cart Empty</h6></li>
                  ) : (
                    <>
                      {cartItems.map((c, i) => (
                        <li key={i} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                          <img src={c.image} style={{ width: '40px' }} alt="" />
                          <div className="ms-2 flex-grow-1 overflow-hidden">
                            <small className="fw-bold d-block text-truncate" style={{ maxWidth: '120px' }}>{c.description}</small>
                            <small className="text-muted">{c.quantity} x {c.price}</small>
                          </div>
                          <button className="btn btn-sm btn-danger py-0 px-2" onClick={(e) => { e.stopPropagation(); removeFromCart(c.description); }}>&times;</button>
                        </li>
                      ))}
                      <li className="text-center mt-2">
                        <button className="btn btn-primary btn-sm w-100">Checkout</button>
                      </li>
                    </>
                  )}
                </ul>
              </span>

              <Form />
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="col-2 d-md-none text-end">
              <button className="btn btn-light" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <i className="bi bi-list fs-3"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="d-md-none d-flex flex-column bg-light p-3 mt-2 rounded shadow-sm gap-3 position-absolute w-100" style={{ zIndex: 1100, left: 0 }}>
              <div className="d-flex justify-content-around">
                <button type="button" className="btn bg-primary-subtle rounded-circle position-relative"><i className="bi bi-heart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <button type="button" className="btn bg-primary-subtle rounded-circle position-relative"><i className="bi bi-person-fill"></i>
                </button>
                <span className="dropdown">
                  <button type="button" className="btn bg-primary-subtle rounded-circle position-relative dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" style={{ minWidth: '250px', zIndex: 1150 }}>
                    {cartItems.length === 0 ? (
                      <li><h6 className="text-danger text-center m-0"><i className="bi bi-cart-plus"></i> Cart Empty</h6></li>
                    ) : (
                      <>
                        {cartItems.map((c, i) => (
                          <li key={i} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                            <img src={c.image} style={{ width: '40px' }} alt="" />
                            <div className="ms-2 flex-grow-1 overflow-hidden">
                              <small className="fw-bold d-block text-truncate" style={{ maxWidth: '120px' }}>{c.description}</small>
                              <small className="text-muted">{c.quantity} x {c.price}</small>
                            </div>
                            <button className="btn btn-sm btn-danger py-0 px-2" onClick={(e) => { e.stopPropagation(); removeFromCart(c.description); }}>&times;</button>
                          </li>
                        ))}
                        <li className="text-center mt-2">
                          <button className="btn btn-primary btn-sm w-100">Checkout</button>
                        </li>
                      </>
                    )}
                  </ul>
                </span>
              </div>
              <div className="text-center">
                <Form />
              </div>
            </div>
          )}
        </div>
      </header>


      <nav className="navbar navbar-expand-lg bgcolor2 sticky-top shadow-sm py-1">
        <div className="container d-flex flex-wrap align-items-center">
          <div className="dropdown me-2 me-lg-5 mb-2 mb-lg-0">
            <button className="btn btn-light px-2 px-lg-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '0.9rem' }}>
              Categories
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("computerLaptops")}><img src="https://i.pinimg.com/564x/99/6a/f9/996af94267143f254035b0e9d0aa41d9.jpg" alt="" />Computer & Laptops</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("phonetablets")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkRfKTyWobmOnkhN6m4CEcZ5bL3Usrriurg&s" alt="" />Phones & Tablets</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("tvaudio")}><img src="https://elements-resized.envatousercontent.com/elements-video-cover-images/0796323b-1c61-43cb-bdee-de2a2bd41373/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=3b59e0f2ee8f1030784f9075b09e59f4d5a59f13de3c558a1a94ae1262a5f141" alt="" />TV & Audio</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("cctv")}><img src="https://www.clipartmax.com/png/middle/282-2820814_cctv-icon-wireless-security-camera.png" alt="" />CCTV and Biometric</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("cables")}><img src="https://static.vecteezy.com/system/resources/previews/065/317/982/non_2x/simple-usb-cable-connector-data-technology-icon-design-vector.jpg" alt="" />Cables & Connectors</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("power")}><img src="https://img.myloview.com/stickers/power-bank-icon-portable-charging-device-charged-battery-smartphone-indication-vector-illustration-700-125030212.jpg" alt="" />Power Solutions</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("printer")}><img src="https://i.fbcd.co/products/resized/resized-750-500/991fa8eaa7781beafd57ee52132e9f1887d1d7fda61a3033e9a556d1813f5b93.jpg" alt="" />Printers & Projectors</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("networking")}><img src="https://img.freepik.com/premium-vector/wireless-network-connection-devices-icon-set_657438-40877.jpg" alt="" />Networking & Connectivity</a></li>
              <li><hr className="dropdown-divider" /></li>

              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("electronics")}><img src="https://img.icons8.com/3d-fluency/1200/hdd.jpg" alt="" />Storage Devices</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("jewelery")}><img src="https://media.istockphoto.com/id/1205829975/vector/engagement-ring-solid-icon-romantic-proposal-jewelry-item-with-diamond-wedding-asset-vector.jpg?s=612x612&w=0&k=20&c=iziEQq7iMdc8_cF1lfKZRKoBpf1_pSE1DaLJZ1OHi1c=" alt="" />Jewelry</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("mensClothing")}><img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/03/Fashion-Mens-Clothing-Icon-Graphics-12861778-4-580x386.jpg" alt="" />Men's Clothing</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("womensClothing")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpDt_Rnaow5S7yd2QuX-cwwKey4BWPMPwyw&s" alt="" />Women's Clothing</a></li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ filter: 'invert(1)' }}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
            <ul className="navbar-nav d-flex flex-column flex-lg-row me-auto mb-0 text-center text-lg-start">
              <li className="nav-item px-1 px-md-3 px-lg-4 py-1 py-lg-0">
                <nav><Link className='text-white pn d-flex align-items-center justify-content-center justify-content-lg-start' style={{ fontSize: '1rem' }} to="/Home" onClick={() => setItems([])}>Home</Link></nav>
              </li>

              <li className="nav-item px-1 px-md-3 px-lg-4 py-1 py-lg-0">
                <nav><Link className='text-white pn d-flex align-items-center justify-content-center justify-content-lg-start' style={{ fontSize: '1rem' }} to="/About" onClick={() => setItems([])}>About</Link></nav>
              </li>

              <li className="nav-item px-1 px-md-3 px-lg-4 py-1 py-lg-0">
                <a className="nav-link text-white pn d-flex align-items-center justify-content-center justify-content-lg-start" style={{ fontSize: '1rem' }} href="#">Discounted Products</a>
              </li>

              <li className="nav-item px-1 px-md-3 px-lg-4 py-1 py-lg-0">
                <nav><Link className='text-white pn d-flex align-items-center justify-content-center justify-content-lg-start' style={{ fontSize: '1rem' }} to="/Contact" onClick={() => setItems([])}>Contact</Link></nav>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/*display items*/}
      {!item && items.length > 0 && (
        <div className="items-container">
          {items.map((item) => (
            <div key={item.id} className='item-card' onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              <img src={item.image} alt={item.description} className='item-image' />
              <h5 className='items-description'>{item.description}</h5>
              <p className="item-price">{item.price}</p>
              <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
              <p className="item-rating">Rating: {item.rating}</p>
            </div>
          ))}
        </div>
      )}

      {/* Single Item Cart*/}
      {item && (
        <div className="container py-5">
          <div>
            <button className='btn btn-outline-secondary mb-3' onClick={handleBackClick}><i className='bi bi-arrow-left'></i> Back to Products</button>
          </div>
          <div className='row align-items-center bg-white p-4 shadow-sm rounded'>
            <div className="col-md-6 text-center">
              <img src={item.image} alt={item.description} className="img-fluid rounded" style={{ maxHeight: '400px' }} />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2 className="fw-bold">{item.description}</h2>
              <p className="orange mb-1"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
              <p className='text-muted mb-4'>Rating : {item.rating}</p>
              <h3 className='text-primary fw-bold mb-4'>{item.price}</h3>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="input-group" style={{ width: '120px' }}>
                  <button className="btn btn-outline-secondary" type="button" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                  <input type="text" className="form-control text-center" value={qty} readOnly />
                  <button className="btn btn-outline-secondary" type="button" onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <button className="btn btn-primary px-4 py-2" onClick={() => { addToCart(item, qty); setQty(1); alert("Item added to cart"); }}><i className="bi bi-cart-plus me-2"></i>Add to Cart</button>
              </div>

              <div className="mt-4 pt-4 border-top">
                <h5>Product Details</h5>
                <p className="text-secondary small">This product comes with guaranteed quality and warranty. Choose the best electronics, gadgets, and accessories from our wide range of products.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Home;
