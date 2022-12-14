import React from 'react';
import chloe from '../images/chloe.png';
import red from '../images/red.png';
import black from '../images/black.png';
import yellow from '../images/yellow.png';


const Sectionthree = () => {
    return (
      
      <div className=' flex lg:flex-row gap-6 items-center justify-center px-6 cursor-pointer'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            
              <div className=''>
              <img src={red} alt="" />
              <div className='text-left'>
                    <p>IGURE</p>
                    <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                    <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
          <div className=''>
              <img src={yellow} alt=" " />
              <div className='text-left'>
                    <p>IGURE</p>
                    <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                    <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
          <div className=''>
              <img src={chloe} alt=" " />
              <div className='text-left'>
                  <p>IGURE</p>
                      <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                      <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
         <div className=''>
              <img src={black} alt=" " />
              <div className='text-left'>
                  <p>IGURE</p>
                      <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                      <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
            </div>
            
                  
              

          </div>
        //   {/* <h1 className='font-bold text-xl mb-4'>WOMEN'S FASHION</h1>
        //   <p className='mb-16'>Shop our new arrivals from established brands</p>

        //   <div>
              
        //       <img src={yellow} alt="" />
        //       <img src={chloe} alt="" />
        //       <img src={black} alt="" />
        //   </div> */}
    
  )
}

export default Sectionthree