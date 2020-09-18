import { makeStyles } from '@material-ui/core/styles';

const globalStyles = makeStyles((theme) => ({
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

export default globalStyles