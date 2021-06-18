import React from 'react'
import PropTypes from 'prop-types'

const Main = (props) => {
	return(
		<div>{props.component}</div>
	)
}

Main.propTypes = {
	component: PropTypes.object.isRequired
}

export default Main