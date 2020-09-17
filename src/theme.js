import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#00d0ff',
		},
		secondary: {
			main: '#ffffff',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#13314d',
		},
	},
});

export default theme;