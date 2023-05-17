import { motion } from 'framer-motion';

function Example1() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 100 }}
        >
            Hello World!
        </motion.div>
    );
}

export default Example1;
