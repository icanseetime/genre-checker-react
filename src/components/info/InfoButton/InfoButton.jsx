import React, { useState } from 'react'
import './InfoButton.css'
import { ReactComponent as Info } from './info.svg'
import InfoModal from '../InfoModal/InfoModal'

export default function InfoButton({ iconColor }) {
	const [showModal, setShowModal] = useState(false)

	const switchModalState = () => {
		setShowModal((prev) => !prev)
	}

	return (
		<span className="InfoButton" aria-label="Open information modal">
			<Info fill={iconColor} id="infoIcon" onClick={switchModalState} />
			{showModal && (
				<InfoModal
					showModal={showModal}
					switchModalState={switchModalState}
				/>
			)}
		</span>
	)
}
