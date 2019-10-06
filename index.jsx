import React  from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import client from 'axios'
import thunk from 'redux-thunk'

import App from './App.jsx'

const theme = createMuiTheme({
	// カラーパレット
	palette: {
		type: 'dark',
		//メインカラー
		primary: {
			50: '#e4e4e4',
			100: '#bcbcbc',
			200: '#909090',
			300: '#646464',
			400: '#424242',
			500: '#212121',
			600: '#1d1d1d',
			700: '#181818',
			800: '#141414',
			900: '#0b0b0b',
			A100: '#e76c6c',
			A200: '#e04040',
			A400: '#ec0000',
			A700: '#d30000',
			contrastDefaultColor: 'light',
		},
	},
	// レスポンシブレイアウト用の指定
	'breakpoints': {
		'keys': [
			'xs',
			'sm',
			'md',
			'lg',
			'xl',
		],
		'values': {
			'xs': 360, // スマホ用
			'sm': 768, // タブレット用
			'md': 992, // PC用
			'lg': 1000000000,
			'xl': 1000000000,
		},
	},
	// Material-UIコンポーネントのclassのstyleを上書きする
	overrides: {
		MuiButton: {
			root: {
				// ボタン内アルファベットを大文字変換しない
				textTransform: 'none',
			},
		},
	},
})

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
    document.getElementById('root')
)
