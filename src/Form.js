import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const AuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setErrors({});
    setFormData({ name: '', email: '', phone: '', password: '' });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrors({});
    setFormData({ name: '', email: '', phone: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (isSignup && !formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (isSignup && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (Object.keys(newErrors).length === 0) {
      alert(`${isSignup ? 'Signup' : 'Login'} successful!`);
      toggleModal(); // Close modal on success
    } else {
      setErrors(newErrors); // Show errors if any
    }
  };


  return (
    <>
      <button className="btn-color text-white ms-5 bgcolor2 hove" onClick={toggleModal}>
        Login
      </button>

      {isModalOpen && (
        <div className="modal show d-block" style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{isSignup ? 'Signup' : 'Login'}</h4>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {isSignup && (
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">Name</label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                  )}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  {isSignup && (
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control custom-input"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>
                  )}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control custom-input"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                  </div>
                  <button type="submit" className="btn-sec">
                    {isSignup ? 'Signup' : 'Login'}
                  </button>
                </form>
              </div>
              <div className="footer">
                <div className="d-flex align-items-baseline ms-4 mb-5">
                  <h6 className="pt-3 ps-5">Don't have an account?</h6>
                  <h6 className="ms-3 hov" onClick={toggleForm}>
                    {isSignup ? 'Login' : 'Signup'}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthModal;
