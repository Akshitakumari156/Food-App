import React from 'react';
import Data from '../Data/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Chef() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div className="h-[90vh] bg-amber-200">
      <div className='pt-2 flex justify-center font-extrabold text-4xl font-serif'>Our Chef's</div>
      <div className="w-3/4 m-auto">
        <div className="mt-3">
          <Slider {...settings}>
            {Data.map((d) => (
              <div key={d.id} className="p-4 "> 
                <div className="h-auto rounded-xl bg-white border flex flex-col justify-center p-4">
                  <img className="h-96 rounded-xl w-96 object-cover" src={d.img} alt={d.name} />
                  <div className="p-4 rounded-b-xl flex flex-col justify-center">
                    <div className="font-extrabold text-lg text-black">{d.name}</div>
                    <div className='text-black font-bold '>Experience: {d.Experience}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Chef;
