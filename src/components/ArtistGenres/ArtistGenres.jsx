import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TokenContext } from '../../utils/TokenContext'
import './ArtistGenres.css'

export default function ArtistGenres() {
	const { token } = useContext(TokenContext)
	const [loading, setLoading] = useState(true)
	const [img, setImg] = useState('')
	const [name, setName] = useState('')
	const [genres, setGenres] = useState([])
	const { id } = useParams()

	useEffect(() => {
		fetch(`https://api.spotify.com/v1/artists/${id}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			}
		})
			.then((res) => res.json())
			.then((artist) => {
				if (artist.images) {
					if (artist.images[0]) setImg(artist.images[0].url)
				}

				if (artist.name) {
					setName(artist.name)
				}

				if (artist.genres) {
					setGenres(artist.genres)
				}
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)
			})
	}, [loading, token, id])

	if (!loading) {
		return (
			<section className="ArtistGenres">
				<img
					src={img ? img : '../no-image.png'}
					alt={name ? name : 'Text says "No image available"'}
				/>
				<a href={`https://open.spotify.com/artist/${id}`}>
					<h2>{name ? name : 'Artist name missing'}</h2>
				</a>

				{genres.length ? (
					<ul>
						{genres.map((genre) => {
							return <li key={genre}>{genre.toUpperCase()}</li>
						})}
					</ul>
				) : (
					<p>
						This artist does not have any genres connected to them.
						You can click their name to listen to their music.
					</p>
				)}
			</section>
		)
	} else {
		return <p>Loading...</p>
	}
}
