import { useState } from "react";

//Framer Motion
import { motion } from 'framer-motion';

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : children[2]}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;