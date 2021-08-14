import React from 'react'
import './SearchField.css'

export default function SearchField({ onSubmit }) {
	return (
		<form className="SearchField" onSubmit={onSubmit}>
			<label htmlFor="searchField">Search for an artist</label>
			<input
				type="text"
				id="searchField"
				name="searchField"
				className="u-full-width"
			/>
			<button type="submit" className="button-primary">
				Check genre
			</button>
		</form>
	)
}
