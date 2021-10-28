//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";


const ContactUs = () => {
    return (
        <motion.div className="contactus" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <div className="title">
                <div className="hide">
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2> 
                </div>
            </div>
            <div>
                <div className="hide">
                    <motion.div className="social" variants={titleAnim}>
                        <div className="circle" />
                        <h2>
                            Send Us A Message
                        </h2>
                    </motion.div>
                </div>
                <div className="hide">
                    <motion.div className="social" variants={titleAnim}>
                        <div className="circle" />
                        <h2>
                            Send an email.
                        </h2>
                    </motion.div>
                </div>
                <div className="hide">
                    <motion.div className="social" variants={titleAnim}>
                        <div className="circle" />
                        <h2>
                            Social Media
                        </h2>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default ContactUs;