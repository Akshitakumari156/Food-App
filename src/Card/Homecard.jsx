import React from 'react';

function Homecard() {
  return (
    <div className="flex justify-center p-4 border bg-gray-100 rounded shadow">
      <div className='-mr-6'>
         <img className="h-74"src='/Photo/food1.jpg'/>
      </div>
      <div className='w-2xl rounded'>
        <p className='ml-6 px-15 text-white font-extrabold text-2xl bg-black p-4 '>What Makes Our Food Special?</p>
        <p className="ml-6 px-15 py-8 text-white bg-black text-base">
          Our food is crafted with the freshest ingredients, ensuring every bite is full of flavor. We focus on sustainability, quality, and a touch of love in every dish we create.
          <br />
          "Savor the taste of freshness, crafted with love and served with care."
          <br />
          Our commitment to sustainability, quality, and a touch of love shines through in every dish we create, delivering a dining experience that's as good for the planet as it is for your taste buds.
        </p>
      </div>
    </div>
  );
}

export default Homecard;
