import PropTypes from 'prop-types'

function Header({ text, bgcolor,textColor }) {
    const headerStyle = {
        backgroundColor: bgcolor,
        color:textColor
    }
  return (
      <header style={headerStyle}>
          <div className="container">
              <h2>{ text}</h2>
          </div>
    </header> 
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgcolor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgcolor: PropTypes.string,
    textColor:PropTypes.string
}

export default Header