import React from 'react'
import PropTypes from 'prop-types'

const WorldThree = (props) => {
	return(
		<h2>Apenas <b>BOWSER</b> pode ver essa tela, o que foi passado foi &quot;{props.role}&quot; </h2>
	)
}

WorldThree.propTypes = {
	role: PropTypes.string.isRequired,
}

export default WorldThree