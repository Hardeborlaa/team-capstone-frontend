import React from 'react';
import one from '../images/one.png';

const Sectionone = () => {
  return (
    //   <div className=''>
    //       <div className='sctn-one '>
    //           <img src={one} alt="" className='mb-24 h-full w-full object-cover' />
    //           <div className='sctn-txt'>
    //               {/* <div className='absolute'>
    //                   <h1 className='text-7xl font-extrabold text-gray-900  '>COLLUSION</h1>
    //             <p className='text-gray-900 text-2xl font-medium   '>An exclusive selection of this season's trends.</p>
    //             <button className='bg-gray-900 px-6 py-2 text-white rounded-md'>DISCOVER</button>
    //             <button className='bg-gray-900 px-6 py-2 text-white rounded-md'>SHOP NOW</button>
    //           </div> */}
    //           </div>
    //       </div>
          
    //  </div> 

    <div className='example mb-24'>
      <img src={one} alt="" className='w-full relative'/>
          <div className='overlay absolute top-96 right-40  '>
              <h1 className='text-7xl font-extrabold text-gray-900'>COLLUSION</h1>
        <p className='text-gray-900 text-1xl font-medium mt-4'>An exclusive selection of this season's trends.</p>
        <div className='mt-4'>
          <button className='bg-gray-900 px-6 py-2 text-white rounded-md mr-10'>DISCOVER</button>
          <button className='bg-gray-900 px-6 py-2 text-white rounded-md'>SHOP NOW</button>
        </div>
               
      </div>
      
    </div>
  )
}

export default Sectionone