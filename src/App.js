import Header from "./components/Header";

import { useState } from "react";
import feedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(feedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item=>item.id!==id))
        }
    }
  return (
    <>
      <Header />
      <div className="container">
              <FeedbackList key={1} feedbacks={feedback} handleDelete={ deleteFeedback} />
      </div>
    </>
  );
}

export default App;
