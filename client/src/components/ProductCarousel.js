import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../index.css';

const slideImages = [
<<<<<<< HEAD
	'images/slide1.jpg',
	'images/slide2.jpg',
	'images/slide3.jpg',
];

const ProductCarousel = () => {
	return (
		<div>
			<Slide easing='ease'>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
				</div>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
				</div>
				<div className='each-slide'>
					<div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
				</div>
			</Slide>
		</div>
	);
=======
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg',
];

const ProductCarousel = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
>>>>>>> feature/Duy2
};

export default ProductCarousel;
