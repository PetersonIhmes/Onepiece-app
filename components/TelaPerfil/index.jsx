import React from 'react';
import { Text, View, Image } from 'react-native';
import animacaologo from '../../assets/Gifs/logoanimada.gif';
import amigos from '../../assets/amigos.png';

import estilo from './estilo';

const TelaPerfil = () => (
	<View style={estilo.containerpg}>
	<Text style={ estilo.titlepg }>
		Saiba Mais  {'\n'}
	</Text>
	<Image style={{width: 300}} source={animacaologo}/>
	<Text style={estilo.titulopg}>
	O que é o One Piece de verdade? {'\n'}
	</Text>

	<Text style={estilo.sobreautor}>
	<Text style={estilo.span}>	Autor: </Text>Eiichiro Oda {'\n'}
	<Text style={estilo.span}>	Volumes: </Text>104{'\n'}
	<Text style={estilo.span}>	Demografia:</Text> Shonen (adolescente masculino){'\n'}
<Text style={estilo.span}> Adaptações:</Text> One Piece (1999){'\n'} <Text style={estilo.span}>One Piece Film:</Text> Red (2022), O Grande Pirata do Ouro! (2000)
	<Text style={estilo.span}>{'\n'}	Gêneros: </Text>Ficção de aventura, Fantasia{'\n'}
	</Text>

	<Text style={estilo.textopg}>
		One Piece é o nome que o mundo deu a todo o tesouro ganho pelo Rei dos Piratas Gol D. Roger. Pelo menos uma parte dele é um tesouro que pertenceu a Joy Boy durante o Século Perdido. {'\n'} Diz-se que o tesouro tem um valor inimaginável e atualmente está localizado na ilha final da Grand Line, Laugh Tale.
	</Text>
	<Image style={estilo.imagefundo} source={amigos} />
  </View>
);
export default TelaPerfil;