import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import CardMedia from '@material-ui/core/CardMedia';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	options: {
		marginLeft: 'auto'
	},
	list: {
		width: 320,
		height: 100, 
		backgroundColor: 'white'
	},
	body: {
		position: 'relative',
		width: '85%',
		maxWidth: 400,
		margin: '0 auto 80px',
	},
	avatar: {
		width: 220, 
	    height: 220,
	    margin: '0 auto 20px',
	    borderRadius: '50%',
	    border: '2px solid white',
	},
	upload_wrap: {
		position: 'absolute',
		top: 72,
		left: '50%',
		marginLeft: 160 
	},
	upload: {
		fontSize: 48 
	},
	name: {
		textAlign: 'center',
		fontFamily: 'Play',
		marginBottom: 40 
	},
	input: {
		width: '100%',
		marginBottom: 20,
	},
	actions: {
		top: 'auto',
		bottom: 0,
		background: 'white',
		textAlign: 'right',
	},
	saveButton: {
		marginLeft: 15,
		color: 'white' 
	}
}));

export default function App() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();

	const [state, setState] = React.useState({
		drawerOpen: false,
		user_name: '',
		user_phone: '',
		user_email: '',
		pairing: false, 
	});

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, drawerOpen: open });
	};

	const updateInput = function(el) {
		setState({ ...state, [el.target.name]: el.target.value });
	}

	const updateCheck = function(el) {
		setState({ ...state, [el.target.name]: el.target.checked });
	}

	const submitForm = function() {
		console.log(state);
	}

	return (
		<React.Fragment>
			<Drawer anchor="left" open={state.drawerOpen} onClose={toggleDrawer(false)}>
				<Box className={classes.list}>
				</Box>
			</Drawer>
			<Toolbar>
				<IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
					<MenuIcon />
				</IconButton>
				<section className={classes.options}>
					<IconButton edge="end" aria-label="options">
						<MoreVertIcon />
					</IconButton>
				</section>
			</Toolbar>
			<section className={classes.body}>
				<Box className={classes.upload_wrap}>
					<IconButton edge="start" aria-label="upload">
						<AddPhotoAlternateIcon className={classes.upload} />
					</IconButton>
				</Box>
				<CardMedia
					className={classes.avatar}
					image="https://api.adorable.io/avatars/285/codeandtrust.png"
				/>
				<Typography className={classes.name} variant="h3" component="h3">
					Josh Riser
				</Typography>
				<form noValidate autoComplete="off">
					<TextField name="user_name" label="Your Name" color="secondary" className={classes.input} onChange={updateInput} />
					<TextField name="user_phone" label="Phone Number" color="secondary" className={classes.input} onChange={updateInput} />
					<TextField name="user_email" label="Email Address" color="secondary" className={classes.input} onChange={updateInput} />
					<TextField
						id="password"
						type="password"
						color="secondary"
						className={classes.input}
						placeholder="Password"
						InputProps={{
							endAdornment:
								<InputAdornment position="end">
									<Link href="#" onClick={preventDefault}>
										CHANGE PASSWORD
									</Link>
								</InputAdornment>
						}}
					/>
					<TextField
						id="pin"
						color="secondary"
						className={classes.input}
						placeholder="Access Pin"
						InputProps={{
							endAdornment:
								<InputAdornment position="end">
									ACCESS PIN  
								</InputAdornment>
						}}
					/>
					<Grid container spacing={0} alignItems="center">
						<Grid item xs={6}>
							<Switch
								name="pairing"
								color="primary"
								inputProps={{ 'aria-label': 'secondary checkbox' }}
								onChange={updateCheck}
							/>
						</Grid>
						<Grid item xs={6} style={{ textAlign: 'right' }}>
							ENABLE PAIRING  
						</Grid>
					</Grid>
				</form>
			</section>
			<AppBar position="static" className={classes.actions}>
				<Toolbar style={{ marginLeft: 'auto' }}>
					<Button color="primary">
						Cancel
					</Button>
					<Button variant="contained" color="primary" className={classes.saveButton} onClick={submitForm}>
						Save
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
