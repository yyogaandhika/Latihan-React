import React, { useState } from 'react';

const slides = [
  {
    title: 'We Serve Quality Food',
    description:
      'Sedap is a restaurant, bar and coffee roastery located in Italy. We have awesome recipes and the most talented chefs in town!',
    backgroundImage: '/img/banner.jpg',
  },
  {
    title: 'Delicious Italian Cuisine',
    description: 'Taste authentic Italian flavors prepared by our expert chefs.',
    backgroundImage: '/img/banner2.jpg',
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goPrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

  function goNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <section
      style={{
        backgroundImage: `url('${currentSlide.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: 'darken',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* Konten Slide */}
      <div>
        <h1
          style={{
            fontFamily: "'Bentos-Script', cursive",
            fontSize: '3rem',
            marginBottom: '1rem',
          }}
        >
          {currentSlide.title}
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '1rem' }}>
          {currentSlide.description}
        </p>
        <button
          style={{
            backgroundColor: '#b79439',
            color: 'white',
            border: 'none',
            padding: '10px 25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '3px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#9c7e1a')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#b79439')}
        >
          More Detail
        </button>
      </div>

      {/* Tombol kiri */}
      <button
        onClick={goPrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '30px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          padding: '10px 15px',
          cursor: 'pointer',
          borderRadius: '50%',
          userSelect: 'none',
          zIndex: 10,
        }}
        aria-label="Previous Slide"
      >
        &#8592;
      </button>

      {/* Tombol kanan */}
      <button
        onClick={goNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '30px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          padding: '10px 15px',
          cursor: 'pointer',
          borderRadius: '50%',
          userSelect: 'none',
          zIndex: 10,
        }}
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </section>
  );
}
