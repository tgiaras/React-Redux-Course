import {Link} from 'react-router-dom';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from "../animation";
import {useScroll} from '../components/useScroll';

import ScrollTop from '../components/ScrollTop';

const OurWork = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <motion.div className="ourwork" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <motion.div variants={sliderContainer}>
            <motion.div className="frame1" variants= {slider}></motion.div>
            <motion.div className="frame2" variants= {slider}></motion.div>
            <motion.div className="frame3" variants= {slider}></motion.div>
            <motion.div className="frame4" variants= {slider}></motion.div>
        </motion.div>
            <div className="movie">
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div className="line" variants={lineAnim}></motion.div>
                    <Link to="/work/the-athlete">
                        <div className="hide">
                            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                        </div>
                    </Link>
            </div>
            <motion.div className="movie" ref={element} variants={fade} animate={controls} initial='hidden'>
                <h2>The Racer</h2>
                <motion.div className="line" variants={lineAnim}></motion.div>
                    <Link to="/work/the-racer">
                        <div className="hide">
                            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
                        </div>
                    </Link>
            </motion.div>
            <motion.div className="movie" ref={element2} variants={fade} animate={controls2} initial='hidden'>
                <h2>Good Times</h2>
                <motion.div className="line" variants={lineAnim}></motion.div>
                    <Link to="/work/good-times">
                        <div className="hide">
                            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
                        </div>
                    </Link>
            </motion.div>
            <ScrollTop />
        </motion.div>
    )
}

export default OurWork;