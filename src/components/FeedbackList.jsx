import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({ feedbacks,handleDelete }) {
    if (!feedbacks || feedbacks.length === 0) {
        return <p>No feedback yet</p>
    }
  return (
      <div className="feedback-list">
          {feedbacks.map(feedback => (
              <FeedbackItem key={feedback.id} item={feedback} handleDelete={handleDelete } />
          ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedbacks:PropTypes.array
}

export default FeedbackList