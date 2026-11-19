import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './App.css';

import coffeeImg from './images/coffee.png';
import heroImg from './images/friends.png';
import { articlesData } from './data';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="page-wrapper">
      <header className="navbar">
        <div className="navbar-inner">
          <div 
            className="logo" 
            onClick={() => setSelectedArticle(null)} 
            style={{ cursor: 'pointer' }}
          >
            HotCoffee
          </div>

          <div className="search-box">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>

          <nav className="nav-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); setSelectedArticle(null); }}>Home</a>
            <a href="#articles" onClick={() => setSelectedArticle(null)}>Articles</a>
            <div className="social-icons">
              <a href="#instagram"><FaInstagram /></a>
              <a href="#twitter"><FaTwitter /></a>
              <a href="#linkedin"><FaLinkedin /></a>
            </div>
          </nav>
        </div>
      </header>





      {selectedArticle ? (
        <main className="detail-container">
          <div className="detail-banner">
            <img src={selectedArticle.image} alt={selectedArticle.title} />
            <div className="banner-btn-wrapper">
              <button className="back-btn" onClick={() => setSelectedArticle(null)}>
               Return
              </button>
            </div>
          </div>

          <div className="detail-content">
            <h1>{selectedArticle.title}</h1>
            <div className="detail-meta">
              <strong>{selectedArticle.author || 'Written by John Doe'}</strong>
              <span>{selectedArticle.date}</span>
            </div>
            <hr className="detail-divider" />
            <p className="detail-text">{selectedArticle.fullText || selectedArticle.shortText}</p>
          </div>
        </main>
      ) : (
        <>
          <section className="hero-section">
            <div className="hero-inner">
              <div className="hero-text">
                <h1>
                  Make better <br />
                  coffee <img src={coffeeImg} alt="coffee" className="coffee-icon" />
                </h1>
                <p>why learn how to blog?</p>
              </div>

              <div className="hero-image">
                <img src={heroImg} alt="Team illustration" />
              </div>
            </div>
          </section>

          <section className="cards-section" id="articles">
            <div className="cards-grid">
              {articlesData.map((item) => (
                <article className="blog-card" key={item.id}>
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p className="card-desc">{item.shortText}</p>

                    <div className="card-footer">
                      <span className="card-date">{item.date}</span>
                      <span 
                        className="read-more-btn" 
                        onClick={() => {
                          setSelectedArticle(item);
                          window.scrollTo(0, 0);
                        }}
                      >
                        Read more
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
