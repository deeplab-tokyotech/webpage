import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					deeplab
				</Typography>
				{/* <Button color="inherit" onClick={()=> this.handlePageMove('/about')}>About Us</Button>
				<Button color="inherit" onClick={()=> this.handlePageMove('/news')}>News</Button>
				<Button color="inherit" onClick={()=> this.handlePageMove('/contact')}>Contact</Button> */}
				<Button color="inherit"><Link to='/about'>About Us</Link></Button>
				<Button color="inherit"><Link to='/news'>News</Link></Button>
				<Button color="inherit"><Link to='/contact'>Contact</Link></Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
