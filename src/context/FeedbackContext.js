import { createContext, useState } from "react";

const feedbackContext=createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'this item is from context',
        rating:9
    }])
    return <feedbackContext.Provider value={{
        feedback:feedback
    }}>
        {children}
    </feedbackContext.Provider>
}

export default feedbackContext