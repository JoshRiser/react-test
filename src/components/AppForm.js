import React from 'react';
import request from 'request';
import {
	TextField,
	InputAdornment,
	Link,
	Grid,
	Switch
} from '@material-ui/core';

import styles from '../styles';

export default function AppForm({formData, setFormData}) {
	const classes = styles();
	const preventDefault = (event) => event.preventDefault();

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
	const fieldAtts = {
		color: "secondary",
		className: classes.input,
		onChange: updateInput,
		required: true,
	}

	return (
		<form id="user-form" autoComplete="off" onSubmit={submitForm}>
			<TextField
				name="user_name"
				label="Your Name"
				value={formData.user_name}
				{...fieldAtts}
			/>
			<TextField
				type="tel"
				name="user_phone"
				label="Phone Number"
				{...fieldAtts}
			/>
			<TextField
				type="email"
				name="user_email"
				label="Email Address"
				{...fieldAtts}
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
	);
}