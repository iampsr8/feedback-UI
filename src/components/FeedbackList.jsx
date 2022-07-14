import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

import feedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const {feedback,isLoading}=useContext(feedbackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }
  return isLoading ? <Spinner/> : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((feedback) => (
          <motion.div key={feedback.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem
              key={feedback.id}
              item={feedback}
              
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  
}



export default FeedbackList;
