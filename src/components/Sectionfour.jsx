import React from 'react';
import eleven from '../images/eleven.png';
import twelve from '../images/twelve.png';
import thirteen from '../images/thirteen.png';
import ten from '../images/ten.png';

const Sectionfour = () => {
  return (
      <div>
          <div className=' flex lg:flex-row gap-6 items-center justify-center px-6 cursor-pointer '>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            
              <div className=''>
              <img src={eleven} alt="" />
              <div className='text-left'>
                    <p>IGURE</p>
                    <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                    <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
          <div className=''>
              <img src={twelve} alt=" " />
              <div className='text-left'>
                    <p>IGURE</p>
                    <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                    <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
          <div className=''>
              <img src={ten} alt=" " />
              <div className='text-left'>
                  <p>IGURE</p>
                      <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                      <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
         <div className=''>
              <img src={thirteen} alt=" " />
              <div className='text-left'>
                  <p>IGURE</p>
                      <p className='font-bold'>GREEN MUSCLE FIT POLO SHIRT</p>
                      <p><s>$229.00</s> <span className='orange-text'>$129.00</span></p>
              </div>
                      
          </div>
            </div>
            
                  
              

          </div>
        </div>
  )
}

export default Sectionfour