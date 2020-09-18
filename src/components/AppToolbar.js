import React from 'react';
import {
	Toolbar,
	IconButton,
} from '@material-ui/core';
import {
	Menu as MenuIcon,
	MoreVert as MoreVertIcon,
} from '@material-ui/icons';

import styles from '../styles';

export default function AppToolbar({setDrawerOpen}) {
	const classes = styles();

	return (
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
	);
}