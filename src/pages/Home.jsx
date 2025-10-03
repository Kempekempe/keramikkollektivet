import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import Logo from '../utils/images/transparent-white.svg';
import heroImage from '../utils/images/blommor.jpg';
import cardImage from '../utils/images/emmaz.jpg';
import { accordionData } from '../utils/content/content.js';
import Accordion1 from '../components/Accordion1';
import Button from '../components/Button.jsx';
import Carousel from '../components/Carousel.jsx';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const handleHeroImageLoad = () => {
    setHeroImageLoaded(true);
  };


  const items = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content for item 1.',
    },
    {
      title: 'Accordion Item 2',
      content: 'This is the content for item 2.',
    },
    {
      title: 'Accordion Item 3',
      content: 'This is the content for item 3.',
    },
  ];


  return (
    <div className="home-page__wrapper">
      <div className='home-page__hero'>
        <img src={Logo} alt="Logo" className="home-page__hero-logo"></img>
        <img 
          className={`home-page__hero-image ${heroImageLoaded ? 'home-page__hero-image--loaded' : ''}`} 
          src={heroImage} 
          alt="Keramikkollektivet hero image" 
          onLoad={handleHeroImageLoad}
          fetchPriority='high'
          srcSet={`${heroImage} 600w, ${heroImage} 1000w, ${heroImage} 2000w`} 
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 100vw, 100vw"
        />
      </div>

      <div className="home-page__content">
        {/* make the card into a vertical card on small screens! also make the image responsive! */}
        <div className='home-page__card'>
          <div className='home-page__card-image-wrapper'>
            <img 
              className='home-page__card-image' 
              src={cardImage} 
              alt="Keramikkollektivet studio image" 
              loading="lazy"
              decoding="async"
            />
           </div>
          <div className='home-page__card-text'>
           <p className='home-page__card-para'>Keramikkollektivet är en liten förening och studio i Slottsstaden.
              Här arbetar vi med keramik i olika former – vi bygger, skulpterar och drejar.
              Vår studio är en plats för både nybörjare och erfarna keramiker att utveckla sina tekniker
              och skapa egna verk. Genom att dela kunskap och erfarenheter strävar vi efter att skapa en
              lärorik och kreativ miljö för alla som vill arbeta med lera.
              <br />
              <br />
              Precis alla är välkommna att ansöka om medlemskap i Keramikkollektivet.
              Klicka här för att skicka in din ansökan. Du får ingen automatisk bekräftelse, men vi lägger dig i vår kö och hör av oss när en plats blir ledig.</p>
            <br />
            <br />
            <Button 
              icon={faChevronRight} 
              className='button__card' 
              onClick={() => window.open('https://docs.google.com/forms/d/1hZIzF78PcMsuUWlxY1DJDAROJHGPtsk-SCKQMb7VduM/edit', '_blank')}
            >
              Medlemskap
            </Button>
          </div>
        </div>
        {/* <Carousel /> */}

      </div>
   </div>
  );
};

export default Home;
