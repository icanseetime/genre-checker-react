import React, { useState, useContext, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { TokenContext } from '../../utils/TokenContext'

// Components
import SearchField from '../SearchField/SearchField'
import ResultBox from '../ResultBox/ResultBox'
import ArtistGenres from '../ArtistGenres/ArtistGenres'

export default function Main() {
	const { token, setToken } = useContext(TokenContext)
	const [artists, setArtists] = useState([])
	const [error, setError] = useState('')
	const history = useHistory()

	useEffect(() => {
		;(async function updateToken() {
			if (!token) {
				setToken(await getToken())
			}
		})()
	})

	const getToken = async () => {
		return fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' +
					btoa(
						`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
					)
			},
			body: 'grant_type=client_credentials'
		})
			.then((response) => response.json())
			.then((auth) => {
				setToken(auth.access_token)
				return auth.access_token
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleSearch = async (e) => {
		try {
			e.preventDefault()
			history.push('/')
			setArtists([])
			const searchTerm = e.target.searchField.value
			if (searchTerm) {
				getArtists(searchTerm)
				setError('')
			} else {
				setError("I don't know how to help you with that 🤨")
			}
		} catch (err) {
			console.log(err)
			setError(
				'Oops. Something went wrong while we were looking for artists. Please try again 🤞'
			)
		}
	}

	const getArtists = (searchTerm) => {
		fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			}
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.log(data.error)
					setError(
						'Oops. Something went wrong while we were looking for artists. Please try again 🤞'
					)
				} else if (!data.artists.items.length) {
					setError(
						"Sorry, we couldn't find any artists that matched your search 😢"
					)
				} else {
					setArtists(data.artists.items)
				}
			})
	}

	const displayResults = (num) => {
		if (num === 0) {
			return ''
		} else if (num === 1) {
			return 'We found 1 artist with a similar name'
		} else {
			return `We found ${num} artists with similar names`
		}
	}

	return (
		<main>
			<SearchField onSubmit={handleSearch} />
			{error && <p>{error}</p>}
			<Switch>
				<Route exact path="/">
					<p>{displayResults(artists.length)}</p>
					<ResultBox artists={artists} />
				</Route>
				<Route path="/artist/:id">
					<ArtistGenres />
				</Route>
			</Switch>
		</main>
	)
}
