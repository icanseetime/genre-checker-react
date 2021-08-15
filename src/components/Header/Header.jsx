import React from 'react'
import InfoButton from '../info/InfoButton/InfoButton'
import './Header.css'

export default function Header() {
	return (
		<header className="Header">
			<h1
				onClick={() => {
					window.location.assign('/')
				}}
			>
				🎶 Genre Checker
			</h1>
			<InfoButton iconColor="var(--text-color)" />
		</header>
	)
}
