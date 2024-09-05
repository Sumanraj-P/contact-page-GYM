import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavActive(!isNavActive);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;

    if (name && email && phone && message) {
      sendEmail(name, email, phone, message);
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  const sendEmail = (name, email, phone, message) => {
    const mailtoLink = `mailto:2215055@nec.edu.in?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <h1>THE <span>FIT</span> CLUB</h1>
        </div>
        <nav id="navbar" className={isNavActive ? 'active' : ''}>
          <ul>
            <li>
              <button type="button" className="nav-link" onClick={() => { /* handle click */ }}>
                Home
              </button>
            </li>
            <li>
              <button type="button" className="nav-link" onClick={() => { /* handle click */ }}>
                Products
              </button>
            </li>
            <li>
              <button type="button" className="nav-link" onClick={() => { /* handle click */ }}>
                Shop
              </button>
            </li>
            <li>
              <button type="button" className="nav-link" onClick={() => { /* handle click */ }}>
                Plans
              </button>
            </li>
            <li>
              <button type="button" className="nav-link" onClick={() => { /* handle click */ }}>
                Testimonials
              </button>
            </li>
          </ul>
        </nav>
        <div id="hamburger" className="hamburger" onClick={handleHamburgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <section className="contact-section">
        <h2>Get in Touch <span>With Us</span></h2>
        <p>Speak with our experts to share your specific requirements, which can provide customized solutions catering to your needs.</p>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Full Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email Address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No</label>
            <input type="text" id="phone" name="phone" placeholder="Enter Phone No" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter The Message..." required></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </div>
  );
};

export default App;
