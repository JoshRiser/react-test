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
import { Formik, Form, Field } from 'formik';
import ReactInputMask from 'react-input-mask';
import * as Yup from 'yup';

export default function AppForm({formData, setFormData}) {
	const classes = styles();
	const preventDefault = (event) => event.preventDefault();

	// const updateInput = function(e) {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// }
	const updateCheck = function(e) {
		setFormData({ ...formData, [e.target.name]: e.target.checked });
	}
	// const submitForm = function(e) {
	// 	e.preventDefault()

	// }
	const fieldAtts = {
		color: "secondary",
		className: classes.input,
		// required: true,
	}

	const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
	const validatePhone = (e) => {
		let error
		if(!e) {
			error = 'Required'
		} else if(!e.match(phoneRegExp)) {
			error = 'Invalid phone number'
		}
		return error
	}
	const validationSchema = Yup.object().shape({
		user_name: Yup.string().required('Required'),
		user_email: Yup.string().email('Invalid email address').required('Required'),
	})

	return (
		<Formik
			initialValues={{
				user_name: formData.user_name,
				user_phone: '',
				user_email: '',
				pairing: false
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				// console.log(values);
				request.post('http://projects.codeandtrust.com/api/user/create', {form: values}, function(err,red,body) {
					console.log(body);
				});
			}}
		>
			{({values, errors, handleChange, handleSubmit}) => (
				<Form id="user-form" autoComplete="off" onSubmit={handleSubmit}>
					<Field
						as={TextField}
						name="user_name"
						label="Your Name"
						error={errors.user_name ? true : false}
						helperText={errors.user_name ? errors.user_name : null}
						{...fieldAtts}
					/>
					<ReactInputMask
						mask="(999) 999.9999"
						onChange={handleChange}
						>
						{() => (
							<Field
								as={TextField}
								type="tel"
								name="user_phone"
								validate={validatePhone}
								error={errors.user_phone ? true : false}
								helperText={errors.user_phone ? errors.user_phone : null}
								{...fieldAtts}
							/>
						)}
					</ReactInputMask>
					<Field
						as={TextField}
						name="user_email"
						label="Email Address"
						error={errors.user_email ? true : false}
						helperText={errors.user_email ? errors.user_email : null}
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
							<Field
								as={Switch}
								name="pairing"
								color="primary"
								checked={values.pairing}
							/>
						</Grid>
						<Grid item xs={6} style={{ textAlign: 'right' }}>
							ENABLE PAIRING  
						</Grid>
					</Grid>
				</Form>
			)}
		</Formik>
	);
}