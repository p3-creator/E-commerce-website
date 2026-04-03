import re

with open(r'c:\Users\DELL\Desktop\E-shop\register-form\src\pages\Home.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Make 2 products visible per row on mobile
content = content.replace('className="col-lg-2 overflow-hidden"', 'className="col-6 col-md-4 col-lg-2 mb-4 overflow-hidden"')
content = content.replace('className="col-lg-2 wd overflow-hidden', 'className="col-6 col-md-4 col-lg-2 wd mb-4 overflow-hidden')
content = content.replace('className="col-lg-2 ps-', 'className="col-6 col-md-4 col-lg-2 mb-4 ps-')

def replace_product(match):
    block = match.group(0)
    
    # Extract image src
    img_match = re.search(r'<img[^>]*src=({[^}]+}|"[^"]+")[^>]*>', block)
    img_src = img_match.group(1) if img_match else "''"
    
    # Extract description
    desc_match = re.search(r'<span[^>]*>(.*?)</span>', block, flags=re.DOTALL)
    desc = desc_match.group(1).strip() if desc_match else "Product"
    
    # Extract price
    price_match = re.search(r'<p className="text-primary[^>]*>(.*?)</p>', block, flags=re.DOTALL)
    price = price_match.group(1).strip() if price_match else ""
    # if price formatting broke, let's just make sure it's safely escaped
    price = price.replace("'", "\\'")
    desc = desc.replace("'", "\\'")
    
    item_str = f"{{ image: {img_src}, description: '{desc}', price: '{price}', rating: '4.0' }}"
    new_btn = f"<button onClick={{() => setItem({item_str})}} className=\"btn btn-primary btn-sm mt-2\"><i className=\"bi bi-eye\"></i> Quick view</button>"
    
    # Replace the actual Quick view anchor
    block = re.sub(r'<a[^>]*Quick view[^>]*>.*?</a>', new_btn, block, flags=re.IGNORECASE|re.DOTALL)
    return block

# Replace within the blocks that contain the text 'Quick view'
content = re.sub(r'<div className="box position-relative.*?<a[^>]*Quick view.*?</a>\s*</div>\s*</div>', replace_product, content, flags=re.DOTALL)

# Add state
if 'const [item, setItem] = useState(null);' not in content:
    state_code = '''  const [item, setItem] = useState(null);
  const handleBackClick = () => { setItem(null); };'''
    content = re.sub(r'function Home\(\) {\s*', 'function Home() {\n' + state_code + '\n', content)

# Wrapping returned content with condition
if 'handleBackClick' in content and '{item && (' not in content:
    single_view_code = '''
      {item && (
        <div className="container py-5">
          <button className='btn btn-outline-secondary mb-3' onClick={handleBackClick}><i className='bi bi-arrow-left'></i> Back to Home</button>
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
                 <p className="text-secondary small">This product is available right now. We guarantee the best quality and service.</p>
               </div>
             </div>
          </div>
        </div>
      )}
      <div style={{ display: item ? 'none' : 'block' }}>
'''
    content = content.replace('return (\n    <div>', 'return (\n    <div>' + single_view_code)
    # The last </div> for return
    content = re.sub(r'(</div>\s*)\Z', '</div>\n\\g<1>', content)

with open(r'c:\Users\DELL\Desktop\E-shop\register-form\src\pages\Home.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated successfully!")
