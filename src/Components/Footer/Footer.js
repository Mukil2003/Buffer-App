import React from "react";
import "./Footer.css";
import Btn from "../Btn";

let btnStyle = {
  backgroundColor: "none",
  name: "App Store",
  color: "#2C4BFF",
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #2C4BFF",
  icon: "fa-brands fa-apple",
};
let btnStyle2 = {
  backgroundColor: "none",
  name: "Play Store",
  color: "#2C4BFF",
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #2C4BFF",
  icon: "fa-brands fa-google-play",
};

function Footer() {
  return (
    <div className="footer">
      <div className="footer-1-box">
        <h1>Buffer</h1>

        <div className="social-connections">
          <div className="social-media">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-mastodon"></i>
          </div>
          <div className="download">
            <h3>Download</h3>
            <div className="store">
              <Btn contents={btnStyle} />
              <Btn contents={btnStyle2} />
            </div>
          </div>

          <div className="copyright">
            <p>Copyright ©2023 Buffer|Privacy|Terms|Security</p>
          </div>
        </div>
      </div>

      <div className="footer-2-box">
        <h3>Tools</h3>
        <div className="footer-2-contents">
          <a href="www.google.com">Publishing</a>
          <a href="www.google.com">Analytics</a>
          <a href="www.google.com">Engagement</a>
          <a href="www.google.com">Start Page</a>
          <a href="www.google.com">Extras</a>
          <a href="www.google.com">AI Assistant</a>
        </div>
      </div>

      <div className="footer-2-box">
        <h3>Resources</h3>
        <div className="footer-2-contents">
          <a href="www.google.com">Blog</a>
          <a href="www.google.com">Library</a>
          <a href="www.google.com">Extension</a>
          <a href="www.google.com">Free Image Editor</a>
          <a href="www.google.com">Free UTM Builder</a>
          <a href="www.google.com">Free Marketing Tools</a>
          <a href="www.google.com">Social Media Terms Glossary</a>
          <a href="www.google.com">Compare Buffer</a>
        </div>
      </div>
      <div className="footer-2-box">
        <h3>Support</h3>
        <div className="footer-2-contents">
          <a href="www.google.com">Help Center</a>
          <a href="www.google.com">Status</a>
          <a href="www.google.com">What's New</a>
          <a href="www.google.com">Product Roadmap</a>
          <a href="www.google.com">Request a Feature</a>
        </div>
      </div>
      <div className="footer-2-box">
        <h3>Company</h3>
        <div className="footer-2-contents">
          <a href="www.google.com">About</a>
          <a href="www.google.com">Transparency</a>
          <a href="www.google.com">Careers</a>
          <a href="www.google.com">Accessibility</a>
          <a href="www.google.com">Press</a>
          <a href="www.google.com">Sitemap</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
