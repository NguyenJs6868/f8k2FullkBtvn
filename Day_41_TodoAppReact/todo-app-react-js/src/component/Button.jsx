// import React from 'react'

function Button(props) {
    // eslint-disable-next-line react/prop-types
    const { text, ..._props} = props;

		return (
					<button {..._props} >
						{text}
					</button>
		)
}

export default Button;

