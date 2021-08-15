import React, { useCallback, useEffect, useRef } from 'react'
import './InfoModal.css'

// Icons & logos
import { ReactComponent as CoffeeLogo } from './buyMeACoffee.svg'
import { ReactComponent as GithubIcon } from './github.svg'
import { ReactComponent as EmailIcon } from './email.svg'
import { ReactComponent as ExitIcon } from './exit.svg'

export default function InfoModal({ showModal, switchModalState }) {
	const bgRef = useRef()

	// Close modal when clicking background
	const closeModal = (e) => {
		if (bgRef.current === e.target) {
			switchModalState()
		}
	}

	// Close modal when ESC is pressed
	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				switchModalState()
			}
		},
		[switchModalState, showModal]
	)

	useEffect(() => {
		document.addEventListener('keydown', keyPress)
		return () => document.removeEventListener('keydown', keyPress)
	})

	return (
		<div className="InfoModal" ref={bgRef} onClick={closeModal}>
			{showModal && (
				<div id="modal">
					<div id="exit-button">
						<ExitIcon
							className="exit"
							aria-label="Close modal"
							onClick={switchModalState}
						/>
					</div>
					<h2>Information</h2>
					<p>
						Ever wonder what genres your favorite artists were
						playing? This site is a way to look it up. Type in the
						name of an artist in the search field and click the
						matching one to have a look.
					</p>
					<p>
						To learn more about the project, visit{' '}
						<a
							href="https://github.com/icanseetime/genre-checker-react"
							target="_blank"
							rel="noreferrer"
						>
							The Github Project Site
						</a>
						.
					</p>
					<br />
					<h3>About the developer</h3>
					<p>
						I am a 28 year old web developer student from Norway,
						and I work on side projects like this one in my spare
						time.
					</p>
					<p>
						If you have any feedback or questions, feel free to{' '}
						<a href="mailto:imrgdev@gmail.com">shoot me an email</a>
						. If you want to support my work, you can buy me a
						coffee by clicking the button below. Have a nice day!
					</p>

					<div className="contact-footer">
						<div
							id="coffee-button"
							role="button"
							aria-label="Buy the developer a coffee"
							onClick={() =>
								window.open(
									'https://buymeacoffee.com/icanseetime',
									'_blank'
								)
							}
						>
							<CoffeeLogo />
						</div>
					</div>

					<div className="contact-footer">
						<a
							href="mailto:imrgdev@gmail.com"
							aria-label="E-mail the developer"
						>
							<EmailIcon className="footer-icon" />
						</a>
						<a
							href="https://github.com/icanseetime"
							target="_blank"
							rel="noreferrer"
							aria-label="Go to the developer's Github page"
						>
							<GithubIcon className="footer-icon" />
						</a>
					</div>
				</div>
			)}
		</div>
	)
}
