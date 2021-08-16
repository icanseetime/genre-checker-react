import React, { useState, useContext, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { TokenContext } from '../../utils/TokenContext'
import './Main.css'

// Components
import SearchField from '../SearchField/SearchField'
import ResultBox from '../ResultBox/ResultBox'
import ArtistGenres from '../ArtistGenres/ArtistGenres'
import PaginationButton from '../PaginationButton/PaginationButton'

export default function Main() {
	const { token, setToken } = useContext(TokenContext)
	const [artists, setArtists] = useState([])
	const [num, setNum] = useState(0)
	const [error, setError] = useState('')
	const [pagination, setPagination] = useState(false)
	const [next, setNext] = useState('')
	const [prev, setPrev] = useState('')
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
				setPagination(false)
				setError("I don't know how to help you with that 🤨")
			}
		} catch (err) {
			console.log(err)
			setPagination(false)
			setError(
				'Oops. Something went wrong while we were looking for artists. Please try again 🤞'
			)
		}
	}

	const getArtists = (searchTerm, url) => {
		let searchURL = ''
		if (!searchTerm) {
			searchURL = url
		} else {
			searchURL = `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
		}

		fetch(searchURL, {
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
					setPagination(false)
					setError(
						'Oops. Something went wrong while we were looking for artists. Please try again 🤞'
					)
				} else if (!data.artists.items.length) {
					setPagination(false)
					setError(
						"Sorry, we couldn't find any artists that matched your search 😢"
					)
				} else {
					// Set data
					setArtists(data.artists.items)
					setNum(data.artists.total)
					setNext(data.artists.next)
					setPrev(data.artists.previous)

					// Display prev/next buttons
					if (data.artists.total > 20) {
						setPagination(true)
					} else {
						setPagination(false)
					}

					// Scroll to top of window
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					})
				}
			})
	}

	const displayResults = () => {
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
					<p>{displayResults()}</p>
					<ResultBox artists={artists} />
					<div
						id="pagination"
						style={{
							display: pagination ? 'flex' : 'none'
						}}
					>
						<PaginationButton
							name="Previous"
							current={prev}
							onClick={() => getArtists(undefined, prev)}
						/>
						<PaginationButton
							name="Next"
							current={next}
							onClick={() => getArtists(undefined, next)}
						/>
					</div>
				</Route>
				<Route path="/artist/:id">
					<ArtistGenres />
				</Route>
			</Switch>
		</main>
	)
}
