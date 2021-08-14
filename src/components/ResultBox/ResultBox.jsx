import React from 'react'
import './ResultBox.css'

// Components
import ArtistLink from '../ArtistLink/ArtistLink'

export default function ResultBox({ artists }) {
	return (
		<section className="ResultBox">
			{artists &&
				artists.map((artist) => {
					return (
						<ArtistLink
							id={artist.id}
							name={artist.name}
							img={artist.images[0] && artist.images[0].url}
							key={artist.id}
						/>
					)
				})}
		</section>
	)
}
