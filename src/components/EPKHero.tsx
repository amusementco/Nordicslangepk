import React from 'react';
import albumCover from '../assets/Nordic Slang - Guilty Ripple Art - Digital Cover Art.svg';
import bandPhoto from '../assets/nordic-slang-band-hero.jpg';

export function EPKHero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={bandPhoto} alt="Nordic Slang band" />
        <div className="hero__overlay" />
      </div>
      
      <div className="hero__chip">Nordic Slang — Electronic Press Kit</div>

      <div className="hero__content">

        <div className="hero__grid">
          <div className="hero__text">
            <div className="hero__logo heading-tratt text-7xl">Guilty Ripple Art</div>
            <div className="hero__subheading">New album from Nordic Slang</div>
            <div className="hero__cta">
              <a className="hero__button" href="https://distrokid.com/hyperfollow/nordicslang/guilty-ripple-art-2" target="_blank" rel="noreferrer">
                Listen now
              </a>
            </div>
          </div>
          
          <div className="hero__cover">
            <img src={albumCover} alt="Nordic Slang - Guilty Ripple Art" />
          </div>
        </div>
      </div>
    </section>
  );
}