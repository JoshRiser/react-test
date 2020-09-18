import React from 'react';

import request from 'request';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { drawerTheme } from './theme';
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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DevicesIcon from '@material-ui/icons/Devices';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

const useStyles = makeStyles((theme) => ({
	options: {
		marginLeft: 'auto'
	},
	paper: {
		background: 'white' 
	},
	drawerHeader: {
		width: 320,
		padding: 20, 
		paddingTop: 50,
		backgroundColor: '#122e42'
	},
	drawerAvatar: {
		width: 64, 
	    height: 64,
	    marginBottom: 15,
	    borderRadius: '50%',
	    border: '2px solid white',
	},
	drawerName: {
		fontSize: 18,
		fontWeight: 600,
		color: 'white',
	},
	drawerCity: {
		fontSize: 18,
		color: 'white',
	},
	listNumber: {
		width: 24,
		height: 24,
		textAlign: 'center',  
		backgroundColor: '#00d0ff',
		color: 'white',
		borderRadius: '50%', 
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

	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [formData, setFormData] = React.useState({
		user_name: 'Josh Riser',
		user_phone: '',
		user_email: '',
		pairing: false, 
	});

	const updateInput = function(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}
	const updateCheck = function(e) {
		setFormData({ ...formData, [e.target.name]: e.target.checked });
	}

	const submitForm = function(e) {
		e.preventDefault()

		request.post('http://projects.codeandtrust.com/api/user/create', {form: formData}, function(err,red,body) {
			console.log(body);
		});
	}

	return (
		<React.Fragment>
			<ThemeProvider theme={drawerTheme}>
				<Drawer classes={{ paper: classes.paper }} anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
					<Box className={classes.drawerHeader}>
						<CardMedia
							className={classes.drawerAvatar}
							image="https://api.adorable.io/avatars/285/codeandtrust.png"
						/>
						<Typography className={classes.drawerName}>{formData.user_name}</Typography>
						<Grid container spacing={0} alignItems="center">
							<Grid item xs={6}>
								<Typography className={classes.drawerCity} component="span">Charleston, SC</Typography>
							</Grid>
							<Grid item xs={6} style={{ textAlign: 'right' }}>
								<IconButton edge="end" aria-label="switch_user" style={{ color: 'white' }}>
									<ArrowDropDownIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Box>
					<List>
						<ListItem button>
							<ListItemIcon>
								<AccountCircleIcon />
							</ListItemIcon>
							<ListItemText primary="Account Settings" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<DevicesIcon />
							</ListItemIcon>
							<ListItemText primary="Paired Devices" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<DraftsOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Invites" />
							<ListItemSecondaryAction>
								<Typography className={classes.listNumber}>
									2
								</Typography>
							</ListItemSecondaryAction>
						</ListItem>
						<Divider />
						<ListItem button>
							<ListItemIcon>
								<PlaylistAddCheckOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Triggers" />
						</ListItem>
						<Divider />
						<ListItem button>
							<ListItemIcon>
								<PowerSettingsNewOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItem>
					</List>
				</Drawer>
			</ThemeProvider>
			<Toolbar>
				<IconButton edge="start" aria-label="menu" onClick={() => setDrawerOpen(true)}>
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
				<Typography className={classes.name} variant="h3" component="h3">{formData.user_name}</Typography>
				<form id="user-form" autoComplete="off" onSubmit={submitForm}>
					<TextField
						name="user_name"
						label="Your Name"
						value={formData.user_name}
						color="secondary"
						className={classes.input}
						onChange={updateInput}
						required
					/>
					<TextField
						name="user_phone"
						label="Phone Number"
						color="secondary"
						className={classes.input}
						onChange={updateInput}
						required
					/>
					<TextField
						name="user_email"
						label="Email Address"
						color="secondary"
						className={classes.input}
						onChange={updateInput}
						required
					/>
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
					<Button form="user-form" type="submit" variant="contained" color="primary" className={classes.saveButton}>
						Save
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
