const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.js', 'utf-8');

// 1. Mobile specific layout adjustments to show 2 items per row
content = content.replace(/className="col-lg-2 overflow-hidden"/g, 'className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden"');
content = content.replace(/className="col-lg-2 wd overflow-hidden"/g, 'className="col-6 col-md-4 col-lg-2 wd mb-4 overflow-hidden"');
content = content.replace(/className="col-lg-2 wd1 pb-4 overflow-hidden ms-1"/g, 'className="col-6 col-md-4 col-lg-2 wd1 mb-4 pb-4 overflow-hidden ms-1"');
content = content.replace(/className="col-lg-2 ms-1 overflow-hidden"/g, 'className="col-6 col-md-4 col-lg-2 mb-4 ms-1 overflow-hidden"');
content = content.replace(/className="col-lg-2 overflow-hidden ms-1"/g, 'className="col-6 col-md-4 col-lg-2 mb-4 ms-1 overflow-hidden"');
content = content.replace(/className="col-lg-2 ps-3 overflow-hidden"/g, 'className="col-6 col-md-4 col-lg-2 mb-4 ps-3 overflow-hidden"');
content = content.replace(/className="col-lg-2 wd overflow-hidden ps-3"/g, 'className="col-6 col-md-4 col-lg-2 wd mb-4 ps-3 overflow-hidden"');
content = content.replace(/className="col-lg-2 overflow-hidden shadow"/g, 'className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden shadow"');

// 2. Transforming Quick view links to open the item detail view
const regex = /<div className="box position-relative.*?<a[^>]*Quick view.*?<\/a>\s*<\/div>\s*<\/div>/gs;
content = content.replace(regex, (block) => {
    // Extract image src
    const imgMatch = block.match(/<img[^>]*src=({[^}]+}|"[^"]+")[^>]*>/);
    const imgSrc = imgMatch ? imgMatch[1] : "''";

    // Extract description
    const descMatch = block.match(/<span[^>]*>(.*?)<\/span>/s);
    let desc = descMatch ? descMatch[1].trim() : "Product";

    // Extract price
    const priceMatch = block.match(/<p className="text-primary[^>]*>(.*?)<\/p>/s);
    let price = priceMatch ? priceMatch[1].trim() : "";

    // Safely escape quotes
    price = price.replace(/'/g, "\\'");
    desc = desc.replace(/'/g, "\\'");

    const itemStr = `{ image: ${imgSrc}, description: '${desc}', price: '${price}', rating: '4.0' }`;
    const newBtn = `<button onClick={() => setItem(${itemStr})} className="btn btn-primary btn-sm mt-2"><i className="bi bi-eye"></i> Quick view</button>`;

    // Replace the 'Quick view' anchor with 'button'
    return block.replace(/<a[^>]*Quick view[^>]*>.*?<\/a>/i, newBtn);
});

// 3. Add useState if not there
if (content.indexOf('const [item, setItem] = useState(null);') === -1) {
    const stateCode = `  const [item, setItem] = useState(null);\n  const handleBackClick = () => { setItem(null); };\n`;
    content = content.replace(/function Home\(\) \{\s*/, 'function Home() {\n' + stateCode);
}

// 4. Wrap with the detail view
if (content.indexOf('handleBackClick') !== -1 && content.indexOf('{item && (') === -1) {
    const singleViewCode = `
      {item && (
        <div className="container py-5">
          <button className='btn btn-outline-secondary mb-3' onClick={handleBackClick}><i className='bi bi-arrow-left'></i> Back to Home Categories</button>
          <div className='row align-items-center bg-white p-4 shadow-sm rounded'>
             <div className="col-md-6 text-center">
               <img src={item.image} alt={item.description} className="img-fluid rounded" style={{maxHeight: '400px'}} />
             </div>
             <div className="col-md-6 mt-4 mt-md-0">
               <h2 className="fw-bold">{item.description}</h2>
               <p className="orange mb-1"><i className='orange'>⭐⭐⭐⭐</i> <i className="bi bi-star"></i></p>
               <p className='text-muted mb-4'>Rating : {item.rating} ⭐</p>
               <h3 className='text-primary fw-bold mb-4'>{item.price}</h3>
               
               <div className="d-flex align-items-center gap-3 mb-4">
                 <div className="input-group" style={{width: '120px'}}>
                   <button className="btn btn-outline-secondary" type="button">-</button>
                   <input type="text" className="form-control text-center" defaultValue="1" />
                   <button className="btn btn-outline-secondary" type="button">+</button>
                 </div>
                 <button className="btn btn-primary px-4 py-2"><i className="bi bi-cart-plus me-2"></i>Add to Cart</button>
               </div>
               
               <div className="mt-4 pt-4 border-top">
                 <h5>Product Details</h5>
                 <p className="text-secondary small">This product comes with guaranteed quality and warranty. Choose the best electronics, gadgets, and accessories from our wide range of products.</p>
               </div>
             </div>
          </div>
        </div>
      )}
      <div style={{ display: item ? 'none' : 'block' }}>
`;
    content = content.replace('return (\n    <div>', 'return (\n    <div>' + singleViewCode);
    content = content.replace(/(<\/div>\s*)\Z/, '</div>\n$1');
}

fs.writeFileSync('src/pages/Home.js', content, 'utf-8');
console.log('Refactored Home.js using Node script successfully!');
