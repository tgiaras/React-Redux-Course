import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion';

import { motion } from 'framer-motion';
import {fade} from '../animation'
import {useScroll} from '../components/useScroll'

const FaqSection = () => {

    const [element, controls] = useScroll();

    return(
        <motion.div className="faq" variants={fade} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, excepturi.</p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, excepturi.</p>
                    </div>
                </Toggle>
                <Toggle title='Different Payment methods'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, excepturi.</p>
                    </div>
                </Toggle>
                <Toggle title='What products do you offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, excepturi.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </motion.div>
    )
}

export default FaqSection;