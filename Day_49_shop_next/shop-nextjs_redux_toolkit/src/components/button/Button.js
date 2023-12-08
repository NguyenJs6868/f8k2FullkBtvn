import React from 'react'
import "./button.scss"

function Button({text}) {
	return (
		<button className='button-el'>{text}</button>
	)
}

export default Button