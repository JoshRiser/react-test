import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
	Typography,
	Box,
	IconButton,
	Drawer,
	CardMedia,
	Grid,
	List,
	ListItem,
	Divider,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction
} from '@material-ui/core';
import {
	ArrowDropDown as ArrowDropDownIcon,
	AccountCircle as AccountIcon,
	Devices as DevicesIcon,
	DraftsOutlined as DraftIcon,
	PlaylistAddCheckOutlined as PlaylistIcon,
	PowerSettingsNewOutlined as PowerIcon
} from '@material-ui/icons';

import { drawerTheme } from '../theme';
import styles from '../styles';

export default function AppDrawer({drawerOpen, setDrawerOpen, formData}) {
	const classes = styles();

	return (
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
							<AccountIcon />
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
							<DraftIcon />
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
							<PlaylistIcon />
						</ListItemIcon>
						<ListItemText primary="Triggers" />
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemIcon>
							<PowerIcon />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItem>
				</List>
			</Drawer>
		</ThemeProvider>
	);
}