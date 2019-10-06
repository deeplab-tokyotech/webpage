import React from 'react'
import { withRouter } from 'react-router-dom'

import { AppBar, Toolbar, Button } from '@material-ui/core'
import ButtonAppBar from './ButtonAppBar.jsx'

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';

import back_img from '../images/deeplab_background.png'
import styles from  './App.css'
import ResponsiveImgMaterialUi from 'responsive-img-material-ui'

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${back_img})`
//     }
// };

class TopPage extends React.Component {

	constructor (props) {
		super(props)
	}

	handlePageMove(path) {
		this.props.history.push(path)
	}

	state = {
		width : 0,
		height : 0
	}

	render () {
		const { width, height } = this.state;
		return (
				// <div className={styles.TopPage} style={{backgroundImage: `url(${back_img})` }}>
				<div>
					{/* <ButtonAppBar /> */}
					<React.Fragment>
						<CssBaseline />
						<Container maxWidth="lg">
							<Typography component="div" style={{ backgroundColor: "#212121", height: "100vh" }}>
								<ButtonAppBar />
								<p class={styles.TopImage}>
									<img src={back_img} alt="background" />
								</p>
								<Paper>
									<Typography variant="h5" component="h3">
										東工大人工知能研究会 - 競争し共創する -
									</Typography>
									<Typography component="p">
										東工大を拠点に活動する人工知能研究会です。理論から実装まで幅広く活動しています。
									</Typography>
								</Paper>
							</Typography>
						</Container>
					</React.Fragment>
				</div>
		)
	}
}

export default withRouter(TopPage)
