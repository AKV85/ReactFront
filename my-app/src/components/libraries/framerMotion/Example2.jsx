import { motion } from 'framer-motion';

function Example2() {
    return (
        <motion.img
            src="https://picsum.photos/200"
            whileHover={{ scale: 3 }}
            transition={{ duration: 0.5 }}
        />
    );
}

export default Example2;
