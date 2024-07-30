import { motion } from 'framer-motion';
import { categories } from '../utils/data';
import HeroBg from '../img/w5.jpg';
import RowContainer from './RowContainer';
import { useState } from 'react';
import { listitem } from '../utils/data';

function MenuContainer()
{
  const[filter,setFilter]=useState([{listitem}])

  const handleAddItem = (item) => {
    setFilter([...filter,item,{listitem}]);
  };
    return(<div>
         <section
      id="menu"
      className="w-full my-6 mb-0 p-6 px-5 md:mt-8 md:px-16 lg:px-20 py-2 drop-shadow-xl"
      style={{
        width: '100%',
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col w-full h-full justify-between px-4 md:px-0 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-hoverColor to-logoColor text-white transition-all ease-in-out duration-100 mr-auto">
            Our Hot <span className="text-logoColor">Dishes</span>
          </p>
          <div className='flex flex-row gap-2 '>
         {
            categories.map(function(item){
                return <div>
                  <p className=' h-[150px]  md:w-100 md:min-w-[180px] backdrop-blur-xl mt-10 lg:mt-[2rem] mb-4 lg:mb-12 border-none rounded-lg p-4 cursor-pointer flex  items-center justify-center bg-white hover:bg-itemBg'onClick={() => handleAddItem(item)}>{item.name}</p>
                </div>
            })
         }
 </div>
 <div className='flex flex-row gap-6'>
        <h2>Selected Items:</h2>

        
        {filter.map((item) => (
          <p
            className="bottom-40 h-[150px]  md:w-50 md:min-w-[180px] hover:bg-itemBg backdrop-blur-xl mt-10 lg:mt-[2rem] mb-9 lg:mb-12 border-none rounded-lg p-4 cursor-pointer flex items-center justify-center bg-white hover:bg-itemBg'"
            
          >
            {item.name}
            <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageSrc}
                alt="image"
                className="w-30 h-[120px] -mt-40"
              />

          </p>
))}
        </div>
    </div>
      </div>

    </section>
    </div>)
}
export default MenuContainer