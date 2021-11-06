import React from 'react'
import { Link } from 'react-router-dom'
import './ArtistLink.css'

export default function ArtistLink({ id, name, img }) {
	return (
		<Link className="ArtistLink" to={`/artist/${id}`}>
			<h2>{name}</h2>
			<img
				src={img || './no-image.png'}
				alt={img ? name : 'Circle with text inside saying no image available'}
			/>
		</Link>
	)
}
