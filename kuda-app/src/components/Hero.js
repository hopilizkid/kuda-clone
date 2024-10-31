import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./styles/Hero.css";

function Hero() {
  return (
    <section className="hero-main">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1>The money app for Africans.</h1>
          </div>

          <div className="hero-subtext">
            <p>
              Make free transfers, enjoy cashless payment options and earn
              interest on your savings with Kuda.
            </p>
          </div>

          {/* Third Content Div (with buttons) */}
          <div className="hero-buttons">
            <div className="app-store">
              <FaApple className="icon" />
              <span>Get it on Apple Store</span>
            </div>
            <div className="google-play">
              <FaGooglePlay className="icon" />
              <span>Get it on Playstore</span>
            </div>
          </div>

          {/* Fourth Content Div */}
          <div className="extra-info">
            <p>Trusted by millions of users across the globe.</p>
          </div>
        </div>

        {/* Right Side of Hero Section */}
        <div className="hero-right">
          <img src="../assets/kuda-hero-img.png" alt="Kuda App Preview" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
