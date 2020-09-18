import React from 'react';
import {
	Typography,
	Box,
	Toolbar,
	IconButton,
	CardMedia,
	AppBar,
	Button,
} from '@material-ui/core';
import {
	AddPhotoAlternate as PhotoIcon,
} from '@material-ui/icons';
import styles from './styles';

import AppDrawer from './components/AppDrawer';
import AppToolbar from './components/AppToolbar';
import AppForm from './components/AppForm';

export default function App() {
	const classes = styles();
	
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [formData, setFormData] = React.useState({
		user_name: 'Josh Riser',
		user_phone: '',
		user_email: '',
		pairing: false, 
	});

	return (
		<React.Fragment>
			<AppDrawer
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
				formData={formData}
			/>
			<AppToolbar
				setDrawerOpen={setDrawerOpen}
			/>
			<section className={classes.body}>
				<Box className={classes.upload_wrap}>
					<IconButton edge="start" aria-label="upload">
						<PhotoIcon className={classes.upload} />
					</IconButton>
				</Box>
				<CardMedia
					className={classes.avatar}
					image="https://api.adorable.io/avatars/285/codeandtrust.png"
				/>
				<Typography className={classes.name} variant="h3" component="h3">{formData.user_name}</Typography>
				<AppForm
					formData={formData}
					setFormData={setFormData}
				/>
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
