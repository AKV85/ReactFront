import { motion } from 'framer-motion';

function Example3() {
    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 500 }}
        >
            Drag me around!
        </motion.div>
    );
}

export default Example3;
