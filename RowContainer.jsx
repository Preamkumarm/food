
import { motion } from 'framer-motion';

function RowContainer() {

  return (
    <div>
      <motion.img
                whileHover={{ scale: 1.2 }}
                src={"imageSrc"}
                alt="image"
                className="w-30 h-[120px] -mt-40"
              />
    </div>
  );
}

export default RowContainer;
