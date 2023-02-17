import React from 'react';
import { View, Text, Image } from 'react-native';
import todos from '../../assets/todos.jpeg';
import animacaologo from '../../assets/Gifs/animacaologo.gif';
import estilo from './estilo.js';

const Telaquato = () => (
	<View style={estilo.geral}>
	<Text style={estilo.titu} > Lista de Personagens Principais </Text>
	<Image style={estilo.image} source={todos} />
	<Text style={estilo.tex}>
	Agrande maioria dos personagens da série
Esta é uma lista de todos os personagens de One Piece Principais.
 </Text>
 <Text style={estilo.nomes}>
 Luff, Zoro, Sanji, Ace, Shanks, Nami, Kaido, Haki, Charlotte Katakuri, Tony Tony Chopper, Portgas D. Ace, Kuzan, Busoshoku Haki, Enel, Monkey, Gold Roger,
 </Text>
 
 <Text style={estilo.link}>
 Lista reduzida Veja mais em:
	https://onepiece.fandom.com/pt/wiki/Lista_de_Personagens_Can%C3%B4nicos
 </Text>
 <Image style={estilo.gif} source={animacaologo} />
	</View>
);
export default Telaquato;