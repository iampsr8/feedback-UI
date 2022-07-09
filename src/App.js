import Header from "./components/Header";

import { useState } from "react";
import feedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
    const [feedback,setFeedback]=useState(feedbackData)
  return (
    <>
      <Header />
      <div className="container">
              <FeedbackList key={1} feedbacks={ feedback} />
      </div>
    </>
  );
}

export default App;
