import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";



const animations = {
    initial: { opacity: 0, x: 250 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};



export default function Home(){
    return <>
        <motion.div style={{ width: '100%' }}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7 }}
        >
            <div className=" text-center mt-0">
                <h1 className="display-4 text-center mb-5">
                    <code>&#60;</code> Welcome <code>To</code> Gadwelooh <code>/&#62;</code>
                </h1>
                
                <div className="card-body mt-5">
                    <p className="card-text fs-5 mb-4">Go to <code>/courses</code> and select your desired courses to schedule generation.</p>
                    <NavLink to="/courses" className="btn btn-lg btn-outline-primary">Start Adding Courses</NavLink>
                </div>
            </div>
        </motion.div>
    </>
}