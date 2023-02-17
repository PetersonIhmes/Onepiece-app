import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import logopi from '../../assets/logopi.png';
import bemvindos from '../../assets/Gifs/bemvindos.gif';
import estilo from './estilo.js';


const TelaInicio = (props) => (
	<View style={estilo.container}>
	<Image style={estilo.logo} source={logopi} />
	<Text style={estilo.principal}>
		Feito de fã para fãs
	</Text>

	
		<View style={estilo.botao}>
			<Button title="Embarque Na Aventura" onPress = { () => props.navigation.navigate("TelaPerfil") } />
		</View>
				<View style={estilo.botao}>
			<Button title="Quem é Luff" onPress = { () => props.navigation.navigate("Teladois") } />
		</View>
				<View style={estilo.botao}>
			<Button title="Poderes" onPress = { () => props.navigation.navigate("Telatres") } />
		</View>
				<View style={estilo.botao}>
			<Button title="Principais Personagens" onPress = { () => props.navigation.navigate("Telaquato") } />
		</View>

	<Image  style={estilo.gitprincipal} source={bemvindos} />
 </View>
);
export default TelaInicio;