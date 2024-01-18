import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const data = [
    {
      type: "Product",
      subTypes: [
        "Landing Page",
        "Features",
        "Documentation",
        "Referral Program",
        "Pricing",
      ],
    },
    {
      type: "Services",
      subTypes: [
        "Customer Support",
        "Shipping Information",
        "Returns and Exchanges",
        "Track Your Order",
        "Size Guide",
      ],
    },
    {
      type: "Company",
      subTypes: [
        "About Us",
        "Contact Us",
        "Privacy Policy",
        "Careers",
        "Terms and Conditions"
      ],
    },
    {
      type: "More",
      subTypes: [
        "Affiliate Program",
        "Wholesale Inquiries",
        "Blog",
        "Press and Media",
        "Partner with Us",
      ],
    },
  ];
  const socialLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>ReactCart</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
        Your One-Stop Shopping Destination for Endless Possibilities
        </p>

        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a href="/">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
