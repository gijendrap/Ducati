import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
// import HelloPage from './Bike2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// eslint-disable-next-line no-lone-blocks
{/* <HelloPage key="hello" /> */}
const pages = [<App key="app" />, ];

const carouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselContainer = () => (
  <div style={{ position: 'fixed', left: 0, right: 0,  zIndex: 999 }}>
    <Slider {...carouselSettings}>
      {pages.map((page, index) => (
        <div key={index}>{page}</div>
      ))}
    </Slider>
  </div>
);

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <CarouselContainer />

      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>ok —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>22/12/2022</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Overlay /> 
);
