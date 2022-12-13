import React from 'react';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import ten from '../images/ten.png';


const Sectiontwo = () => {
  return (
    <div className='min-h-screen w-[100%] mx-auto px-24 grid grid-cols-2 gap-6'>
      <div>
        <img src={two} className="col-span-2" />
            <div className='grid grid-cols-2 py-4'>
                <img src={three} alt="" />
                <img src={four} alt="" />
            </div>
      </div>
      <div>
        <img src={ten} className="row-span-1 w-[71%] h-auto img-ten" />
      </div>    
      </div> 
             
         
          
          
  
  )
}

export default Sectiontwo