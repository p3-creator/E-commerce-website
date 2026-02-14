import React, { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import Form from "./Form";

function Home() {
   // State for toggling dropdown visibility (if needed)
  const [isOpen, setIsOpen] = useState(false);

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
  };

  const handleBackClick = () => {
    setItem(null); // Go back to the category's items list
  };
  
  return (
    <div>

      <section className="py-2 body bgcolor1">
        <div className="container">
          <div className='row'>
           <div className="col-lg-6">
             <i className="bi bi-telephone-fill px-1"></i> Contact Us : 9841825938
           </div>

           <div className="col-lg-6 text-end">
             <i className="bi-envelope-fill px-1"></i> Eshop91@gmail.com
           </div>
          </div>
        </div>
      </section>

      <header className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 me-2">
              <Link to="/Home"><img className="logo" src= {`${process.env.PUBLIC_URL}/images/logo2.jpg`} alt="logo" /></Link>
            </div>

            <div className="col-lg-5 mt-4 ms-5">
              <form className="d-flex" role="search">
                <input className="form-control p-2" type="search" placeholder="Search here . . ." aria-label="search" />
                <button className="btn bg-primary-subtle m" type="submit"><i className="bi bi-search"></i> </button>
              </form>
            </div>

            <div className="col-lg-4 mt-4 ms-5">
              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative mx-1"><i className="bi bi-heart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative mx-1"><i className="bi bi-person-fill"></i>
              </button>

              <button type="button" className="btn bg-primary-subtle rounded-circle position-relative mx-1"><i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <span className="dropdown ms-2">
                <button className="btn btn-white mx-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Cart
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><h6 className="red"><i className="bi bi-cart-plus"></i> Cart Empty</h6></a></li>
                </ul>
              </span>

              <Form />

            </div>
          </div>
        </div>
      </header>

      
    <nav className="navbar navbar-expand-lg bgcolor2 sticky-top">
      <div className="container">
        <div className="dropdown me-5">
          <button className="btn btn-light px-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("computerLaptops")}><img src="https://i.pinimg.com/564x/99/6a/f9/996af94267143f254035b0e9d0aa41d9.jpg" alt="" />Computer & Laptops</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("phonetablets")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkRfKTyWobmOnkhN6m4CEcZ5bL3Usrriurg&s" alt="" />Phones & Tablets</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("tvaudio")}><img src="https://elements-resized.envatousercontent.com/elements-video-cover-images/0796323b-1c61-43cb-bdee-de2a2bd41373/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=3b59e0f2ee8f1030784f9075b09e59f4d5a59f13de3c558a1a94ae1262a5f141" alt="" />TV & Audio</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("cctv")}><img src="https://www.clipartmax.com/png/middle/282-2820814_cctv-icon-wireless-security-camera.png" alt="" />CCTV and Biometric</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("cables")}><img src="https://static.vecteezy.com/system/resources/previews/065/317/982/non_2x/simple-usb-cable-connector-data-technology-icon-design-vector.jpg" alt="" />Cables & Connectors</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("power")}><img src="https://img.myloview.com/stickers/power-bank-icon-portable-charging-device-charged-battery-smartphone-indication-vector-illustration-700-125030212.jpg" alt="" />Power Solutions</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("printer")}><img src="https://i.fbcd.co/products/resized/resized-750-500/991fa8eaa7781beafd57ee52132e9f1887d1d7fda61a3033e9a556d1813f5b93.jpg" alt="" />Printers & Projectors</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("networking")}><img src="https://img.freepik.com/premium-vector/wireless-network-connection-devices-icon-set_657438-40877.jpg" alt="" />Networking & Connectivity</a></li>
              <li><hr className="dropdown-divider" /></li>

              <li><a className="dropdown-item" href="#"  onClick={() => handleCategoryClick("electronics")}><img src="https://img.icons8.com/3d-fluency/1200/hdd.jpg" alt="" />Storage Devices</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("jewelery")}><img src="https://media.istockphoto.com/id/1205829975/vector/engagement-ring-solid-icon-romantic-proposal-jewelry-item-with-diamond-wedding-asset-vector.jpg?s=612x612&w=0&k=20&c=iziEQq7iMdc8_cF1lfKZRKoBpf1_pSE1DaLJZ1OHi1c=" alt="" />Jewelry</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("mensClothing")}><img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/03/Fashion-Mens-Clothing-Icon-Graphics-12861778-4-580x386.jpg" alt="" />Men's Clothing</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategoryClick("womensClothing")}><img src="data:image/png;base64,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" alt="" />Women's Clothing</a></li>
            </ul>
          </div>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0 text-center">
           <li className="nav-item pe-4">
            <nav><Link className='text-white pn d-flex align-items-center' to ="/Home" onClick={() => setItems([])}>Home</Link></nav>
           </li>

           <li className="nav-item px-4">
            <nav><Link className='text-white pn' to ="/About" onClick={() => setItems([])}>About</Link></nav>
           </li>

           <li className="nav-item px-4">
            <a className="nav-link" href="#">Discounted Products</a>
           </li>


           <li className="nav-item px-4">
           <nav><Link className='text-white pn' to ="/Contact" onClick={() => setItems([])}>Contact</Link></nav>
           </li>

          </ul>
        </div>
      </div>
    </nav>

     {/*display items here*/}
          {!item && items.length > 0 && (
            <div className="items-container">
              {items.map((item) => (
              <div key={item.id} className='item-card' onClick={() => handleItemClick(item)} style={{cursor:'pointer'}}>
               <img src={item.image} alt={item.description} className='item-image' />
                <h5 className='items-description'>{item.description}</h5>
                <p className="item-price">{item.price}</p>
                <p className="orange"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
                <p className="item-rating">Rating: {item.rating}</p>
              </div>
             ))}
            </div>
        )}

      {/* Single Item Details */}
         {item && (
          <div className="item-details">
            <div>
            <button class='lbtn' onClick={handleBackClick}><i class='bi bi-arrow-left'></i></button>
            </div>
             <div className='item-details-card'>
               <img src={item.image} alt={item.description} className="item-details-image" />
               <h2>{item.description}</h2>
               <h4 className='item-price py-2'>Price : {item.price}</h4>
               <p className='item-rating'>Rating : {item.rating} ⭐</p>
              </div>
          </div>
        )}

 </div>
  )
}

export default Home;
