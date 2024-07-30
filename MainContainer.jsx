import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import CartContainer from './CartContainer';

function MainContainer()
{
    return(<div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section
        className="w-full mt-17 p-6 px-10 mt-12 md:px-16 lg:px-20 py-4 relative
    before:w-full before:h-[1px] before:left-0 before:top-0 before:bg-mainTextGrey before:content before:absolute
    after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-mainTextGrey after:content after:absolute
    "
      >
        <div className="flex flex-col w-full h-full items-center justify-between px-4 md:px-0 max-w-6xl mx-auto">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl mb-12 font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-hoverColor to-logoColor text-mainColor transition-all ease-in-out duration-100">
              Our fresh &{' '}
              <span className="text-logoColor ">healthy fruits</span>
            </p>

            <div className="hidden md:flex gap-3 items-center">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-purple-300 hover:bg-logoColor hover:shadow-lg flex cursor-pointer items-center justify-center transition-all ease-in-out duration-100"
                
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-purple-300 hover:bg-logoColor hover:shadow-lg flex cursor-pointer items-center justify-center "
                
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
          </div>
          <CartContainer/>
        </div>
      </section>
        </div>

    </div>)
}

export default MainContainer