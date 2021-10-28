import home1 from '../img/home1.png';
import Wave from './Wave';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim , fade, photoAnim } from '../animation';

const AboutSection = () => {


    return (
        <div className="aboutsection">
            <div className="description">
                <motion.div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>
                            come true
                        </motion.h2>
                    </div>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have proffesionals with amazing skills
                </motion.p>
                <motion.button variants={fade}>
                    Contact us
                </motion.button>
            </div>
            <div className="image">
                <motion.img src={home1} alt="Guy with a camera" variants={photoAnim}/>
            </div>
            <Wave />
        </div>
    )
}

export default AboutSection;