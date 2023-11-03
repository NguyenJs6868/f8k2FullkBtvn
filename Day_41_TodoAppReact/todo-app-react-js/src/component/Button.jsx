// import React from 'react'

export default function Button(propp) {
        const { text, className } = propp;

		return (
				<>
					<button className={className} >
						{text}
					</button>
				</>
		)
}
