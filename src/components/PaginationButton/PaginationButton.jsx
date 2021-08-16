import React from 'react'
import './PaginationButton.css'

export default function PaginationButton({ name, onClick, current }) {
	return (
		<button
			disabled={!current}
			onClick={onClick}
			style={{
				cursor: current ? 'pointer' : 'not-allowed'
			}}
			className={
				current ? 'PaginationButton button-primary' : 'PaginationButton'
			}
		>
			{name}
		</button>
	)
}
