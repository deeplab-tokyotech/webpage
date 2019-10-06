import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import NotFound from './src/NotFound.jsx'
import TopPage from './src/TopPage.jsx'
import AboutUsPage from './src/AboutUsPage.jsx'
import NewsPage from './src/NewsPage.jsx'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={(props) => <TopPage {...props} />} />
			<Route exact path="/about" component={AboutUsPage} />
			<Route exact path="/news" component={NewsPage} />
			{/* それ以外のパス */}
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default hot(module)(App)
