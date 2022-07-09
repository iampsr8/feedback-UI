import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    //calculate average
    let average = feedback.reduce((acc, curr) =>{return acc+curr.rating},0)/feedback.length;
  return (
      <div className="feedback-stats">
          <h4>{ feedback.length} Reviews</h4>
          <h4>Average rating: { isNaN(average.toFixed(2))?0: average.toFixed(2)}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback:PropTypes.array.isRequired
}

export default FeedbackStats