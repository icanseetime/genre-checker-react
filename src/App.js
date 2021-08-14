import { useState, useMemo } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './skeleton.css'
import './App.css'
import { TokenContext } from './utils/TokenContext'

// Components
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
	// Token context
	const [token, setToken] = useState(null)
	const tokenValue = useMemo(() => ({ token, setToken }), [token, setToken])

	return (
		<div className="App">
			<Router>
				<TokenContext.Provider value={tokenValue}>
					<Header />
					<Main />
				</TokenContext.Provider>
			</Router>
		</div>
	)
}

export default App
