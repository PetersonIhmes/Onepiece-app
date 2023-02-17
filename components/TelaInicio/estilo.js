import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
	container: {
		flex: 1,
		justfyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#62ffff',
	},
	logo: {
		width: 390,
		height: 200,
		justfyContent: 'center',
		alignItems: 'center',
	},
	principal: {
		textAling: 'center',
		fontWeight: 'bold',
		fontSize: 22,
		textTransform: 'uppercase',
		marginBottom: 25,
	},
	subti: {
		fontSize: 18,
		textAling: 'center',
		color: '#7B68EE',
		textTransform: 'uppercase',
	},
	sobreautor: {
		textAling: 'left',
		alignItems: 'flex-start',
	},
	gitprincipal: {
		width: 500,
		height: 200,
		marginTop: 130,
	},
	botao: {
		borderRadius: 20,
	  marginTop: 15,
	  right: 20,
	},
});
export default estilo;