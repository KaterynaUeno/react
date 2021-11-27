import React from "react";
import { useGlobalContext } from "../stripeContext";
import phone from "../images/phone.svg";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes – from startups to large
            enterprises – use Stripe's software and APIs to accept payments,
            send payouts, and manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phone} className="phone-img" alt=""></img>
        </article>
      </div>
    </section>
  );
};

export default Hero;
